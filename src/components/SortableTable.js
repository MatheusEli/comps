import { useState } from 'react';
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../hooks/use-sort';

function SortableTable(props) {

    const { config, data } = props;

    const { sortedData, sortOrder, sortBy, setSortColumn } = useSort(props);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column, header: () => {
                return <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            }
        }
    });
    return <div><Table {...props} data={sortedData} config={updatedConfig} /></div>;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp />;
    } else if (sortOrder === 'desc') {
        return <GoArrowSmallDown />;
    }
}

export default SortableTable;
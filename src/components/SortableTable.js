import { useState } from 'react';
import Table from "./Table";

function SortableTable(props) {

    const { config } = props;
    const { data } = props;

    const [updatedTable, setUpdatedTable] = useState(data);

    const getSortValue = (vegetable) => {
        return vegetable.name;
    }

    const handleClickOrder = () => {

        const order = 'desc';

        const updatedData = updatedTable.sort((a, b) => {

            const valueA = getSortValue(a);
            const valueB = getSortValue(b);

            const reverseOrder = order === 'asc' ? 1 : -1;

            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            }else{
                return (valueA - valueB) * reverseOrder;
            } 
        });

        setUpdatedTable(updatedData);
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return { ...column, header: () => { return <th className="bg-red-500" onClick={handleClickOrder}>{column.label}</th> } }
    });
    return <Table {...props} data = {updatedTable} config={updatedConfig}/>;
}

export default SortableTable;
import Table from "./Table";

function SortableTable(props) {

    const { config } = props;

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return { ...column, header: () => { return <th className="bg-red-500">{column.label}</th> } }
    });
    return <Table {...props} config={updatedConfig}/>;
}

export default SortableTable;
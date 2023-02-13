import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage(){

    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4}
    ];

    const config = [
        {label: 'Fruits', sortValue: (fruit) => fruit.name, render: (fruit) => fruit.name},
        {label: 'Color', render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}/>},
        {label: 'Score', sortValue: (fruit) => fruit.score, render: (fruit) => fruit.score},
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return <SortableTable data={data} config={config} keyFn={keyFn}/>
}

export default TablePage;
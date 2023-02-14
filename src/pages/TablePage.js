import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage(){

    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
        {name: 'Cherry', color: 'bg-red-700', score: 2.5}
    ];

    const config = [
        {label: 'Fruits', sortValue: (fruit) => fruit.name, render: (fruit) => fruit.name},
        {label: 'Color', render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}/>},
        {label: 'Score', sortValue: (fruit) => fruit.score, render: (fruit) => fruit.score},
        {label: 'Score Squared', sortValue: (fruit) => fruit.score ** 2, render: (fruit) => fruit.score ** 2},
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return <div>
        <Table data={data} config={config} keyFn={keyFn}/>
        <SortableTable data={data} config={config} keyFn={keyFn}/>
    </div>
}

export default TablePage;
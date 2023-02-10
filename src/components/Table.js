function Table({ data, config }) {

    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((fruit) => {
        return (
            <tr className="border-b" key={fruit.name}>
                {
                    config.map(option => {
                        if (option.label === 'Color') {
                            return (
                                <td className="p-3">
                                    {option.render(fruit)}
                                </td>);
                        } else {
                            return <td className="p-3">{option.render(fruit)}</td>;
                        }
                    })
                }
            </tr>
        );
    });

    return (
        <table>
            <thead className="table-auto border-spacing-2">
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;
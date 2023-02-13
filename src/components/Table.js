function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {config.map((column) => {
          return (
            <td className="p-3" key={column.label}>
              {column.render(rowData)}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table>
      <thead className="table-auto border-spacing-2">
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;

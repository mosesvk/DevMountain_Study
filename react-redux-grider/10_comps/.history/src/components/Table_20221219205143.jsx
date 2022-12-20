import React from 'react';

const Table = ({ data, config }) => {
    const renderedHeaders = config.map((column) => {
        return (
            <th className='p-3' key={column.label}>{column.label}</th>
        )
    })

  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((col) => {
        return (
            <td>{col.render(fruit)}</td>
        )
    })
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;

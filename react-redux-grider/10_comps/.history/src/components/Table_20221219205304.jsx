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
            <td key={col.label}>{col.render(fruit)}</td>
        )
    })

    return (
        <tr className='border-b' key={fruit.name}>
            {renderedCells}
        </tr>
    )
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

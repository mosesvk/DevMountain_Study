import React from 'react';

const Table = ({ data, config }) => {
    const renderedHeaders = config.map((column) => {
        return (
            <th key={column.label}>{column.label}</th>
        )
    })

  const renderedRows = data.map((fruit) => {
    return (
      <tr className='border-b' key={fruit.name}>
        <td className='p-3'>{fruit.name}</td>
        <td>
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>
        <td className='p-3'>{fruit.score}</td>
      </tr>
    );
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

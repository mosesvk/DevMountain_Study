import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const sortHandler = (label) => {
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => sortHandler(column.label)}>
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });

  // Only sort data if sortOrder && sortBy are NOT null
  // make copy of 'data' PROP
  // find correct sortValue function and use it for sorting

  let sortedData = data;
  if (sortOrder && sortBy) {
    const {sortValue} = config.find(column => column.label === sortBy)
    sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a)
        const valueB = sortValue(b)

        const reverseOrder = sortOrder === 'asc' ? 1 : -1

        if (typeof valueA === 'string') {
            return valueA.localeCompare(valueB) * reverseOrder;
        } else {
            return (valueA - valueB)
        }
    })
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
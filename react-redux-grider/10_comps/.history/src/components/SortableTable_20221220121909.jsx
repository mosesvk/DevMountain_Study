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
            {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    // search for the config item that matches which we clicked 
    const {sortValue} = config.find(column => column.label === sortBy)
    
    // order the data DEPENDING on if sortOrder = 'asc', 'desc', or not
    sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a)
        const valueB = sortValue(b)

        const reverseOrder = sortOrder === 'asc' ? 1 : -1

        if (typeof valueA === 'string') {
            return valueA.localeCompare(valueB) * reverseOrder;
        } else {
            return (valueA - valueB) * reverseOrder 
        }
    })
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) return 'Show both icons'

    if (sortOrder === null) {
        return 'show both icons'
    } else if (sortOrder === 'asc') {
        return 'show up icon'
    } else if (sortOrder === 'desc') {
        return 'show down icon'
    }

}

export default SortableTable;
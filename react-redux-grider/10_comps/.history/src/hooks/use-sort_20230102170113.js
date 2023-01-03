import { useState } from 'react';

function useSort() {
    const sortHandler = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }
    
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
}

export default useSort
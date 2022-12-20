import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Table from '../components/Table'

const TablePage = () => {

    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 5 },
        { name: 'Banana', color: 'bg-yellow-500', score: 5 },
        { name: 'Lime', color: 'bg-green-500', score: 5 },
    ]
    
    const config = [
        { label: 'Name of Color', render: (fruit) => fruit.name },
        { label: 'Color' },
        { label: 'Score' },
    ]

  return (
    <div><Table data={data} config={config} /></div>
  )
}

export default TablePage
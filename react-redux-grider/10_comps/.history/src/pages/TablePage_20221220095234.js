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
        { label: 'Color', render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>  },
        { label: 'Score', render: (fruit) => fruit.score, header: () => <th className='bg-red-500'>Score</th>  },
    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

  return (
    <div><Table data={data} config={config} keyFn={keyFn}/></div>
  )
}

export default TablePage
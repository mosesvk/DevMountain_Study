
import Table from '../components/Table';

const SortableTable = (props) => {
    const {config} = props

    const sortHandler = () => {
        
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }

        return {
            ...column, 
            header: () => <th onClick={sortHandler}>{column.label} IS SORTABLE</th>
        }
    })

  return (
    <Table {...props} config={updatedConfig} />
  )
}

export default SortableTable
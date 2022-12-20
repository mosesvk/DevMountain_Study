
import Table from '../components/Table';

const SortableTable = (props) => {
    const {config} = props

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }
    })

  return (
    <Table {...props} />
  )
}

export default SortableTable
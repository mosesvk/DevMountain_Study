import {useState} from 'react'

const SearchBar = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState(null)

  const handleSubmit= (e) => {
    e.preventDefault()

    onSubmit(searchTerm)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type='text' name='search' onChange={handleChange} />
      </label>
      <input type='submit'/>
    </form>
  )
}

export default SearchBar
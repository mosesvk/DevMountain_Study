import {useState} from 'react'

const SearchBar = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState(null)

  const handleSubmit= () => {
    onSubmit(searchTerm)
  }

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e)
    setSearchTerm(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type='text' name='search' onChange={(e) => handleChange(e.target.value)} />
      </label>
      <input type='submit'/>
    </form>
  )
}

export default SearchBar
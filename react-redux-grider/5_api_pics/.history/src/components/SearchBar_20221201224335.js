import {useState} from 'react'

const SearchBar = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState(null)

  const handleClick = () => {
    onSubmit(searchTerm)
  }

  const handleChange = (text) => {
    setSearchTerm(text)
  }

  return (
    <form onSubmit={handleClick}>
      <label>
        <input type='text' name='search' onChange={(e) => handleChange(e.target.value)} />
      </label>
      <input type='submit'/>
    </form>
  )
}

export default SearchBar
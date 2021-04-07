import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'

const Header = props => {
  return (
    <header style={styles.main}>
      <h1>MULTI ROUTE MOVIE LIST</h1>
      <nav style={styles.nav}>
        <Link to="/">Movie Form</Link>
        <Link to="/confirm">Movie Confirm</Link>
        <Link to="/list">Movie List</Link>
      </nav>
    </header>
  )
}
export default Header

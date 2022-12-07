import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BooksContext from './context/books'

const element = document.getElementById('root')
const root = ReactDOM.createRoot(element)

root.render(<BooksContext.Provider value={5}><App /></BooksContext.Provider>)
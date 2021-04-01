import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import BookList from './Components/BookList.js'
import Shelf from './Components/Shelf';
import data from './data.js'
import SearchBar from './Components/SearchBar';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      books: data, 
      shelf: []
    }
  }
  
  addToShelf = (title) => {
    this.setState({shelf: [...this.state.shelf, title]})
  }

  clearShelf = () => {
    this.setState({shelf: []})
  }

  filterBooks = (input) => {
    let filteredBooks = this.state.books.filter((e) => {
      if(e.title.toLowerCase().includes(input) || e.author.toLowerCase().includes(input)){
        return e
      }
    })

    this.setState({books: filteredBooks})
  }

  reset = () => {
    this.setState({books: data})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <div class="container-1">
          <BookList 
            books={this.state.books} 
            addToShelf={this.addToShelf} />
          <hr width="1" size="1000"/>
          <Shelf 
            shelf={this.state.shelf} 
            clearShelf={this.clearShelf}/>
        </div>
      </div>
    );
  }

}



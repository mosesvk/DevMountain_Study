import React, { Component } from 'react'; 

export default function Shelf(props){

  const {shelf, clearShelf} = props 

  return(
    <div className="shelf">
      <h2>Your Shelf</h2>
      <button className="btn-clear" onClick={() => clearShelf()}>Clear Shelf</button>
      {shelf.map((e, i, arr) => {
        return (
          <p>{e}</p>
        )
      })}
    </div>
  )
}
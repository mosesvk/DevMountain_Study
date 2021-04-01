import React, { Component } from "react";
import data from "../data";

export default function BookList(props) {
  const { books, addToShelf } = props;

  return (
    <div className="container-BookList">
      {books.map((e, i, arr) => {
        return (
          <div className="container-individual">
            <img src={e.img} onClick={() => addToShelf(e.title)} />
            <p>{e.title}</p>
            <p>by: {e.author}</p>
          </div>
        );
      })}
    </div>
  );
}

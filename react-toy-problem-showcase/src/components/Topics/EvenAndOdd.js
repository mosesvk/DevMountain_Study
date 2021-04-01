import React, { Component } from 'react'; 

export default class EvenAndOdd extends Component {
  constructor(){
  super();
  // this.evenArray = []; 
    // this.oddArray = []; 
    // this.userInput = '';
    // Remember we CANNOT do it the above way in react. README.md 535.
    this.state = {
      evenArray: [], 
      oddArray: [], 
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    let arr = userInput.split(',');
    let evens = []; 
    let odds = [];

    for ( let i = 0; i < arr.length; i++ ){
      if ( arr[i] % 2 === 0 ){
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    
    this.setState({ evenArray: evens, oddArray: odds });
  }
  
  render (){
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Even and Odds </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
        {/* What is JSON.stringify? Google and README.md 565.. It makes sure that we are reading the numbers by an array */}
      </div>
    )
  }

}


import { Component } from 'react'; 

export default class SearchBar extends Component {
  constructor(){
    super(); 

    this.state = {
      userInput: "", 
    }
  }

  handleChange = (val) => {
    this.setState({userInput: val})
  }

  handleClick = () => {
    this.props.filterBooks(this.state.userInput)
  }

  handleClear = () => {
    this.setState({userInput: ""})
    this.props.reset()
  }

  render(){
    return(
      <div clasName="container-search">
        <input type="text" placeholder="search book..."  onChange={(e) => this.handleChange(e.target.value)} value={this.state.userInput}/>
        <button class="btn-search" onClick={() => this.handleClick()}>Search</button>
        <button onClick={() => {
          this.handleClear()
        }}>Clear</button>
      </div>
      
    )
  }
}
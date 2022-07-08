import React, { Component } from 'react';

class App extends Component {
    state = {
        message: ''
    }
    updateMessage = (newText) => {
        console.log(newText);
        this.setState(() => ({
            message: newText
        }));
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <input type="text"
                        placeholder="Your message here.."
                        value={this.state.message}
                        onChange={(event) => this.updateMessage(event.target.value)}
                    />
                    <p>the message is: {this.state.message}</p>
                </div>
            </div>
        );
    }
}

export default App;
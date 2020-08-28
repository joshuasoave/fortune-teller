import React from 'react';
import axios from 'axios';
import Header from './components/Header.js';

class App extends React.Component {
  state = {

  }

  //Call 3rd party API for cards
  handleDealtCards = () => {
    axios.get(
      "https://tarot.howlcode.com/api/v1/spreads/three_cards"
    ).then((response) => {
      console.log(response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <button onClick={this.handleDealtCards}>Click</button>
        </main>
      </div>
    )
  }
}



export default App;

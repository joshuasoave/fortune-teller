import React from 'react';
import axios from 'axios';
import Header from './components/Header.js';

class App extends React.Component {
  state = {
    dealtCards: []
  }

  //Call 3rd party API for cards
  handleDealtCards = () => {
    axios.get(
      "https://tarot.howlcode.com/api/v1/spreads/three_cards"
    ).then((response) => {
      console.log(response.data);
      this.setState(
        {
          dealtCards: response.data
        }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <button onClick={this.handleDealtCards}>Click</button>
          <div>
            {
              this.state.dealtCards.map(
                (card, index) => {
                  return<div key={index}>
                    <h2>{card.name}</h2>
                    <img src={card.image}/>
                    <p>{card.summary}</p>
                  </div>
                }
              )
            }
          </div>
        </main>
      </div>
    )
  }
}



export default App;

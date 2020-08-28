import React from 'react';
import axios from 'axios';
import './main.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardBack from './components/CardBack.js';


class App extends React.Component {
  state = {
  }



  //Call 3rd party API for cards
  handleDealtCards = () => {
    axios.get(
      "https://tarot.howlcode.com/api/v1/spreads/random_card"
    ).then((response) => {
      // console.log(response.data);
      let tarotCard = response.data[0];
      //change the name of tarot card to remove -
      let fixedTarotName = tarotCard.name.replace(/-/g, " ")
      console.log(fixedTarotName);
      this.setState(
        {
          dealtCard: tarotCard,
          dealtCardName: fixedTarotName
        }
      )
    })
  }

  render() {

    return (
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <div className="card-area">
            {
              this.state.dealtCard ?
              <div className="card-container">
                <img src={this.state.dealtCard.image} alt={this.state.dealtCardName} className="dealt-card-img"/>
                <div className="card-description">
                  <h3>{this.state.dealtCardName}</h3>
                  <p>{this.state.dealtCard.summary}</p>
                </div>
              </div>
            :
              <CardBack onDeal={this.handleDealtCards}/>
            }
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}



export default App;

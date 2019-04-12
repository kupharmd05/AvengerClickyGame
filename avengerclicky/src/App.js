import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper"
import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import cards from "./cards.json"

import './App.css';

class App extends Component {

state = {
  cards,
  score: 0,
  topScore:0
}

gameOver = () => {
  if(this.state.score > this.state.topScore) {
    this.setState({topScore: this.state.score}, function(){
      console.log(this.state.topScore)
    })
  }
  this.state.cards.forEach(card => {
    card.count = 0;
  })
  alert(`Game Over = Your score was ${this.state.score}`)
  this.setState({score: 0});
  return true;
}

clickCount = (id) => {
  this.state.cards.find((card,i) => {
    if (card.id === id) {
      if(cards[i].count ===0){
        cards[i].count = cards[i].count + 1;
        this.setState({score: this.state.score +1}, function(){
          console.log(this.state.score)
        });
        this.state.cards.sort(()=> Math.random()-0.75)
        return true;
      } else {
        this.gameOver();
      }
    }
  })

  
}


  render() {
    return (
     <Wrapper>
       <Header score={this.state.score} topScore={this.state.topScore}>Only one click per Image</Header>
       {this.state.cards.map(card => (
         <Card clickCount={this.clickCount} id={card.id} key={card.id} image={card.image}/>
       ))}
     </Wrapper>  
    );
  }
}

export default App;

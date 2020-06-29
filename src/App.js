import React, { Component } from 'react';
import superMario from "./cards.json";
import Card from "./components/Card";
import Scoreboard from './components/Scoreboard';
import "./App.css"
//Making use of 'Fisher-Yates-shuffle' algorithm to shuffle a new array order from the current array and returns that New array order.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//Using Method class / extends for more features with react
class App extends Component{
  //setting the 'state'
  state = {
    superMario,
    score: 0,
    highScore: 0,
    showLose: 0,
    showWin: 0,
    clickedCharacter: []
  };

  //onClick function for Cards
  clickedImage = id => {
    //grabbing varibles in the state
    let clickedCharacter = this.state.clickedCharacter;
    let score = this.state.score;
    let highScore = this.state.highScore;

    this.setState({
      showLose:0,
      showWin:0
    });

    //if clickedCharacter doesnt have the id of the image that is clicked then..
    if(clickedCharacter.indexOf(id)===-1){
      //call handleIncrement to up the score by 1
      this.handleIncrement();
      // push the id to clickedCharacter array
      clickedCharacter.push(id)
      //call activateShuffle to shuffle the image's placements and set the new placements for the cards
      this.activateShuffle();
      console.log(`ID's Clicked so far: ${clickedCharacter}`);//TEST
      console.log(`Score: ${score}`)//Test
      
      
    }
    //If score is equal to the value of '15'
    else if (this.state.score === 15){
      //then give showWin the value of '1' and reset the game
      this.setState({
        showWin: 1,
        score: 0,
        clickedCharacter: []
      });
    }
    //else the image is already clicked and then reset the game and showLose valule set to '1'
    else{
      this.setState({
        score:0,
        clickedCharacter: []
      });
      this.setState({
        showLose: 1
      })
    }
    //if score is higher than the current highscore
    if(score > highScore){
      //set the value of score as the new hishScore
      this.setState({
        highScore: score
      });
      console.log(`highScore: ${highScore}`)//TEST
    }
  }

  //Function to increase the state score
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  }
  //Function to set the new array order in state
  activateShuffle = () => {
    this.setState({superMario: shuffle(superMario)});
  }
  
  //SubClass render() return
  render() {
    return(

      <div className="container">
        {/* Hidden until showWin or ShowLose has a value in the state of a number '1' */}
        <div className="alert alert-danger" style={{opacity: this.state.showLose}}>
          Sorry, You clicked that already! Try Again!
        </div>
        <div className ="alert alert-success" style={{opacity: this.state.showWin}}>
          Congrats! You Got Them All!
        </div>
        {/* ScoreBoard Render with values*/}
        <Scoreboard
        title="Super Mario Clicky Game"
        score={this.state.score}
        highScore={this.state.highScore}
        />
        {/* Card Render with values*/}
        <div className="card-deck">
          {this.state.superMario.map(superMario => (
          <Card
          
          key={superMario.id}
          id={superMario.id}
          name={superMario.name}
          image={superMario.image}
          clickedImage={this.clickedImage}
          ></Card> 
          ))}
        </div>
      </div>
    )
  }
}

export default App;

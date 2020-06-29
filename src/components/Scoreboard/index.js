import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
    return (
      <header className="scoreBoard">
          <div className="col-md-12 col title"><h1>{props.title}</h1></div> 
        <div className="row rowWrap">
            
            <div className="col-md-6 high-score"><h4>High Score {props.highScore}</h4></div>
            <div className="col-md-6 current-score"><h4>Current Score: {props.score}</h4></div>
            </div>
        <div className="row">
        <div className="col-md-12 col intro" >
        <h6>Click on a Super Mario Character to start! Try to click everyone once and only once!</h6></div>
        </div>
      </header>
    );
  }
  
  export default Scoreboard;
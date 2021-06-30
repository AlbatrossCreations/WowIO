
import '../css/Game.css';
import { Context, SnakeGame } from "react-game-snake";
import {React,useState} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';




function GameComponent(props) {

  const [score, setScore] = useState(0);

  function simulateKey (keyCode, type, modifiers) {
    var evtName = (typeof(type) === "string") ? "key" + type : "keydown";	
    var modifier = (typeof(modifiers) === "object") ? modifier : {};
  
    var event = document.createEvent("HTMLEvents");
    event.initEvent(evtName, true, false);
    event.keyCode = keyCode;
  
  
    document.dispatchEvent(event);
  }
  function goUp(){
    
    simulateKey(38)

  }
  function goDown(){
    simulateKey(40)
    console.log("DOWN")

  }
  function goLeft(){
    simulateKey(37)
    console.log("LEFT")

  }
  function goRight(){
    simulateKey(39)
    console.log("RIGHT")

  }

  const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
      }
    };
  return (
    <div className="container motherContainer">
      <div>
      <SnakeGame
        colors={{
            field: "#bdc3c7",
            food: "#9b59b6",
            snake: "#3498db",
        }}
        countOfHorizontalFields={20}
        countOfVerticalFields={20}
        fieldSize={20}
        loopTime={200}
        pauseAllowed={true}
        restartAllowed={true}
        
        // onLoose={(context: Context) => alert(`You loosed with ${context.game.points} points.`)}
        // onPause={(context: Context) => alert("paused")}
        // onRestart={(context: Context) => alert("restarted")}
        // onResume={(context: Context) => alert("onResume")}
        // onWin={(context: Context) => alert(`You won with ${context.game.points} points.`)}
        onLoopFinish={(context: Context) => {
           if(context.game.points>0){
             console.log("You won ")
             props.onWin()
           }
         }}
    ></SnakeGame>
      </div>
     
      
      <div className="card">
      
      <div className="container ">
      <button onClick={goUp} id="upBtn" val="^">Up</button > 
      <div>
      <button onClick={goLeft} id="leftBtn" val="<=">Left</button >  
      <button onClick={goRight} id="rightBtn" val="=>">Right</button >   
      </div>  
      <button onClick={goDown} id="downBtn" val="!">Down</button > 
      </div>
      </div> 
    
    </div>
  
  
  );
}

export default GameComponent;


import '../css/Game.css';
import { Context, SnakeGame } from "react-game-snake";
import {React,useState} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Prompt } from 'react-router';
import { Component } from 'react';

import upImg from '../images/upBtn.png'
import downImg from '../images/downBtn.png'
import leftImg from '../images/leftBtn.png'
import rightImg from '../images/rightbtn.png'

class GameComponent extends Component{

  constructor(props){
    super(props)
    this.state={
      score:0,
      width: window.innerWidth,
    }
    this.handleWindowSizeChange=this.handleWindowSizeChange.bind()
  }
  



  componentDidMount(){
    document.body.style.backgroundColor = "#000000"

  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  
   Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
     renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return this.Completionist;
      } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
      }
    };

  

  render(){

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
      console.log("DOWN")
  
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
  





    const { width } = this.state;
    const isMobile = width <= 500;
    if(isMobile){
      return(
        <div>
          <div className="container">
          
          <div className="row">
            <span id="note1">Feed the snake twice to win.<br/>All the best ;)</span>
             <div className="column">
             <SnakeGame id="cardImg"
             colors={{
                 field: "#FFFFFF",
                 food: "#539400",
                 snake: "#FF5C00",
             }}
             countOfHorizontalFields={15}
             countOfVerticalFields={15}
             fieldSize={20}
             loopTime={200}
             pauseAllowed={false}
             restartAllowed={true}
             
             onLoopFinish={(context: Context) => {
               if(context.game.points>0){
                 console.log("You won ")
                 this.props.onWin()
               }
             }}
         ></SnakeGame>
             </div>

             
           </div>
           
         </div>
         <div id="fixedBtns">
               <div className="container">
               <div className="column">
                   <img onClick={goUp} style={{height:"70px"}} src={upImg}/>
                 </div>
               <div className="row">
                 <div className="column">
                 <img onClick={goLeft} style={{height:"70px",marginRight:"10px"}} src={leftImg}/>
                 <img onClick={goRight} style={{height:"70px",marginLeft:"10px"}} src={rightImg}/>
                 </div>
               </div>
               
                 
                 <div className="column">
                 <img onClick={goDown} style={{height:"70px"}} src={downImg}/>
                 </div>
               
               </div>
             </div>
        </div>
       )
         


    }else{
      return(
        <div>
          <div className="container">
          
          <div className="row">
            <span  id="note1">Feed the snake twice to win. All the best ;)</span>
             <div className="column">
             <SnakeGame id="cardImg"
             colors={{
                 field: "#FFFFFF",
                 food: "#539400",
                 snake: "#FF5C00",
             }}
             countOfHorizontalFields={20}
             countOfVerticalFields={20}
             fieldSize={20}
             loopTime={200}
             pauseAllowed={false}
             restartAllowed={true}
             
             // onLoose={(context: Context) => alert(`You loosed with ${context.game.points} points.`)}
             // onPause={(context: Context) => alert("paused")}
             // onRestart={(context: Context) => alert("restarted")}
             // onResume={(context: Context) => alert("onResume")}
             // onWin={(context: Context) => alert(`You won with ${context.game.points} points.`)}
             onLoopFinish={(context: Context) => {
               if(context.game.points>0){
                 console.log("You won ")
                 this.props.onWin()
               }
             }}
         ></SnakeGame>
             </div>
             <span  id="note1">Note:If you are on desktop you can control the snake with arrow keys.</span>

             
           </div>
           
         </div>
         <div id="fixedBtns">
               <div className="container">
               <div className="column">
                   <img onClick={goUp} style={{height:"70px"}} src={upImg}/>
                 </div>
               <div className="row">
                 <div className="column">
                 <img onClick={goLeft} style={{height:"70px"}} src={leftImg}/>
                 <img onClick={goRight} style={{height:"70px"}} src={rightImg}/>
                 </div>
               </div>
               
                 
                 <div className="column">
                 <img onClick={goDown} style={{height:"70px"}} src={downImg}/>
                 </div>
               
               </div>
             </div>
        </div>
       )
        
    }
  }
}

export default GameComponent;

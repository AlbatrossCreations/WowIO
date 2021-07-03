
import '../App.css';
import React, { Component,useState } from 'react';

import ScratchCard from 'react-scratchcard'
import img from '../images/scratch-card.png'
import '../css/ScratchCard.css'
import Typing from 'react-typing-animation';


class  ScratchCardComponent extends Component{
  constructor(props) {
    super(props);
    this.state={
      showCard:false
    }

  }
  settings = {
    width: 962,  
    height: 495,
    image: img,
    finishPercent: 20,
    onComplete: () => {
      console.log('The card is now clear!')
      this.setState({showCard:true})
    }
  };

 

  render(){

    const divTag= 
    <div className="container">
      <div className="card card1">
      <Typing loop={true}>
                <span id="textId">{this.props.message+"        "}</span>
          <Typing.Reset/>
      </Typing>
    
      </div>
    </div>

      
     if(this.state.showCard){
     return(divTag)}
     else{return(
      <ScratchCard style={{marginTop:"20px"}} {...this.settings}>
      
      </ScratchCard>)}
    
  }
}

export default ScratchCardComponent;

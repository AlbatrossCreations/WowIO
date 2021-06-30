
import '../App.css';
import React, { Component,useState } from 'react';

import ScratchCard from 'react-scratchcard'
import img from '../images/profile-pic.jpeg'


class  ScratchCardComponent extends Component{
  constructor(props) {
    super(props);

  }
  settings = {
    width: 300,
    height: 300,
    image: img,
    finishPercent: 50,
    onComplete: () => {
      console.log('The card is now clear!')
      
    }
  };

 

  render(){
    return(
      <ScratchCard {...this.settings}>
      {this.props.message}
      </ScratchCard>
    )
  }
}

export default ScratchCardComponent;

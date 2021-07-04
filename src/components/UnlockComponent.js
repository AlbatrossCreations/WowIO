import React, { Component } from 'react'
import unlockImg from "../images/unlock.png"
import { Button } from 'react-bootstrap';
import "../css/Unlock.css"
class UnlockComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
         
            <div class="row " >
            <div class="col-4">
                <img  id="cardImg"src={unlockImg}/>
                <div class="text">
                <h5 >Locked</h5>
                    <p >The message is locked, either unlock and read or go away</p>
                    <a onClick={this.props.start} class="btn btnCreate btn-primary">Unlock</a>
                </div>
            </div>
                    
            </div>
                  

        )
    }
}
export default UnlockComponent;
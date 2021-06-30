import React, { Component } from 'react'
import unlockImg from "../images/unlock.jpg"
import { Button } from 'react-bootstrap';
import "../css/Home.css"
class UnlockComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
             <div >
             {/**UNLCOK ME LAYOUT */}
                  
             <div className="card">
                <img src={unlockImg} style={{width:"100px"}} id="cardImg" alt="Avatar" />
                <div className="container">
                <h4><b>It's locked</b></h4>
                <p>Either unlock on go away</p>
                <Button variant="secondary" onClick={this.props.start}>Unlock</Button>
                </div>
            </div> 
             </div>
        )
    }
}
export default UnlockComponent;
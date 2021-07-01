import {React} from 'react'
import { withRouter } from 'react-router-dom';
import "../create.css"
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import firebase from '../utils/firebase';
import Countdown from 'react-countdown';

function Create(props){
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("Url will appear here");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    function submitInfo(e) {
        e.preventDefault()
        console.log("Document",document)
        var msg = document.getElementById("msgId").value.trim()
        var name = document.getElementById("fromId").value.trim()
        var email = document.getElementById("emailId").value.trim()
        // var que = document.getElementById("queId").value.trim()
        // var ans = document.getElementById("ansId").value.trim()
        
        {/* SUBMIT TO FIREBASE */}
        const msgsRef = firebase.database().ref('Messages/')
        const newMsg = {
          msg:msg,
          created:(Date.now()+(30*60*1000)),
          from:name,
          mail:email,
          seen: false,
        //   que:que,
        //   ans:ans
        };
        var newKey = msgsRef.push().key;
        const msgsRef2 = firebase.database().ref('Messages/'+newKey)
        const intRef = firebase.database().ref('Interested')
        msgsRef2.set(newMsg)
        setUrl(newKey)
        console.log("NEW KEY",newKey)

        intRef.push({"mail":email})
        
    }
    const Completionist1 = () =>{
        // if(Date.now()>props.time){
        //     firebase.database().ref("Messages/"+props.id).remove()
        //     alert("Sorry boss the message is no longer valid")
        // }else{
        //     return
        // }
       // firebase.database().ref("Messages/"+props.id).remove()
       // alert("Sorry boss the message is no longer valid")
       console.log("Sorry boss the message is no longer valid")
       return null
      
    }
    
    const Completionist2 = () =>{
        if(Date.now()>props.time){
           // firebase.database().ref("Messages/"+props.id).remove()
          //  alert("Sorry boss time up")
          console.log("Sorry boss time up")
        }else{
            
        }
    }
    

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist1 />;
      } else {
        // Render a countdown
        return <h2>The message will turn invalid in {hours}:{minutes}:{seconds}</h2>;
      }
    };
    const renderer2 = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist2 />;
        } else {
          // Render a countdown
          return <h2>Game ends in {hours}:{minutes}:{seconds}</h2>;
        }
      };
      const renderer3 = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          props.makeInvalid()
          return null;
        } else {
          // Render a countdown
          return <h2>Message vanishes in {hours}:{minutes}:{seconds}</h2>;
        }
      };
    return(
        
       
            <div>
                  {console.log("GAME STARTED",props.gameStarted)}
                {
                    props.time?(props.gameStarted?
                        <Countdown
                        date={Date.now()+90*1000}
                        renderer={renderer2}
                        />
                        :
                        <Countdown
                        date={Number(props.time)}
                        renderer={renderer}
                        
                        />):(props.showFinalTimer?(<Countdown
                          date={Date.now()+10*1000}
                  
                          renderer={renderer3}
                          />):null)
    
                }
                

          
      
            
        
        </div>
    )
}
export default withRouter(Create)
import {React} from 'react'
import { withRouter } from 'react-router-dom';
import "../create.css"
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import firebase from '../utils/firebase';
import Countdown from 'react-countdown';
import Typing from 'react-typing-animation';

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
            return null;
        }
    }
    function timerLayout(hour,min,sec){ 
    return(
      
       
      <div id="clockdiv">
    
        <div>
          <span className="hours">{hour<10?"0"+hour:hour}</span>
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes">{min<10?"0"+min:min}</span>
          <div className="smalltext">Mins</div>
        </div>
        <div>
          <span className="seconds">{sec<10?"0"+sec:sec}</span>
          <div className="smalltext">Secs</div>
        </div>
      </div>
      

    )
    }
    

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        props.delete()
        return <Completionist1 />;
      } else {
        // Render a countdown
        return timerLayout(hours,minutes,seconds);
      }
    };
    const renderer2 = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          props.delete()
          return <Completionist2 />;
        } else {
          // Render a countdown
          return timerLayout(hours,minutes,seconds);
        }
      };
      const renderer3 = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          props.makeInvalid()
          props.delete()
          return null;
        } else {
          // Render a countdown
          return timerLayout(hours,minutes,seconds);
        }
      };
    return(
        
       
            <div>
               
              
                  {console.log("GAME STARTED",props.gameStarted)}
                {
                    props.isDeleted?(null):(props.time?(props.gameStarted?
                      <div>
                        <Countdown
                      date={Date.now()+900*1000}
                      renderer={renderer2}
                      />
                        <Typing loop={true} speed={50}>
                      <h5 id="createTxt">When countdown hits 00:00:00 the message will be deleted </h5>
                      <Typing.Reset/>
                      </Typing>
                      
                      </div>
                      
                      :
                      <div>
                       <Countdown
                      date={Number(props.time)}
                      renderer={renderer}
                      
                      />
                        <Typing loop={true} speed={50}>
                        <h5 id="createTxt">When countdown hits 00:00:00 the message will be deleted </h5>

                      <Typing.Reset/>
                      </Typing>
                      
                      </div>
                      ):(props.showFinalTimer?(
                        <div>
                           <Countdown
                        date={Date.now()+60*1000}
                
                        renderer={renderer3}
                        />
                          <Typing loop={true} speed={50}>
                          <h5 id="createTxt">When countdown hits 00:00:00 the message will be deleted </h5>

                      <Typing.Reset/>
                      </Typing>
                       
                        </div>
                        ):null))
    
                }
                

          
      
            
        
        </div>
    )
}
export default withRouter(Create)
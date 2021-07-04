import React, { useEffect } from 'react'

import firebase from '../utils/firebase';
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import '../css/Create2.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faGrinHearts, faGrinStars, faHeart,faShare } from '@fortawesome/free-solid-svg-icons'
import { shareTextToWhatsApp } from 'share-text-to-whatsapp';

function Create2(){
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("Url will appear here");
    const [deltime, setDelTime] = useState("00:00:00");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => { 
  
        document.body.style.backgroundColor = "#000000"
      });

  
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
      const end = Date.now()+(30*60*1000)
      var dateFormat = require("dateformat");
      var s = dateFormat(end, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    setDelTime(s)
      const newMsg = {
        MSG:msg,
        C:end,//TODO: LATER UPDATE TO 2=>30
        F:name,
        M:email,
        S: false,
      //   que:que,
      //   ans:ans
      };
      var newKey = msgsRef.push().key;
      const msgsRef2 = firebase.database().ref('Messages/'+newKey)
      const intRef = firebase.database().ref('Interested')
      msgsRef2.set(newMsg)
      setUrl(newKey)
      handleShow()
      console.log("NEW KEY",newKey)
  
      intRef.push({"mail":email})
      
  }
  function copyUrl() {
    /* Get the text field */
    var copyText = document.getElementById("urlId");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    console.log("Copied the text: " + copyText.value);
  } 
  function shareViaWhatsapp(){
    const msg = "I have sent you a secret message. Go rush to unveil it as it will be deleted by "+ deltime
    shareTextToWhatsApp(msg)
  }
  
     
    return(
    
        <div>
             <h2 id="createPgTxtId">This seems to be a start of something big <FontAwesomeIcon style={{color:"orange"}} size='1x' icon={faGrinHearts} /></h2>
             <div>

             <div className="container">
                
                <div className="card col-xs-10">

                <form onSubmit={submitInfo}>
                <label style={{color:"red"}} for="exapmleMsg"><b>Create Message Box</b></label>
                
                <div className="form-group">
                    <label style={{float:"left"}} for="exapmleMsg">Message</label>
                    <textarea id="msgId" type="text" className="form-control" placeholder="Secret message" required/>
                </div>
                <div class="form-group">
                    <label style={{float:"left"}} for="exapmleMsg">From</label>
                    <input id="fromId" type="text" className="form-control" placeholder="Name" required/>
                </div>
                {/* <div class="form-group">
                    <label for="exapmleMsg">Question to unlock</label>
                    <input id="queId" type="text" className="form-control" placeholder="Question" required/>
                </div>
                <div class="form-group">
                    <label for="exapmleMsg">Answer</label>
                    <input id="ansId" type="text" className="form-control" placeholder="Answer" required/>
                </div> */}
                <div class="form-group">
                    <label style={{float:"left"}} for="exampleInputEmail1">Email address</label>
                    <input id="emailId" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted"><b>Note: </b>We'll never share your email with anyone else.</small>
                </div>
                
                <button id="submitBtn"  type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>

               
                </div>




              <Modal  backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header >
                <Modal.Title>Made one for you, with Love <FontAwesomeIcon style={{color:"red"}} size='1x' icon={faHeart} /> </Modal.Title>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Header>
                <Modal.Body>
                <small id="emailHelp" className="form-text text-muted">{"Share this link as fast as you can as the message will be deleted by "}<strong>{deltime}</strong></small>
                <br/>
                <input type="text" value={"https://albatrosscreations.github.io/Wowio/#/home/"+url} id="urlId"/>
                <Button style={{marginLeft:"20px"}} variant="primary" onClick={copyUrl}> <FontAwesomeIcon style={{color:"white"}} size='1x' icon={faCopy} /></Button>
                <Button style={{marginLeft:"20px"}} variant="primary" onClick={shareViaWhatsapp}> <FontAwesomeIcon style={{color:"white"}} size='1x' icon={faShare} /></Button>
  

                </Modal.Body>
                <Modal.Footer>
                <span id="emailHelp" className="form-text text-muted">Thanks for using <FontAwesomeIcon style={{color:"orange"}} size='2x' icon={faGrinStars} /></span>

               

                
                </Modal.Footer>
            </Modal>
    </div>
        </div>
    )

}
export default Create2
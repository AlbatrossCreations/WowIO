
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 



import Home from './pages/Home';
import Create from './pages/Home';
import Nav from '../src/components/NavComponent'
import firebase from '../src/utils/firebase';
import First from './components/First';
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';


 
function App(props){
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
  

   
  return (
    <Router>
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">Wowio</a>
      
    <Button variant="primary" onClick={handleShow} class="btn btn-outline-success my-2 my-sm-0">Create</Button>
    </nav>
    <div>
              <Modal  backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header >
                <Modal.Title>Create one</Modal.Title>x
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                
                <div className="card col-xs-8">

                <form onSubmit={submitInfo}>
                
                <div className="form-group">
                    <label for="exapmleMsg">Message</label>
                    <textarea id="msgId" type="text" className="form-control" placeholder="Secret message" required/>
                </div>
                <div class="form-group">
                    <label for="exapmleMsg">From</label>
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
                    <label for="exampleInputEmail1">Email address</label>
                    <input id="emailId" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <button id="subBtn"  type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>

                <h6>https://albatrosscreations.github.io/Wowio/home/{url}</h6>
                </div>


                </Modal.Body>
                <Modal.Footer>
                <small id="emailHelp" className="form-text text-muted">Thanks for using :).</small>

                
                </Modal.Footer>
            </Modal>
    </div>
    
    <Switch>
    <Route path="/home/:id" exact component={Home}/>
    <Route path="/"  component={() => (<First/>)}/>
    
    
    {/* <Route path="/create"  component={() => (<Create/>)}/> */}
    </Switch>
    </Router>


  )
  
}
  

export default App;

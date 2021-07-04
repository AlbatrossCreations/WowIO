
import './App.css';
import React, { Component, useEffect } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom' 



import Home from './pages/Home';
import Create from './pages/Home';
import Nav from '../src/components/NavComponent'
import firebase from '../src/utils/firebase';
import First from './pages/First';
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import logoImg from '../src/images/wowio-logo2.png'
import Create2 from './components/Create2Component';
import { NavLink } from 'react-router-dom';


 
function App(props){

  return (
    <Router>
    <nav class="navbar navbar-light bg-light justify-content-between">
    
    <NavLink  to={"/"} exact>
    <img  src={logoImg} id="imgLogo" alt=""/>

    </NavLink>
   

   
   
    <NavLink  to={"/create"} exact>
    <Button id="createBtn" variant="primary" class="btn btn-outline-success my-2 my-sm-0">Create</Button>

    </NavLink>
    </nav>
   
    
    <Switch>
    <Route path="/home/:id" exact component={Home}/>
    <Route path="/" exact component={() => (<First/>)}/>
    <Route path="/create" exact component={() => (<Create2/>)}/>
    
    
    {/* <Route path="/create"  component={() => (<Create/>)}/> */}
    </Switch>
    </Router>


  )
  
}
  

export default App;

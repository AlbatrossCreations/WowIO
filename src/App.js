
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 



import Home from './pages/Home';
import Create from './pages/Home';
import Nav from '../src/components/NavComponent'


 
class App extends Component{
  constructor(props) {
    super(props);
  
  }
  
  render(){
   
  return (
    <Router>
    {/* <Nav/> */}
    <Switch>
    <Route path="/home/:id" exact component={Home}/>
    {/* <Route path="/create"  component={() => (<Create/>)}/> */}
    </Switch>
    </Router>


  )
  }
}
  

export default App;

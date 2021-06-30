import React, { Component } from "react";
import {Link,NavLink} from 'react-router-dom';
import '../Navbar.css'

class Nav extends Component {



  render(){
    return(

       <div>
              
            <nav class="navbar navbar-light bg-light justify-content-between">
            <NavLink className="nav-link" to={"/home"} exact>
              <a class="navbar-brand">Wowio</a>
              </NavLink>
            <NavLink className="nav-link" to="/create" >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Create</button>
            </NavLink> 
            
            </nav>
        
       </div>
    )
  }
}

export default Nav;
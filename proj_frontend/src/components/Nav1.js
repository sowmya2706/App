import React, { Component } from 'react'
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import "./Home_style.css"
import {  Link } from "react-router-dom";
import { Menu } from '@mui/material';
 class Nav1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
  <div>
<nav role="navigation">
<div class="list-group"><img src="https://seekvectorlogo.com/wp-content/uploads/2019/03/reynolds-retail-management-system-vector-logo-small.png"></img>
  <ul>
    
    {/* <li className="list-group-item">Item */}
  <ul className="button">Item
      <Link className='a' to='/item'>
                  Item Creation
                </Link>
        <li><a className='a' href="/item">Item Create</a></li>
        <li><a className='a' href="/itemview">Item View</a></li>
      </ul>
    {/* </li> */}

     {/*    <li className="list-group-item">Supplier
      <ul className="button">
        <li><a href="/supplier"  className='a'>Supplier create</a></li>
        <li><a href="/supplierview" className='a' >Supplier view</a></li>
       
      </ul>*/}
   {/* </li>  */}
   
  </ul> 
  </div>
</nav>
    </div>
    )
  }
}

export default Nav1




{/*   <nav class="navbar">
   
    <div class="logo">MUO</div>


    <ul class="nav-links">

    
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

     
      <div class="menu">

        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>

        <li class="services">
          <a href="/">Services</a>

        
          <ul class="dropdown">
            <li><a href="/">Dropdown 1 </a></li>
            <li><a href="/">Dropdown 2</a></li>
            <li><a href="/">Dropdown 2</a></li>
            <li><a href="/">Dropdown 3</a></li>
            <li><a href="/">Dropdown 4</a></li>
          </ul>

        </li>

        <li><a href="/">Pricing</a></li>
        <li><a href="/">Contact</a></li>
      </div>
    </ul>
  </nav> */}

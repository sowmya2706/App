import React, { Component } from 'react'
import "./Home_style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
//import {Menu} from '@mui/material'
import Button from '@material-ui/core/Button'
import {Menu,MenuItem,MenuButton,SubMenu} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 class NavBar extends Component {

    logout=()=>{
      console.log("button is clicked");    
    }
  render() {
    return (
      <div>
      <div  class="list-group"><img src="https://seekvectorlogo.com/wp-content/uploads/2019/03/reynolds-retail-management-system-vector-logo-small.png"></img>
      <Navbar bg="light"  variant="light">
      
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="list-group-item">
          <NavDropdown title="Item"  className="list-group-item">
            <NavDropdown.Item href="/item" className='a'>Item Creation</NavDropdown.Item>
            <NavDropdown.Item href="/itemview" className='a'>Item View</NavDropdown.Item>
          </NavDropdown>
          
        
          <NavDropdown title="Supplier" id="basic-nav-dropdown" className="button">
              <NavDropdown.Item href="#"className='a'>Supplier Creation</NavDropdown.Item>
              <NavDropdown.Item href="#"className='a'>Supplier View</NavDropdown.Item>
          </NavDropdown>
          
           
          <NavDropdown title="Store" id="basic-nav-dropdown" className="button">
            <NavDropdown.Item href="#" className='a'>Store Creation</NavDropdown.Item>
            <NavDropdown.Item href="#" className='a'>Store View</NavDropdown.Item>
            <NavDropdown.Item href="#"className='a'>Item Location</NavDropdown.Item>
          </NavDropdown>
          
          
          <NavDropdown title="PO" id="basic-nav-dropdown"className="button">
            <NavDropdown.Item href="#" className='a'>PO Creation</NavDropdown.Item>
            <NavDropdown.Item href="#" className='a'>PO Receive</NavDropdown.Item>
            <NavDropdown.Item href="#"className='a'>PO Details</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="Sales" id="basic-nav-dropdown" className="button">
            <NavDropdown.Item href="#" className='a'>Sales Creation</NavDropdown.Item>
            <NavDropdown.Item href="#" className='a'>Sales View</NavDropdown.Item>
          </NavDropdown>
          
          
          <NavDropdown title="Inventory" id="basic-nav-dropdown" className="button">
            <NavDropdown.Item href="#" className='a'>Inventory View Creation</NavDropdown.Item>
          </NavDropdown>
        
        </Nav>
        {/* </Navbar.Collapse> */}
    </Navbar>
    </div>
    </div>
//     <div>
        
//     <div class="list-group"><img src="https://seekvectorlogo.com/wp-content/uploads/2019/03/reynolds-retail-management-system-vector-logo-small.png"></img>
//         <ul>
//               <li className="list-group-item">
                  
//               <Menu menuButton={<MenuButton className="button">Item</MenuButton>} transition>
//                 <MenuItem>
//                 <Link className='a' to='/item'>
//                   Item Creation
//                 </Link>
//                 </MenuItem>
//                 <MenuItem>
//                 <Link className='a' to='/itemview'>
//                   Item View
//                 </Link>
//                 </MenuItem>
//                 </Menu> 
//               </li>
//               <li className="list-group-item">
              
                     
//               <Menu menuButton={<MenuButton className="button">Supplier</MenuButton>} transition>
//                 <MenuItem>
//                 <Link className='a' to='/supplier'>
//                   Supplier Creation
//                 </Link>
//                 </MenuItem>
//                 <MenuItem>
//                 <Link className='a' to='/supplierview'>
//                   Supplier View
//                 </Link>
//                 </MenuItem>
//                 </Menu> 
//               </li>
               

//                <li className="list-group-item">
//                <Menu menuButton={<MenuButton className="button">Store</MenuButton>} transition>
//                 <MenuItem>
//                 <Link className='a' to='/storecreate'>
//                   Store Creation
//                 </Link>
//                 </MenuItem>
//                 <MenuItem>
//                 <Link className='a' to='/storeview'>
//                   Store View
//                 </Link>
//                 </MenuItem>
//                 <MenuItem>
//                 <Link className='a' to='/itemloc'>
//                   Item Location
//                 </Link>
//                 </MenuItem>
//                 </Menu> 
             
//               </li> 
              
              
//               <li className="list-group-item">
              
//               <Menu menuButton={<MenuButton className="button">PO</MenuButton>} transition>
//                 <MenuItem>
//                 <Link className='a' to='/pocreate'>
//                   PO Creation
//                 </Link>
//                 </MenuItem>
//                 <MenuItem>
//                 <Link className='a' to='/poreceive'>
//                   PO Receive
//                 </Link>
//                 </MenuItem>
//                 <MenuItem>
//                 <Link className='a' to='/podetails'>
//                   PO Details
//                 </Link>
//                 </MenuItem>
//                 </Menu> 
//               </li>
//               <li className="list-group-item">
//               <Menu menuButton={<MenuButton className="button">Sales</MenuButton>} transition>
//                 <MenuItem>
//                 <Link className='a' to='/salescreate'>
//                   Sales Creation
//                 </Link>
//                 </MenuItem>
//                 <MenuItem>
//                 <Link className='a' to='/salesview'>
//                   Sales View
//                 </Link>
//                 </MenuItem>
//                 </Menu> 
//               </li>
//               <li className="list-group-item">
//               <Menu menuButton={<MenuButton className="button">Inventory</MenuButton>} transition>
//                 <MenuItem>
//                 <Link className='a' to='/inventory'>
//                   Inventory View
//                 </Link>
//                 </MenuItem>
//                 </Menu>
//                 </li>
//                 <li className="list-group-itemmm">
//                 <Link className='a' to="/">Logout</Link>
//                 </li>
//                 </ul>
// </div>
// </div>



    )
  }
}
  
export default NavBar;

import React, { Component } from 'react'
import "./Home_style.css"
import NavBar from "./Nav.js"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
//import {Menu} from '@mui/material'
import Button from '@material-ui/core/Button'
import {Menu,MenuItem,MenuButton,SubMenu} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


 class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        navigate:false
        
      }
    }
    logout=()=>{
      console.log("button is clicked");

     }
  render() {
   
    return (
      
     
        //  <div class="body_home">
        //   <header>
        //   <div class="list-group"><img src="https://seekvectorlogo.com/wp-content/uploads/2019/03/reynolds-retail-management-system-vector-logo-small.png"></img>
    
       

        // <ul>
        //             <li className="list-group-item">
                        
        //             <Menu menuButton={<MenuButton className="button">Item</MenuButton>} transition>
        //               <MenuItem>
        //               <Link className='a' to='/item'>
        //                 Item Creation
        //               </Link>
        //               </MenuItem>
        //               <MenuItem>
        //               <Link className='a' to='/itemview'>
        //                 Item View
        //               </Link>
        //               </MenuItem>
        //               </Menu> 
        //             </li>
        //             <li className="list-group-item">
                    
                           
        //             <Menu menuButton={<MenuButton className="button">Supplier</MenuButton>} transition>
        //               <MenuItem>
        //               <Link className='a' to='/supplier'>
        //                 Supplier Creation
        //               </Link>
        //               </MenuItem>
        //               <MenuItem>
        //               <Link className='a' to='/supplierview'>
        //                 Supplier View
        //               </Link>
        //               </MenuItem>
        //               </Menu> 
        //             </li>
                     

        //              <li className="list-group-item">
        //              <Menu menuButton={<MenuButton className="button">Store</MenuButton>} transition>
        //               <MenuItem>
        //               <Link className='a' to='/storecreate'>
        //                 Store Creation
        //               </Link>
        //               </MenuItem>
        //               <MenuItem>
        //               <Link className='a' to='/storeview'>
        //                 Store View
        //               </Link>
        //               </MenuItem>
        //               <MenuItem>
        //               <Link className='a' to='/itemloc'>
        //                 Item Location
        //               </Link>
        //               </MenuItem>
        //               </Menu> 
                   
        //             </li> 
                    
                    
        //             <li className="list-group-item">
                    
        //             <Menu menuButton={<MenuButton className="button">PO</MenuButton>} transition>
        //               <MenuItem>
        //               <Link className='a' to='/pocreate'>
        //                 PO Creation
        //               </Link>
        //               </MenuItem>
        //               <MenuItem>
        //               <Link className='a' to='/poreceive'>
        //                 PO Receive
        //               </Link>
        //               </MenuItem>
        //               <MenuItem>
        //               <Link className='a' to='/podetails'>
        //                 PO Details
        //               </Link>
        //               </MenuItem>
        //               </Menu> 
        //             </li>
        //             <li className="list-group-item">
        //             <Menu menuButton={<MenuButton className="button">Sales</MenuButton>} transition>
        //               <MenuItem>
        //               <Link className='a' to='/salescreate'>
        //                 Sales Creation
        //               </Link>
        //               </MenuItem>
        //               <MenuItem>
        //               <Link className='a' to='/salesview'>
        //                 Sales View
        //               </Link>
        //               </MenuItem>
        //               </Menu> 
        //             </li>
        //             <li className="list-group-item">
        //             <Menu menuButton={<MenuButton className="button">Inventory</MenuButton>} transition>
        //               <MenuItem>
        //               <Link className='a' to='/inventory'>
        //                 Inventory View
        //               </Link>
        //               </MenuItem>
        //               </Menu>
        //               </li>
        //               <li className="list-group-itemmm">
        //               <img className='b' src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></img> 
        
        //   <Link className='a' to="/">Logout</Link>
        //   {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        //   <i class="fa-solid fa-user"></i>
        //   <FontAwesomeIcon icon="user" /> */}
        
         
        // </li>
        // {/* <li className="list-group-img">
        
        // </li> */}
                    
        //         </ul>
        //         </div>
       
        <div class="body_home">
             <NavBar/>
            <div className='content'>
              <p>Users will be able to create Items, Suppliers, and Stores, ranging the Items to Store/WH, make purchase orders for the items, sell the Items and track real-time inventory details, sales details and price changes with this tool</p>
            
        
            </div>
           
        </div> 
        
       
        
     
       
    )
  }
}

export default Home
 {/* <div>{this.state.navigate==true?<Navigate to="/home" replace={true} />:"Not Navigate"}</div> */}
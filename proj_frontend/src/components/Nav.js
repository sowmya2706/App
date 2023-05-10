import React, { Component } from 'react'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import "./Home_style.css"
import { UncontrolledDropdown} from "reactstrap";
import {  Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';

// import {Menu} from '@mui/material'

//import {Menu,MenuItem,MenuButton,SubMenu} from '@szhsin/react-menu'
// import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';


 class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
    logout=()=>{
      console.log("button is clicked");    
    }
  render() {
    return (
      

    
    
    <div>
        <div class="list-group"><img src="https://seekvectorlogo.com/wp-content/uploads/2019/03/reynolds-retail-management-system-vector-logo-small.png"></img>
        <Nav sticky="top">
        <UncontrolledDropdown>
              <DropdownToggle caret nav>
                Merchandise 
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href='/deptcreate'>Department Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/deptview'>Department View</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/classcreate'>Class Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/classview'>Class View</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/subcreate'>SubClass Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/subview'>SubClass View</NavLink>
                </DropdownItem>
               
                
                
              </DropdownMenu>
              </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Item
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href='/item'>Item Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/itemview'>Item View</NavLink>
                </DropdownItem>
              
                
              </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
              <DropdownToggle caret nav>
                Supplier
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href='/supplier'>Supplier Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/supplierview'>Supplier View</NavLink>
                </DropdownItem>
                
              </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
              <DropdownToggle caret nav>
                Store
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href='/storecreate'>Store Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/storeview'>Store View</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/itemloc'>Item Location</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
              <DropdownToggle caret nav>
                PO
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href='/pocreate'>PO Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/poreceive'>PO Receive</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/podetails'>PO Details</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
              <DropdownToggle caret nav>
                Sales
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href='/salescreate'>Sales Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/salesview'>Sales View</NavLink>
                </DropdownItem>
               
                
                
              </DropdownMenu>
              </UncontrolledDropdown>

 
              <UncontrolledDropdown>
              <DropdownToggle caret nav>
                Inventory
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href='/inventory'>Inventory View</NavLink>
                </DropdownItem>
               
              </DropdownMenu>
              </UncontrolledDropdown>

              

                {/* <DropdownItem>
                  <NavLink href='/pocreate'>Department Creation</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/poreceive'>Department View</NavLink>
                </DropdownItem>
                <DropdownMenu end>
              <DropdownToggle caret nav>
                Class
               
              </DropdownToggle>
              </DropdownMenu>
                <DropdownItem>
                  <NavLink href='/pocreate'>Class Creation</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/poreceive'>Class View</NavLink>
                </DropdownItem>
                <DropdownMenu end>
              <DropdownToggle caret nav>
                SubClass
               
              </DropdownToggle>
              </DropdownMenu>
                <DropdownItem>
                  <NavLink href='/pocreate'>Sub Class Creation</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/poreceive'>Sub Class View</NavLink> */}
                {/* </DropdownItem> */}
               
                
          
             
            
              
              
            
              <NavLink className="logout" href='/'>Logout</NavLink>
           

          
      </Nav>



</div>
</div>




    )
  }
}
  
export default NavBar;





//react bootstrap
  {/* <Navbar>
        <Nav>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Inventory" className="button">
            <NavDropdown.Item>
              <a href='/inventory'className='a'>Inventory View Creation</a>
              </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sales" className="button">
        

            <NavDropdown.Item href="/salescreate" className='a'>Sales Creation</NavDropdown.Item>
            <NavDropdown.Item href="/salesview" className='a'>Sales View</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="PO" className="button">
            <NavDropdown.Item href="/pocreate" className='a'>PO Creation</NavDropdown.Item>
            <NavDropdown.Item href="/poreceive" className='a'>PO Receive</NavDropdown.Item>
            <NavDropdown.Item href="/podetails"className='a'>PO Details</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Store"  className="button">
            <NavDropdown.Item href="/storecreate" className='a'>Store Creation</NavDropdown.Item>
            <NavDropdown.Item href="/storeview" className='a'>Store View</NavDropdown.Item>
            <NavDropdown.Item href="/itemloc"className='a'>Item Location</NavDropdown.Item>
          </NavDropdown>
           
          <NavDropdown title="Supplier"  className="button">
              <NavDropdown.Item href="/supplier"className='a'>Supplier Creation</NavDropdown.Item>
              <NavDropdown.Item href="/supplierview"className='a'>Supplier View</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="Item"  className="button">
            <NavDropdown.Item href="/item" className='a'>Item Creation</NavDropdown.Item>
            <NavDropdown.Item href="/itemview" className='a'>Item View</NavDropdown.Item>
          </NavDropdown>
        
        </Nav>
    </Navbar>*/}

    //reactstrap code
      

    //code for normal ul li

    
   
    // <ul>
    // <li className="list-group-item">
        
    // <Menu menuButton={<MenuButton className="button">Item</MenuButton>} transition>
    //   <MenuItem>
    //   <Link className='a' to='/item'>
    //     Item Creation
    //   </Link>
    //   </MenuItem>
    //   <MenuItem>
    //   <Link className='a' to='/itemview'>
    //     Item View
    //   </Link>
    //   </MenuItem>
    //   </Menu> 
    // </li>
    // <li className="list-group-item">
    
           
    // <Menu menuButton={<MenuButton className="button">Supplier</MenuButton>} transition>
    //   <MenuItem>
    //   <Link className='a' to='/supplier'>
    //     Supplier Creation
    //   </Link>
    //   </MenuItem>
    //   <MenuItem>
    //   <Link className='a' to='/supplierview'>
    //     Supplier View
    //   </Link>
    //   </MenuItem>
    //   </Menu> 
    // </li>
     

    //  <li className="list-group-item">
    //  <Menu menuButton={<MenuButton className="button">Store</MenuButton>} transition>
    //   <MenuItem>
    //   <Link className='a' to='/storecreate'>
    //     Store Creation
    //   </Link>
    //   </MenuItem>
    //   <MenuItem>
    //   <Link className='a' to='/storeview'>
    //     Store View
    //   </Link>
    //   </MenuItem>
    //   <MenuItem>
    //   <Link className='a' to='/itemloc'>
    //     Item Location
    //   </Link>
    //   </MenuItem>
    //   </Menu> 
   
    // </li> 
    
    
    // <li className="list-group-item">
    
    // <Menu menuButton={<MenuButton className="button">PO</MenuButton>} transition>
    //   <MenuItem>
    //   <Link className='a' to='/pocreate'>
    //     PO Creation
    //   </Link>
    //   </MenuItem>
    //   <MenuItem>
    //   <Link className='a' to='/poreceive'>
    //     PO Receive
    //   </Link>
    //   </MenuItem>
    //   <MenuItem>
    //   <Link className='a' to='/podetails'>
    //     PO Details
    //   </Link>
    //   </MenuItem>
    //   </Menu> 
    // </li>
    // <li className="list-group-item">
    // <Menu menuButton={<MenuButton className="button">Sales</MenuButton>} transition>
    //   <MenuItem>
    //   <Link className='a' to='/salescreate'>
    //     Sales Creation
    //   </Link>
    //   </MenuItem>
    //   <MenuItem>
    //   <Link className='a' to='/salesview'>
    //     Sales View
    //   </Link>
    //   </MenuItem>
    //   </Menu> 
    // </li>
    // <li className="list-group-item">
    // <Menu menuButton={<MenuButton className="button">Inventory</MenuButton>} transition>
    //   <MenuItem>
    //   <Link className='a' to='/inventory'>
    //     Inventory View
    //   </Link>
    //   </MenuItem>
    //   </Menu>
    //   </li>
    //   <li className="list-group-itemmm">
    //   <Link className='a' to="/">Logout</Link>
    //   </li>
    //   </ul>
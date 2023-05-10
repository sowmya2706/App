import React, { Component } from 'react'
import {DropdownItem, DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import { UncontrolledDropdown} from "reactstrap";

 class Suma_form extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
    <div>
      
      <Dropdown>
            <DropdownToggle>
     merch
          
            <DropdownMenu>vju
                <DropdownItem >First</DropdownItem>
           
                  
                <DropdownItem style={{ fontWeight: 500, color: 'black' }}>Second</DropdownItem>
              
                <DropdownItem style={{ fontWeight: 500, color: 'red' }}>Last </DropdownItem>
            </DropdownMenu>
            <DropdownMenu>fontWeight
              <DropdownItem>rff</DropdownItem>
            </DropdownMenu>
            </DropdownToggle>
        </Dropdown>
    </div>
    )
  }
 }

export default Suma_form




// handleForm=(event)=>{
        
//   this.setState({
//       [event.target.name]:event.target.value
//   })
 

// }
// toggle(){
// console.log("Toggling")
// this.setState({
//  modal:!(this.state.modal),
// })
// }
// onChange=(event)=>{
// if(event.target.type=="checkbox")
// {
// this.setState({isitem:event.target.checked});
// console.log(event.target.checked)
// }

// }
// handleSubmit=(e)=>{
//    e.preventDefault();
//    alert("success")
   

// }
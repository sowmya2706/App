import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'
 class Suma_form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isitem:false,
        isOver21:false,
        
      }
    }
    handleForm=(event)=>{
        
       this.setState({
           [event.target.name]:event.target.value
       })
      

  }
  onChange=(event)=>{
    if(event.target.type=="checkbox")
    {
    this.setState({isitem:event.target.checked});
    console.log(event.target.checked)
    }

  }
    handleSubmit=(e)=>{
        e.preventDefault();
        alert("success")
        

    }
   
  render() {
    const{isitem}=this.state;
    console.log("isitem",isitem)
    return (
      <div>
        <form>
          {/* <div>
          <label>Username</label>
          <input type="text" name="USERNAME" onChange={this.handleForm}></input>
          </div> */}
          <div>
          
         <h1>item :{this.state.isitem==true ?"yes":"no"}
         </h1> 
        
         <label>
        item ?
          <input type="checkbox" name="ITEM" checked={this.isitem} onChange={this.onChange}></input>
         </label>
         
         </div>
        </form>


      </div>
    )
  }
}

export default Suma_form
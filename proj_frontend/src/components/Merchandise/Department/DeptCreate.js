import React, { Component } from 'react'
 import NavBar from "../../Nav.js"
 import "../Merstyle.css"
import Service from './Service';
 class DeptCreate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    handleForm=(event)=>{
        console.log(event.target.value)
       
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }
    handleSubmit=(e)=>{
      
        e.preventDefault();
        const user={
            DEPT_NO:this.state.DEPT_NO,
            DEPT_NAME:this.state.DEPT_NAME,
        }
        console.log(user)
        Service.upload(user).then(res=>{
          window.location.reload(false); 
        })
    }
  render() {
    return (
      <div className='overallitem'>
      <NavBar/>
      <div class="html">
        <div id="contact-forms-mer">
      <h2 className='h3'><center>Department Creation</center></h2>
     <br/>
     <form className="formmer" id="form" onSubmit={this.handleSubmit}>
        
     
        <div>
        <label for ="deptno">
        <span class="required">Department Number: </span>
        <input type="number"className='merinput' name="DEPT_NO" id='DEPT_NO' placeholder='Department Number' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
        {/* <div style={{fontSize:18,color:'red'}}>{this.state.error['DEPT_NO']}</div>  */}
        </label>
        </div>
        <br/>
        <div>
        <label for ="deptname">
        <span class="required">Department Name: </span>
        <input type="text" className='merinput' name="DEPT_NAME" id='DEPT_NAME' placeholder='Department Name' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
        {/* <div style={{fontSize:18,color:'red'}}>{this.state.error['DEPT_NAME']}</div>  */}
        </label>
        </div>
        <div >
         <button className='submits-item-m'>SUBMIT</button>
         <button type="reset" className='submits-item-m-clear'>CLEAR</button>

         
         </div>

        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default DeptCreate
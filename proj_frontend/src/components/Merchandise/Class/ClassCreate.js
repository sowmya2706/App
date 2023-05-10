import React, { Component } from 'react'
import Service from './Service.js'
import NavBar from '../../Nav.js'
// import "../../Item/Item_style.css"
import "../Merstyle.css"
 class ClassCreate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dept:[],
      
    }
  }
  handleForm=(event)=>{
    console.log(event.target.value)
   
    this.setState({
        [event.target.name]:event.target.value
    })
    
}
componentDidMount(){
  console.log("SFEDf")
  Service.getdept().then(res=>{
      console.log(res.data);
    this.setState({dept:res.data})
  
   })
   console.log(this.state.dept)
  }
handleSubmit=(e)=>{
      
  e.preventDefault();
  const user={
      CLASS_NO:this.state.CLASS_NO,
      CLASS_NAME:this.state.CLASS_NAME,
      DEPT:this.state.DEPT,
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
      <h2 className='h1'><center>Class Creation</center></h2>
     <br/>
     <form className="formmer" id="form" onSubmit={this.handleSubmit}>
        
     <div>
            <label for="department">
              <span className="required">Department</span>

               <select name='DEPT'className='merinput'  id='depts' onChange={this.handleForm} > 
               <option>Select</option>
                {this.state.dept.map((dept,i)=>
               
               {
             

                return <option>{dept.DEP_NO} </option>})} 
                              
                              
                </select>
                
                </label>
            </div>
            <br/>
        <div>
        <label for ="classno">
        <span class="required">Class Number: </span>
        <input type="number"className='merinput' name="CLASS_NO" id='CLASS_NO' placeholder='Class Number' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
        {/* <div style={{fontSize:18,color:'red'}}>{this.state.error['DEPT_NO']}</div>  */}
        </label>
        </div>
        <br/>
        <div>
        <label for ="classname">
        <span class="required">Class Name: </span>
        <input type="text" className='merinput' name="CLASS_NAME" id='CLASS_NAME' placeholder='Class Name' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
        {/* <div style={{fontSize:18,color:'red'}}>{this.state.error['DEPT_NAME']}</div>  */}
        </label>
        </div>
        <br/>
       
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

export default ClassCreate
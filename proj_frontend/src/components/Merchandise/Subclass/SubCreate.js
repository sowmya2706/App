import React, { Component } from 'react'
import Service from './Service.js'
import NavBar from '../../Nav.js'
import "../Merstyle.css"
class SubCreate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data:[],
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
  Service.getclass().then(res=>{
      console.log(res.data);
    this.setState({data:res.data})
  
   })
   console.log(this.state.class)
  }
  handleSubmit=(e)=>{
      
    e.preventDefault();
    const user={
        SUB_CLASS_NO:this.state.SUB_CLASS_NO,
        SUB_CLASS_NAME:this.state.SUB_CLASS_NAME,
        CLASS:this.state.CLASS,
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
      <h2 className='h1'><center> Sub Class Creation</center></h2>
     <br/>
     <form className="formmer" id="form" onSubmit={this.handleSubmit}>
     <div>
            <label for="class">
              <span className="required">Class</span>

               <select name='CLASS' className='merinput' id='CLASS' onChange={this.handleForm} > 
               <option>Select</option>
                {
                this.state.data.map((data,i)=>
               
               {
             

                return <option>{data.CLASS_NO} </option>})} 

                              
                </select>
                
                </label>
            </div>
            <br/>
     
        <div>
        <label for ="classno">
        <span class="required"> Sub Class Number: </span>
        <input type="number" className='merinput' name="SUB_CLASS_NO" id='SUB_CLASS_NO' placeholder='Class Number' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
        {/* <div style={{fontSize:18,color:'red'}}>{this.state.error['DEPT_NO']}</div>  */}
        </label>
        </div>
        <br/>
        <div>
        <label for ="classname">
        <span class="required">Sub Class Name: </span>
        <input type="text" className='merinput' name="SUB_CLASS_NAME" id='SUB_CLASS_NAME' placeholder='Class Name' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
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

export default SubCreate
import React, { Component } from 'react'
import Service from '../User/Service';
import { Navigate } from "react-router-dom";
// import "../../App.css";
// import "./style.css"
//import "./Signin.css"
import "./New_style.css"

class New_user extends Component {
constructor(props) {
  super(props)

  this.state = {
    navigate:false,
    otpvalue:'',
     
  }
}
handleForm=(event)=>{
        
  this.setState({
      [event.target.name]:event.target.value
  })
}
otpgenerate=(e)=>{
  e.preventDefault();
  const val={
    EMAIL:this.state.EMAIL,
  }
  Service.otpgenerate(val).then (res=>{
    console.log(res);
    this.setState({
      otpvalue:res
    })

  })
 
 console.log(this.state.otpvalue)
}


handleSubmit=(e)=>{
  e.preventDefault();
  const user={
      USERNAME:this.state.USERNAME ,
    PASSWORD:this.state.PASSWORD,
    OTP:this.state.OTP,
  }
  Service.newuser(user).then (res=>{
   //alert(res);
   console.log(user.OTP)
   console.log(this.state.otpvalue)
   if(res=="s" && user.OTP==this.state.otpvalue)
   {
    this.setState({navigate:true});
   }
   else if(res!="s"){
    alert("the username and password already exists");
   }
   else if(user.OTP!=this.state.otpvalue)
   {
    alert("The Entered OTP is wrong")
   }
   else{
    alert("welcome")
    this.setState({navigate:false});
    e.target.reset();
   
   }
  })
}

  render() {
    return (

<div class="body">
  <div class="conter">
    <h1>Sign Up</h1>
    <form onSubmit={this.handleSubmit}>
      <div class="txt_field">
      <input type="text" class="input-box" name="USERNAME" placeholder='USERNAME' onChange={this.handleForm} required/>
      
      </div>
      <div class="txt_field">
      <input type="text"  class="input-box" name="PASSWORD" placeholder='PASSWORD'onChange={this.handleForm} required/>
      </div>
      <div class="txt_field">
      <input type="text"  class="input-box" name="EMAIL" placeholder='EMAIL'onChange={this.handleForm} required/>
      </div>
      <div class="txt_field">
      <input type="number"  class="input-box" name="OTP" placeholder='OTP'onChange={this.handleForm} required/>
      </div>
      <button type="submit"  onClick={this.otpgenerate} class="input-box">Generate OTP</button>
      <button type="submit"   class="input-box">SUBMIT</button>
      <div>{this.state.navigate==true?<Navigate to="/home"replace={true}/>:""}</div>
    </form>
  </div>
</div>
    )}
}

export default New_user
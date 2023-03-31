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
    navigate:false
     
  }
}
handleForm=(event)=>{
        
  this.setState({
      [event.target.name]:event.target.value
  })
}

handleSubmit=(e)=>{
  e.preventDefault();
  const user={
      USERNAME:this.state.USERNAME ,
    PASSWORD:this.state.PASSWORD
  }
  Service.newuser(user).then (res=>{
   //alert(res);
   if(res=="s")
   {
    this.setState({navigate:true});
   }
   else{
    alert("the username and password already exists");
   
   
    this.setState({navigate:false});
    e.target.reset();
   
   }
  })
}

  render() {
    return (
//       <div >
//          <div class="bg-img">
//       <div class="wrap">
//                <h2 class="montserrat">Get in touch</h2>
        
       
//   <div class="box">
//     <div class="content">

 
//        <div>
//        <model-viewer class="model-viewer" alt="laptop" src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/laptop.glb" shadow-intensity="1"  camera-controls touch-action="pan-y"  environment-image="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/dancing_hall_2k.hdr" exposure="1.5"   disable-zoom disable-tap  camera-orbit="-45deg 60deg 9m" autoplay ></model-viewer>  
//        </div>
//       <div class="form">
//         <form onSubmit={this.handleSubmit}>
         
//         <div>
//         <label >Sign in</label>
//         <hr/>
//         </div>
//         <div>
         
//           <input type="text" class="input-box" name="USERNAME" placeholder='USERNAME' onChange={this.handleForm} required/>
//         </div>
//         <div>
         
//           <input type="text"  class="input-box" name="PASSWORD" placeholder='PASSWORD'onChange={this.handleForm} required/>
//         </div>
//         <div class="button-container">

//         <div class="send-button">
//           <button type="submit"   class="input-box">SUBMIT</button>
//         </div>
//         </div>
       
//         </form>
//         </div>
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
//     )
//   }
// }
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
      <button type="submit"   class="input-box">SUBMIT</button>
      <div>{this.state.navigate==true?<Navigate to="/"replace={true}/>:""}</div>
    </form>
  </div>
</div>
    )}
}

export default New_user
import React, { Component } from 'react'
import axios from 'axios';
import NavBar from '../Nav.js'
// import '../Home.js'
import './Storestyle.css' 
// import '../Supplier/Supplier_style.css'
import Service from '../Store/Service';
import { Link } from "react-router-dom";
//import { Navigate } from "react-router-dom";
 class StoreCreation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
STORE:'',                     
STORE_NAME:'',              
STORE_OPEN_DATE:'',                   
STORE_CLOSE_DATE:'',                  
PHONE_NUMBER:'',             
EMAIL :'',                  
VAT_REGION  :'',                      
VAT_INCLUDE_IND :'',                
STOCKHOLDING_IND:'',        
AUTO_RCV:'',                
CREATE_DATETIME:'',         
CREATE_USERNAME:'',
data_value:[],
navigate:false,
error:{},   

    }
  }
  handleForm=(event)=>{
    var opdate;
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  reset=()=>{
    window.location.reload(false);
  }
  handlesubmit=(e)=>{
    e.preventDefault();
    const user={
        STORE :this.state.STORE,                      
        STORE_NAME:this.state.STORE_NAME,             
        STORE_OPEN_DATE :this.state.STORE_OPEN_DATE,                  
//STORE_CLOSE_DATE :this.state.STORE_CLOSE_DATE,                 
        PHONE_NUMBER :this.state.PHONE_NUMBER,            
        EMAIL :this.state.EMAIL,                  
        VAT_REGION :this.state.VAT_REGION,                       
        VAT_INCLUDE_IND  :'Y',               
        STOCKHOLDING_IND :'Y',       
        AUTO_RCV  :'Y',              
//CREATE_DATETIME   :this.state.CREATE_DATETIME,      
        CREATE_USERNAME   :window.sessionStorage.getItem("name")  


    }
    console.log(user);
    
        Service.upload(user).then (res=>{
            console.log("response is",res);
            if(res!=undefined)
            {
              document.getElementById("form").reset();
              document.getElementById("order_no").value="";
              document.getElementById("store").value="";
              document.getElementById("supplier").value="";
            }
        })
      }
      emailcheck=(event)=>{
        var email=document.getElementById("EMAIL").value;
        console.log("email is",email);
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(validRegex))
        {
          this.state.error[event.target.name]="";
        }
        else{
          this.state.error['EMAIL']="email is wrong"
           console.log(this.state.error)
        }
        this.setState({
          error:this.state.error
        })

      }
      phonecheck=(event)=>{
        this.state.error[event.target.name]=" "
        var num=document.getElementById("PHONE_NUMBER").value;
       
        console.log("number is",num)
        console.log("entered  phonenumber",num)
        var phoneno = /^\d{10}$/;
        
      
        if(num.length!=10)
        {
            this.state.error['PHONE_NUMBER']="Phone number is wrong"
             console.log(this.state.error)
        }
        else{
            this.state.error[event.target.name]="";
        }
        this.setState({
          error:this.state.error
        })
      
        this.setState({
          EMAIL:'',
          PHONE_NUMBER:'',
          VAT_REGION:''
         

         })
        
        };
       
render()
   {
    return (
      <div className='overallstore'>
        <NavBar/>
    
        <div className='htmlsstore'></div>
        <div id='contact-form-store'>
       
          <h2><center>Store Creation</center></h2>
        <form id="form" className="formstore" onSubmit={this.handlesubmit}>
       
      
        <div >
        <label for="store">
          <span className="required">Store</span>
         <input type="number" className="storein"name="STORE"  onChange={this.handleForm} required/> 
         
         </label>
        </div>
        
        <div>
        <label for="storename">
          <span className="required">Store Name</span>
         <input type="text" name="STORE_NAME" className="storein" onChange={this.handleForm} required/> 
         </label>
        </div>
     
         <div>
          
        <label for="Storeopendate">
          <span className="required">Open date</span>
         <input type="date" name="STORE_OPEN_DATE" className="storein" onChange={this.handleForm} required/> 
         </label>
        </div>
       
        {/*<div>
        <label>STORE_CLOSE_DATE</label>
         <input type="date" name="STORE_CLOSE_DATE"  onChange={this.handleForm} /> 
        </div>
        <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div>
        <br/> */}
        <div>
        <label for="phonenumber">
          <span className="required">Phone Number</span>
         <input type="text" id="PHONE_NUMBER" name="PHONE_NUMBER" className="storein" onChange={this.handleForm} onInput={this.phonecheck}/> 
         <div style={{fontSize:14,color:'red'}}>{this.state.error['PHONE_NUMBER']}</div>
         </label>
        </div>
       
        <div>
        <label for="email">
          <span className="required">Email</span>
         <input type="text" name="EMAIL" id="EMAIL"className="storein" onChange={this.handleForm} onInput={this.emailcheck}/> 
         <div style={{fontSize:14,color:'red'}}>{this.state.error['EMAIL']}</div>
         </label>
        </div>
        
        <div>
        <label for="vatregion">
          <span className="required">VAT Region</span>
         <input type="text" name="VAT_REGION" className="storein" onChange={this.handleForm} /> 
         </label>
        </div>
       
        {/* <div>
        <label>VAT INCLUDE INDICATOR</label>
         <input type="text" name="VAT_INCLUDE_IND"  onChange={this.handleForm}/> 
        </div> */}
        {/* <div>
        <label>STOCK HOLDING INDICATOR</label>
         <input type="text" name="STOCKHOLDING_IND"  onChange={this.handleForm} required/> *
        </div> */}
        {/* <div>
        <label>AUTO RCV</label>
         <input type="text" name="AUTO_RCV"  onChange={this.handleForm} required/> *
        </div> */}
        {/* <div>
        <label>CREATER DATETIME</label>
         <input type="date" name="CREATE_DATETIME"  onChange={this.handleForm} required/> *
        </div> */}
        <div>
        <label for="create username">
           <span className="required">Username</span>
         <input type="text" name="CREATE_USERNAME"className="storein" value={window.sessionStorage.getItem("name")} onChange={this.handleForm} required/> 
         </label>
        </div>
<div></div>
        <div>
         <button type="submit" className="submits-item-store">SUBMIT</button>
         <button type="reset" className="submits-item-c-store" value="Reset">CLEAR</button>
         {/* <button className='submits-item-c' onClick={this.reset}>Clear</button> */}
        
         </div>
       
        </form>
        </div>
      </div>
      // document.getElementsByClassName("list-group")

    )
  }
}


export default StoreCreation
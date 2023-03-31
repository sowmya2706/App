import React, { Component } from 'react'
import axios from 'axios';
import "../../App.css";
import Service from '../Store/Service';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
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
      
        
        
        }
       
    
    
    
    
  render()
   {
    return (
      <div class='store'>
        <form onSubmit={this.handlesubmit}>
          <div><center>Store Creation</center></div>
          <hr/>
        <div >
        <label>STORE</label>
         <input type="number" name="STORE"  onChange={this.handleForm} required/> 
        </div>
        <br/>
        <div>
        <label>STORE_NAME</label>
         <input type="text" name="STORE_NAME"  onChange={this.handleForm} required/> 
        </div>
        <br/>
         <div>
          
        <label>STORE_OPEN_DATE</label>
         <input type="date" name="STORE_OPEN_DATE"  onChange={this.handleForm} required/> 
        </div>
        <br/>
        {/*<div>
        <label>STORE_CLOSE_DATE</label>
         <input type="date" name="STORE_CLOSE_DATE"  onChange={this.handleForm} /> 
        </div>
        <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div>
        <br/> */}
        <div>
        <label>PHONE NUMBER</label>
         <input type="text" id="PHONE_NUMBER" name="PHONE_NUMBER"  onChange={this.handleForm} onInput={this.phonecheck}/> 
         <div style={{fontSize:14,color:'red'}}>{this.state.error['PHONE_NUMBER']}</div>
        </div>
        <br/>
        <div>
        <label>EMAIL</label>
         <input type="text" name="EMAIL" id="EMAIL" onChange={this.handleForm} onInput={this.emailcheck}/> 
         <div style={{fontSize:14,color:'red'}}>{this.state.error['EMAIL']}</div>
        </div>
        <br/>
        <div>
        <label>VAT REGION</label>
         <input type="text" name="VAT_REGION"  onChange={this.handleForm} /> 
        </div>
        <br/>
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
        <label>CREATER_USRNAME</label>
         <input type="text" name="CREATE_USERNAME" value={window.sessionStorage.getItem("name")} onChange={this.handleForm} required/> *
        </div>
        <br/>
        <div className='submit'>
         <button type="submit">SUBMIT</button>
         <Link className="btn-link" to='/home'>
            BACK
                        </Link>
               
         </div>
        </form>
      </div>

    )
  }
}


export default StoreCreation
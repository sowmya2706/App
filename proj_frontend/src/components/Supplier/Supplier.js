import React, { Component } from 'react'
import axios from 'axios';
import './Supplier_style.css'
import Service from '../Supplier/Service';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { Link } from "react-router-dom";
 class Supplier extends Component {
    constructor(props){
        super(props)
        this.state={
 SUPPLIER:'',                           
SUP_NAME:'',                  
CONTACT_NAME:'',           
CONTACT_PHONE:'',          
SUP_STATUS :'',                              
FREIGHT_TERMS :'',         
HANDLING_PCT   :'' ,                   
SHIP_METHOD :'',                      
PAYMENT_METHOD  :'',                  
FREIGHT_CHARGE_IND:'',      
PREPAY_INVC_IND:'',          
BACKORDER_IND  :'',       
VAT_REGION :'',                       
COMMENT_DESC :'',                   

data_value:[],
error:{},

        }
    }

handleForm=(event)=>{
        console.log(event.target.value)
    this.setState({
        [event.target.name]:event.target.value
    })
}
phonecheck=(event)=>{
    var num=document.getElementById("CONTACT_PHONE").value;
    console.log("entered  phonenumber",num)
    var phoneno = /^\d{10}$/;

    if(num.length!=10)
    {
        this.state.error[event.target.name]="Phone number is wrong"
         console.log(this.state.error)
    }
    else{
        this.state.error[event.target.name]="";
    }
    this.setState({
        error:this.state.error
    })


}

handlesubmit=(e)=>{
      
    e.preventDefault();

    const user={
        SUPPLIER :this.state.SUPPLIER,
        SUP_NAME :this.state.SUP_NAME  ,
        CONTACT_NAME:this.state.CONTACT_NAME,
        CONTACT_PHONE:this.state.CONTACT_PHONE,
        SUP_STATUS :'A',
        
        FREIGHT_TERMS :"6 days from the date of order",
        // SHIP_METHOD  :this.state.SHIP_METHOD ,
        HANDLING_PCT :15  ,
        PAYMENT_METHOD:this.state.PAYMENT_METHOD  ,
        FREIGHT_CHARGE_IND  :'N' ,
       
        PREPAY_INVC_IND:'N',
        BACKORDER_IND :'N' ,
        VAT_REGION:this.state.VAT_REGION  ,
        COMMENT_DESC   :this.state.COMMENT_DESC       , 
        
       
    }
    console.log(user);
    Service.upload(user).then (res=>{
        console.log(res)
        if(res!=undefined)
        {
          document.getElementById("form").reset();
        //   document.getElementById("order_no").value="";
        //   document.getElementById("store").value="";
        //   document.getElementById("supplier").value="";
        }
        
    })
  
  };
 
render() {
    return (
        <div className='overall'>
      <div className='htmls'> </div>
        <div id='contact-form'>
            <h2>Supplier Creation</h2>
        <form id="form"className="forms"onSubmit={this.handlesubmit}>
         
         <div>
         <label for="Supplier">
            <span className="required">Supplier </span>
            <input type="text" id='supplier' name="SUPPLIER" placeholder='Supplier id' onChange={this.handleForm} required/> 
         </label>

         </div>
         <div>
         <label for="name">
            <span className="required">Supplier Name</span>
            <input type="text" id='supplier_name'name="SUP_NAME" placeholder='Supplier name'onChange={this.handleForm} required/> </label>
         
         </div>
         <div>
         <label for="contact">
            
            <span className="required">Contact</span> 
            <input type="textarea" id='conatct_name'name="CONTACT_NAME" placeholder='Name and address'onChange={this.handleForm} required/> </label>
        
         </div>
         
         <div>
         <label for="phone"> 
         <span className='required'>Phone</span>
         
         <input type="text" id="CONTACT_PHONE"name="CONTACT_PHONE" placeholder='Phone number'onChange={this.handleForm} onInput={this.phonecheck} required/> 
         <div style={{fontSize:14,color:'red'}}>{this.state.error['CONTACT_PHONE']}</div>
         </label>
         </div>
         {/* <div>
         <label>SUP_STATUS</label>
         <input type="text" name="SUP_STATUS" onChange={this.handleForm}/>
         </div>
         */}
         {/* <div>
         <label>FREIGHT_TERMS </label>
         <input type="text" name="FREIGHT_TERMS" onChange={this.handleForm}/>
         </div>
         */}
         {/* <div>
         <label> HANDLING_PCT</label>
         <input type="number" name="HANDLING_PCT" onChange={this.handleForm}/>
         </div> */}
         {/* <div>
         <label> SHIP_METHOD  </label>
         <input type="text" name="SHIP_METHOD" onChange={this.handleForm}/>
         </div> */}
         <div>

  
         <label for="pay">
            <span className="required">Payment Method</span>
            <select id='payment' name= "PAYMENT_METHOD"onChange={this.handleForm}  > 

            

                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="upi">Upi/netbanking</option>
                <option value="bank">Bank</option>
            </select> 
         {/* <input type="text" name="PAYMENT_METHOD" placeholder='card cash'onChange={this.handleForm} required/>  */}
         {/* <Dropdown options={options} onChange={this._onSelect}  placeholder="Select an option" />; */}
         </label>
         </div>
         {/* <div>
         <label>FREIGHT_CHARGE_IND </label>
         <input type="text" name="FREIGHT_CHARGE_IND" onChange={this.handleForm}/>
         </div> */}
         {/* <div>
         <label>PREPAY_INVC_IND </label>
         <input type="text" name="PREPAY_INVC_IND" onChange={this.handleForm}/>
         </div> */}
         {/* <div>
         <label>BACKORDER_IND</label>
         <input type="TEXT" name="BACKORDER_IND" onChange={this.handleForm}/>
         </div> */}
         <div>
         <label for="Vat Region">
            <span className="required">Vat Region</span>
       
         <input type="text" id='vat'name="VAT_REGION" placeholder='TN'onChange={this.handleForm} required/> 
         </label>
         </div>
         <div>
         <label for="comments">
            <span className="Comments">Comments</span> 
         <input type="text" id='comment'name="COMMENT_DESC" placeholder='' onChange={this.handleForm}/>
         </label>
         </div>
         
<div></div>
         <div className='submit'>
         <button type="submit">SUBMIT</button>
        
            <Link className="btn-link" to='/home'>
            BACK
                        </Link>
               
           
         </div>
         </form>
       
 
            </div>
     
      </div>
    )
  }
 }

export default Supplier

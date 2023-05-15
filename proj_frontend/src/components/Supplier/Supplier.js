import React, { Component } from 'react'
import './Supplier_style.css'
import Service from '../Supplier/Service';

import 'react-dropdown/style.css';
import NavBar from  '../Nav.js';

import { Link } from "react-router-dom";
 class Supplier extends React.Component {
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
        this.state.error[event.target.name]=" "
    this.setState({
        [event.target.name]:event.target.value
    })
    if(event.target.name=="CONTACT_PHONE")
    {
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
}
validation=(user)=>{
    //console.log("val",user.ITEM)
    console.log(user)
     let errormsg=this.state.error
    let re=true;
    console.log("writing user")
    Object.keys(user).forEach((key , index) => {
      console.log("keyyy",user[key])
    // console.log("quantity",user[key][index].quantity)
      console.log("key",key)
      if(user[key] === ""|| user[key]===undefined || user[key].length==0){
        errormsg[key]="Enter correct information";
        
        re=false;
      }
    })

    this.setState({
      error:errormsg
    })
    return re;
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
reset=()=>{
    window.location.reload(false);
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
    const val={
        SUPPLIER :this.state.SUPPLIER,
        SUP_NAME :this.state.SUP_NAME  ,
        CONTACT_NAME:this.state.CONTACT_NAME,
        CONTACT_PHONE:this.state.CONTACT_PHONE,

        PAYMENT_METHOD:this.state.PAYMENT_METHOD  ,
       
        VAT_REGION:this.state.VAT_REGION  ,

       
    }
    console.log(user);
    let uplovali=this.validation(val)
        console.log("value for uplovali",uplovali)
           if(uplovali==true)
           {
    Service.upload(user).then (res=>{
        console.log(res)
        if(res!=undefined)
        {
            this.setState({
            SUPPLIER :'',
        SUP_NAME :'' ,
        CONTACT_NAME:'',
        CONTACT_PHONE:'',

        PAYMENT_METHOD:'' ,
       
        VAT_REGION:'',
        COMMENTS:''
            })
          document.getElementById("form").reset();
        //   document.getElementById("order_no").value="";
        //   document.getElementById("store").value="";
        //   document.getElementById("supplier").value="";
        }
        
    })
  
}
      }
 
render() {
    return (
        <div className='overall'>
      <NavBar/>
      <div className='htmls'> </div>
        <div id='contact-form'>
            <h3><center>Supplier Creation</center></h3>
        <form id="form"className="form"onSubmit={this.handlesubmit}>

         <div>
         <label for="Supplier">
            <span className="required">Supplier </span>
            <input type="text" className="supinput" id='supplier' name="SUPPLIER" placeholder='Supplier id' onChange={this.handleForm} /> 
         </label>
         <div style={{fontSize:14,color:'red'}}>{this.state.error['SUPPLIER']}</div>
         </div>
         <div>
         <label for="name">
            <span className="required">Supplier Name</span>
            <input type="text" className="supinput" id='supplier_name'name="SUP_NAME" placeholder='Supplier name'onChange={this.handleForm}/> </label>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['SUP_NAME']}</div>
         </div>
         <div>
         <label for="contact">
            
            <span className="required">Contact</span> 
            <input type="textarea" className="supinput" id='conatct_name'name="CONTACT_NAME" placeholder='Name and address'onChange={this.handleForm} /> </label>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['CONTACT_NAME']}</div>
         </div>
         
         <div>
         <label for="phone"> 
         <span className='required'>Phone</span>
         
         <input type="text" id="CONTACT_PHONE"name="CONTACT_PHONE" className="supinput"placeholder='Phone number'onChange={this.handleForm} onInput={this.phonecheck} /> 
         <div style={{fontSize:14,color:'red'}}>{this.state.error['CONTACT_PHONE']}</div>
         </label>
   
         </div>
        
         <div>

  
         <label for="pay">
            <span className="required">Payment Method</span>
            <select id='payment' className="supinput" name= "PAYMENT_METHOD"onChange={this.handleForm}  > 

            
            <option value="select">Select</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="upi">Upi/netbanking</option>
                <option value="bank">Bank</option>

            </select> 
            
            <div style={{fontSize:14,color:'red'}}>{this.state.error['PAYMENT_METHOD']}</div>
        
         </label>
         </div>

         <div>
         <label for="Vat Region">
            <span className="required">Vat Region</span>
       
         <input type="text" className="supinput" id='vat'name="VAT_REGION" placeholder='TN'onChange={this.handleForm} /> 
         </label>
         </div>
         <div>
         <label for="comments">
            <span className="required">Comments</span> 
         <input type="text" className="supinput" id='comment'name="COMMENT_DESC" placeholder='' onChange={this.handleForm}/>
         </label>
         </div>
         
<div></div>
         {/* <div> */}
         {/* <button className="submit"type="submit">SUBMIT</button> */}
         {/* <button className='submits-item-c' type="reset" value="Reset">CLEAR</button> */}
        
         {/* <button className="submits-item-c" type="button" onClick={this.reset}>CLEAR</button> */}
         {/* </div> */}
         {/* className='submits-item' */}
         <div >
         <button className='submits-item'>SUBMIT</button>
         <button className='submits-item-c' type="reset"onClick={this.reset}>CLEAR</button>
         {/* <button className='submits-item-c' type="reset" value="Reset">CLEAR</button> */}
         
         </div>
           
        
         </form>
       
 
            </div>
     
      </div>
    )
  }
 }

export default Supplier

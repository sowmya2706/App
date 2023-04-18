import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Service from './Po_Service';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import NavBar from '../Nav.js'
import './Po_style.css'
import { ModalFooter } from 'react-bootstrap';

//import image from "./pic1.jpg";
 class PoCreate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        supplier_values:[],
        store_values:[],
        check:true,
        item_values:[{}],
        item_qnty:[],
        error:{},
        order_values:[],
        val_po:[],
        selectedvalue:'',
        errormsg:'',
        ORDER_NO:'',
        modal:false,
      
        
        //WRITTEN_DATE:new Date().toLocaleString()
        
      }
     
    }
    
    handleForm=(event)=>{
      console.log(event.target.value)
     // console.log([event.target.name,event.target.value])
      
        this.state.error[event.target.name]=" "
      
   
     // this.validation(event.target.name:event.target.value)
        this.setState({
          // check:!this.state.check,
            [event.target.name]:event.target.value
          
        })

    }
    //indvalidation
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
          errormsg[key]="enter correct info";
          
          re=false;
        }
      })

      this.setState({
        error:errormsg
      })
      return re;
    }
    
   
    handleSubmit=(e)=>{
      e.preventDefault();
        const user={     
ORDER_NO:this.state.ORDER_NO,                 
SUPPLIER:this.state.SUPPLIER,            
//LOC_TYPE:this.state.LOC_TYPE,                      
STORE:this.state.STORE,                          
//WRITTEN_DATE:this.state.WRITTEN_DATE,            
TERMS :this.state.TERMS,               
FREIGHT_TERMS:this.state.FREIGHT_TERMS,                
//STATUS:this.state.STATUS,              
//PO_ACK_RECVD_IND:this.state.PO_ACK_RECVD_IND,     
// CREATE_DATETIME:this.state.CREATE_DATETIME,                  
COMMENT_DESC:this.state.COMMENT_DESC,                 
CREATE_USERID:window.sessionStorage.getItem("name") ,
//ORDERED_QUANTY:this.state.order_values ,
item_qnty:this.state.item_qnty,
ITEM:this.state.order_values,                
        }
        console.log("order number is",this.state.ORDER_NO)
        const val={
          ORDER_NO:this.state.ORDER_NO,
          ITEM:this.state.order_values, 
          SUPPLIER:this.state.SUPPLIER,
          STORE:this.state.STORE,
          TERMS:this.state.TERMS, 
          //ORDERED_QUANTY:this.state.order_values, 
        }
        console.log(user);
      //  console.log("the value for supplier is",user.STORE)
      let uplovali=this.validation(val)
      console.log("value for uplovali",uplovali)
         if(uplovali==true)
         {

        Service.upload(user).then (res=>{
            //post method insertion

            console.log("response for po createnormal upload is",res);
            if(res!=undefined)
            {
              document.getElementById("form").reset();
              document.getElementById("order_no").value="";
              document.getElementById("store").value="";
              document.getElementById("supplier").value="";
            }
            else{
              document.getElementById("order_no").value="";
              document.getElementById("form").reset();
             
              document.getElementById("store").value="";
              document.getElementById("supplier").value="";
            }
           


        })
      }
      
    
      }
    
    
    componentDidMount(){
        Service.getsupplier().then(res=>{
            console.log(res.data);
          this.setState({supplier_values:res.data})
        
         })
         console.log("got supplier values")
         Service.getstore().then(res=>{
            console.log(res.data);
          this.setState({store_values:res.data})
        
         })
         Service.getorder().then(res=>{
          console.log("ycuuuu ",res.data[0].NEXTVAL);
        this.setState({ORDER_NO:res.data[0].NEXTVAL})
         })
         
       

      }
      toggle(){
        console.log("Toggling")
        this.setState({
          modal:!(this.state.modal),
        })
      }
      itemget=(e)=>{
        console.log("store is",this.state.STORE)
        var storepo=this.state.STORE;
        var supplierpo=e.target.value;
        console.log("storepo is",storepo)
        console.log("supplierpo is",supplierpo)
        console.log("printtt")
       console.log(e.target.value);
       this.setState({
          modal:!(this.state.modal),
          [e.target.name]:e.target.value
      })
     

      
       Service.getitem(supplierpo,storepo).then(res=>{
        console.log("itemget response",res);
       
        this.setState({item_values:res})
       //this.state.item_values=res
        console.log("length is",this.state.item_values.length)
        
       
        })
        //e.target.checked=false;
        if(document.getElementById("itemcheckbox_iswrapper").children[0].children[0]!=undefined)
        {
        console.log("dfwgeherg",document.getElementById("itemcheckbox_iswrapper").children[0].children[0])
        document.getElementById("itemcheckbox_iswrapper").children[0].children[0].removeAttribute('checked')
      
        }
      }
     
      myfunc=(e,id)=>{

       if(e.target.checked){
        this.setState({item:id})
        document.getElementById(id).style.display="block";
     

      }
      else{
        document.getElementById(id).style.display="none";
        
      }
      }
      saveQuantity=(e,item)=>{
        console.log("Quantity"+e.target.value);
        var quantity=e.target.value
        var productitem=item.ITEM

        if(e.key==='Enter')
        {
          
          console.log("the value is",e.target.value)
        
          // this.setState({
          //   error:this.state.error
          // })
          if(quantity<0)
          {
            this.state.error[e.target.name]="the ordered quantity is negative"
          }
          else{
         this.setState({
          order_values:this.state.order_values.concat({productitem,quantity})
       
          //order_values:this.state.order_values.concat({id:e.target.value})
       })
       console.log(this.state.order_values);
      }
      }

      }
//       reset=()=>{
//         this.form.reset();
// Object.keys(this.form.controls).forEach(key => {
//     this.form.get(key).setErrors(null) ;
// });


//       }
    
  render() {
       
    return (
  
      <div className='overallpo'>
        <NavBar/>
        <div className='htmlpo'></div>

     <div id='contact-form-po'>
      <h2>PO Creation</h2>
        <form id="form" className="formpo"onSubmit={this.handleSubmit} >
          <div>
            <div>
            <label for ="orderno">
              <span className="requiredpo">Order number</span>
            
            <input type="number" id='order_no'name='ORDER_NO' onChange={this.handleForm} value={this.state.ORDER_NO}/> 
            </label>
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['ORDER_NO']}</div> 
          
            <div>
            <label for="store">
              <span className="requiredpo">Store</span>

               <select name='STORE' id='store' onChange={this.handleForm} > 
 
                {this.state.store_values.map((store_values,i)=>

               {return <option>{store_values.STORE} </option>})} 
                              <option>Select</option>
                              
                </select>
                
                </label>
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['STORE']}</div> 
     

            <div>
             <label for="supplier">
              <span className="requiredpo">Supplier</span>

               <select name='SUPPLIER' id='supplier' onChange={this.itemget} onInput={this.handleForm} > 
                {this.state.supplier_values.map((supplier_values,i)=>
 {return <option  >{supplier_values.SUPPLIER}</option>})} 
                               <option>Select</option>
                               
                </select>

                </label>
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['SUPPLIER']}</div> 
    
            <div>
            <label for="terms">
              <span className="requiredpo">Terms</span>
            <input type="text" name="TERMS"  onChange={this.handleForm} /> 
            </label>
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['TERMS']}</div> 
   
            <div>
            <label for="fsv">
              <span className="requiredpo">Freight Terms</span>
            <input type="text" name="FREIGHT_TERMS"  onChange={this.handleForm} /> 
            </label>
            </div>
         
          
            <div>
            <label for="id">
              <span className="requiredpo">Create UserID</span>
            <input type="text" name="CREATE_USERID" value={window.sessionStorage.getItem("name")} onChange={this.handleForm} /> 
            </label>
            </div>
       
            <div>
            <label for="comments">
              <span className="requiredpo">Comments</span>
            <input type="text" name="COMMENTS"  onChange={this.handleForm} /> 
            </label>
            </div>
            <div className='submitButton'>
                <button type="submit" onClick={this.reset}>SUBMIT</button>
              
              </div>

        </div>
      
        
        </form>
        </div>
        <Modal show={this.state.modal} onHide={this.toggle.bind(this)}>
      <Modal.Header>ITEMS : <span className="closeBtn" onClick={this.toggle.bind(this)}>x</span></Modal.Header>
      <Modal.Body>
      <div id="checkbox_renderer"> 
     
        <div id="itemcheckbox_iswrapper">
          {                
          this.state.item_values.map((item,ind)=>
            {

             return (
             <div key={item.ITEM} id="check_wrap">
                <input type="checkbox" id={item} className="item_checkbox" name='ITEM'   onChange={this.handleForm} onClick={(e)=>{this.myfunc(e,ind)}}/>
                <div id="checkbox_text">{item.ITEM}</div>
                <input type="number" name='ORDERED_QUANTY' className="item_qty_tf" id={ind} placeholder='ordered quantity' onChange={this.handleForm} onKeyDown={(e)=>{this.saveQuantity(e,item)}} style={{"display":"none"}} />
            </div>
           
            )
              
            })
          }
          <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div> 
          <div style={{fontSize:14,color:'red'}}>{this.state.error['ORDERED_QUANTY']}</div> 

        </div>
       
      </div>
      </Modal.Body>
      <Modal.Footer>
      <div>
          <button type="submit">Submit</button>
        </div>
      </Modal.Footer>
     </Modal>
      </div>

      
    )
  }
}

export default PoCreate
  
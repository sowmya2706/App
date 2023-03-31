import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Service from './Po_Service';
import Select from 'react-select';
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
              document.getElementById("form").reset();
              document.getElementById("order_no").value="";
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
       
          [e.target.name]:e.target.value
      })
      if(document.getElementById("itemcheckbox_iswrapper").children[0].children[0]!=undefined)
      {
      console.log("dfwgeherg",)
      document.getElementById("itemcheckbox_iswrapper").children[0].children[0].setAttribute('checked','false')
      }
      
       Service.getitem(supplierpo,storepo).then(res=>{
        console.log("itemget response",res);
       
        this.setState({item_values:res})
       //this.state.item_values=res
        console.log("length is",this.state.item_values.length)
        
       
        })
        //e.target.checked=false;
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
      <div>
        <div>

     
        <form  id="form" onSubmit={this.handleSubmit} >
          <div><center>PO Creation</center></div>

          <hr></hr>
            <div>
            <label>Order number</label>
            <input type="number" id='order_no'name='ORDER_NO' onChange={this.handleForm} value={this.state.ORDER_NO}/> *
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['ORDER_NO']}</div> 
            <br/>
            <div>
            <label>Store</label>

               <select name='STORE' id='store' onChange={this.handleForm} required> 
 
                {this.state.store_values.map((store_values,i)=>

               {return <option>{store_values.STORE} </option>})} 
                              <option>Select</option>
                              
                </select>
                
           
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['STORE']}</div> 
            <br/>

            <div>
             <label>Supplier</label>

               <select name='SUPPLIER' id='supplier' onChange={this.itemget} onInput={this.handleForm} > 
                {this.state.supplier_values.map((supplier_values,i)=>
 {return <option  >{supplier_values.SUPPLIER}</option>})} 
                               <option>Select</option>
                               
                </select>

            
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['SUPPLIER']}</div> 
            <br/>
          
            <div>
              <label>ITEM</label>
              <div id="itemcheckbox_iswrapper">
                 {
                               
                 
                this.state.item_values.map((item,ind)=>
                  {
                    
                   return (
                   <div key={ind}>
                  
                    <input type="checkbox" id={item} name='ITEM'   onChange={this.handleForm} onClick={(e)=>{this.myfunc(e,ind)}}/>{item.ITEM}
                    
                  <div>  <label>Ordered Quantity</label> </div><input type="number" name='ORDERED_QUANTY' id={ind}  onChange={this.handleForm} onKeyDown={(e)=>{this.saveQuantity(e,item)}} style={{"display":"none"}} />
                  {/* <div>  <label>Ordered Quantity</label> </div><input type="number" name='ORDERED_QUANTY' id={ind}  onChange={this.handleForm} onInput={(e)=>{this.saveQuantity(e,item)}} style={{"display":"none"}} /> */}
                  </div>
                 
                  //onKeyDown={(e)=>{this.saveQuantity(e)}}
                  )
                    
                  }

                )} 
                 <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div> 
                 <div style={{fontSize:14,color:'red'}}>{this.state.error['ORDERED_QUANTY']}</div> 

              </div>

            
  </div>
  <br/>

        
            <div>
            <label>Terms</label>
            <input type="text" name="TERMS"  onChange={this.handleForm} /> *
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['TERMS']}</div> 
            <br/>
            <div>
            <label>Freight Terms</label>
            <input type="text" name="FREIGHT_TERMS"  onChange={this.handleForm} /> 
            </div>
            <br/>
          
            <div>
            <label>Create UserID</label>
            <input type="text" name="CREATE_USERID" value={window.sessionStorage.getItem("name")} onChange={this.handleForm} /> 
            </div>
            <br/>
            <div>
            <label>Comments</label>
            <input type="text" name="COMMENTS"  onChange={this.handleForm} /> 
            </div>
            <br/>
            <div className='submit'>
         <button type="submit" onClick={this.reset}>SUBMIT</button>
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

export default PoCreate
  
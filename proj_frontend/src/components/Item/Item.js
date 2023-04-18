import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Service from '../Item/Service';
import "./Item_style.css"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../Nav.js"


 class Item extends React.Component {
    constructor(props){
        super(props)
        this.state={
ITEM :'',                                
STATUS :'',                     
ITEM_DESCRIPTION :'',        
PRICE:'',          
STANDARD_UOM :'',                
MERCHANDISE_IND :'',               
FORECAST_IND:'',                          
SELLABLE_IND:'',               
ORDERABLE_IND:'',                   
COMMENTS :'',                        
INVENTORY_IND :'',               
UNIT_COST:'',                  
CURR_SELLING_UNIT_RETAIL:0,          
CREATE_ID:'',                 
CREATE_DATETIME :'',                   
LAST_UPDATE_ID:'',            
LAST_UPDATE_DATETIME:'' ,
SUPPLIER:'',
data_value:[],
supplier_values:[],
navigate:false,
error:{}, 
user:[],

        }
        // this.handleSubmit=this.handleSubmit.bind(this)
    }
    
 
    handleForm=(event)=>{
        console.log(event.target.value)
        this.state.error[event.target.name]=" "
        this.setState({
            [event.target.name]:event.target.value
        })
        
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
    componentDidMount(){
      Service.getsupplier().then(res=>{
          console.log(res.data);
        this.setState({supplier_values:res.data})
      
       })
      }
     
    handleSubmit=(e)=>{
      
        e.preventDefault();

         this.state.user={
            ITEM  :this.state.ITEM  ,
            STATUS:'A',
            ITEM_DESCRIPTION:this.state.ITEM_DESCRIPTION,
            SUPPLIER:this.state.SUPPLIER,             
            // STANDARD_UOM :this.state.STANDARD_UOM ,
            MERCHANDISE_IND :'Y' ,
            FORECAST_IND :'Y' ,
            SELLABLE_IND  :'Y' ,
            ORDERABLE_IND :'Y' ,
            COMMENTS  :this.state.COMMENTS  ,
            INVENTORY_IND   :'Y'   ,
            UNIT_COST:this.state.UNIT_COST,

            CREATE_USERNAME:window.sessionStorage.getItem("name")    , 

           PRICE:this.state.PRICE
        }
        const val={
          ITEM  :this.state.ITEM  ,
         
          ITEM_DESCRIPTION:this.state.ITEM_DESCRIPTION,
          SUPPLIER:this.state.SUPPLIER,             
        
          UNIT_COST:this.state.UNIT_COST,



         PRICE:this.state.PRICE
      }
      console.log(this.state.user)
        console.log(val);
        let uplovali=this.validation(val)
        console.log("value for uplovali",uplovali)
           if(uplovali==true)
           {
        Service.upload(this.state.user).then (res=>{
            console.log("response is",res);
            console.log(this.state.user.ITEM)
            if(res!=undefined)
        {
        
         this.setState({
          ITEM:'',
          ITEM_DESCRIPTION:'',
          SUPPLIER:'',             
        
          UNIT_COST:'',



         PRICE:''


         })
          document.getElementById('form').reset();
          document.getElementById('item').value="";
         document.getElementById('itemdes').value="";
        document.getElementById('supplier').value="";
        }

        })
      }
       
      }
      
//  HomeButton() {
//   const navigate = useNavigate();

//  handleClick=(e)=>{
//     navigate("/home");
//   }
    
  render() {
    return (
      <div className='overallitem'>
         <NavBar/>
      <div class="html">
     
    
      <div id="contact-forms">

     <h2 className='h1'>Item Creation</h2>
     <br/>
    
        <form className="form" id="form" onSubmit={this.handleSubmit}>
        
     
         <div>
         <label for ="item">
         <span class="required">Item : *</span>
         <input type="text" name="ITEM" id='item' placeholder='Item name' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
         <div style={{fontSize:18,color:'red'}}>{this.state.error['ITEM']}</div> 
         </label>
         </div>

         
         <div>
        <label  for = "supplier">
          <span class="required">Supplier : *</span>
        <select  name='SUPPLIER' id='supplier' onChange={this.handleForm} > 
 
 {
 this.state.supplier_values.map((supplier_values,i)=>
{
  
  return <option>{supplier_values.SUPPLIER} </option>})} 

               <option>Select</option>
              
 </select>
         
 <div style={{fontSize:14,color:'red'}}>{this.state.error['SUPPLIER']}</div> 
         </label>

         </div>

        
      

         <div>
         <label for="ITEM_DESCRIPTION"> 
         <span class="required">Item Description : </span>
         <input type="text" name="ITEM_DESCRIPTION" id='itemdes' placeholder='about the item' onChange={this.handleForm}/>
         <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM_DESCRIPTION']}</div> 
         </label>
         </div>

       

         <div>
         <label for="comments">
          <span class="required">Comments : </span>
         <input type="text" name="COMMENTS"  placeholder=''onChange={this.handleForm}/>
         </label>
         </div>

     
         <div>
         <label for="unitcost">
          <span class="required">Unit Cost :* </span>
         <input type="text" name="UNIT_COST" id='unitcost' placeholder='' onChange={this.handleForm} />
         <div style={{fontSize:14,color:'red'}}>{this.state.error['UNIT_COST']}</div> 
        
         </label>
         </div>

         <div>
         <label for="price">
          <span class="required">Price : * </span>
         <input type="text" name="PRICE" id='price' placeholder=''onChange={this.handleForm} />
         <div style={{fontSize:14,color:'red'}}>{this.state.error['PRICE']}</div> 
         
         </label>
         </div>

         
 
         <div>
         <label for="create id">
          <span class="required">Created Username: </span>
         <input type="text" name="CREATE_USERNAME"  value={window.sessionStorage.getItem("name")}placeholder=''onChange={this.handleForm}/>
         </label>
         </div>
 
  
      
         <div >
         <button className='submits-item'>SUBMIT</button>
         
         </div>
         


    
    
       </form>
       </div>
         </div>
         </div>
        
     
    )
  }
 }

export default Item
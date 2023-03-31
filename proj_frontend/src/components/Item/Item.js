import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Service from '../Item/Service';
import "./Item_style.css"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import AnchorLink from 'react-anchor-link-smooth-scroll'
 class Item extends Component {
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
navigate:false,
error:{}, 
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
        console.log(user);
        Service.upload(user).then (res=>{
          
            console.log("response is",res);

        })
       
      }
      
//  HomeButton() {
//   const navigate = useNavigate();

//  handleClick=(e)=>{
//     navigate("/home");
//   }
    
  render() {
    return (
      <div class="html">
      <div id="contact-forms">
        <div className='h1'>
     <h1 >Item Creation</h1>
     </div>
    
       
    
        <form className="form" onSubmit={this.handleSubmit}>
        
     
         <div>
         <label for ="item">
         <span class="required">Item : *</span>
         <input type="text" name="ITEM" placeholder='Item name' onChange={this.handleForm} required/> 
         </label>
         </div>
         
         <div>
        <label for = "supplier">
          <span class="required">Supplier : *</span>
         <input type="text" name="SUPPLIER"  placeholder='supplier id' onChange={this.handleForm} required/>
         </label>
         </div>
        
         {/* <div>
          <label for="status">
         <span class="required">Status : *</span>
         <input type="text" name="STATUS"  placeholder='withdrawn ' onChange={this.handleForm}/>
        </label>
         </div> */}

         <div>
         <label for="ITEM_DESCRIPTION"> 
         <span class="required">Item Description : </span>
         <input type="text" name="ITEM_DESCRIPTION" placeholder='about the item' onChange={this.handleForm}/>
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
         <input type="text" name="UNIT_COST"  placeholder='' onChange={this.handleForm} required/>
         </label>
         </div>
        
         <div>
         <label for="price">
          <span class="required">Price : * </span>
         <input type="text" name="PRICE"  placeholder=''onChange={this.handleForm} required/>
         </label>
         </div>
         
         
 
         <div>
         <label for="create id">
          <span class="required">Created Username: </span>
         <input type="text" name="CREATE_USERNAME"  value={window.sessionStorage.getItem("name")}placeholder=''onChange={this.handleForm}/>
         </label>
         </div>
 
  
      
         <div className='submits'>
         <button type="submit">SUBMIT</button>
         <Link className='btn-Link'to='/home'>
            BACK
                        </Link>
         </div>
         

         {/* <button onclick="return confirm('Are you sure you want to delete?');"/ > */}
         {/* <button className='btn' > */}
            
                        
               
    {/* </button>
   */} 
{/* <Link to={'/home'} onClick={() => {if(window.confirm('Are you sure to go back to home?')){this.click()};}}> <i className="material-icons">Back to home</i> </Link> */}
      
        
         {/* { this.deleteHandler(item.id)};
    */} 
   
    
    
    
       </form>
         </div>
      </div>
     
    )
  }
 }

export default Item
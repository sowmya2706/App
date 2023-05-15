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
dept_val:[],
class_val:[],
subclass_val:[],

        }
        // this.handleSubmit=this.handleSubmit.bind(this)
    }
    reset=()=>{
    //  window.location.reload(false);
      document.getElementById('form').reset();
      document.getElementById('item').value="";
     document.getElementById('itemdes').value="";
    // document.getElementById('supplier').selectedIndex=0;
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
         this.timer=setInterval(()=>{
        this.setState({supplier_values:res.data})},1000);
        Service.getdeptval().then(res=>{
          console.log(res.data);
        this.timer=setInterval(()=>{
  
        
          
        this.setState({dept_val:res.data})},3000);
      
      
       })
       })
      
     
      }
      componentWillUnmount(){
        clearInterval(this.timer)
      }
      
      classget=(e)=>{
        console.log(e.target.value)
        var dept=e.target.value;
        Service.getclass(dept).then (res=>{
          console.log("class response is",res)
          this.setState({class_val:res})
           console.log("class values are placed");
        })
      }
      subclassget=(e)=>{
        console.log(e.target.value)
        var classno=e.target.value;
        Service.getsubclass(classno).then (res=>{
          console.log("class response is",res)
          this.setState({subclass_val:res})
           console.log("class values are placed");
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
            DEPARTMENT:this.state.DEPARTMENT,
            classde:this.state.classde,
            subclassde:this.state.subclassde,

            CREATE_USERNAME:window.sessionStorage.getItem("name")    , 

          //  PRICE:this.state.PRICE
        }
        const val={
          ITEM  :this.state.ITEM  ,
         
          ITEM_DESCRIPTION:this.state.ITEM_DESCRIPTION,
          SUPPLIER:this.state.SUPPLIER,             
        
          UNIT_COST:this.state.UNIT_COST,



        //  PRICE:this.state.PRICE
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
        document.getElementById('department').value="";
        document.getElementById('classde').value='';
        document.getElementById('subclassde').value='';
        }

        })
      }
       
      }

    
  render() {
    return (
      <div className='overallitem'>
         <NavBar/>
      <div class="html">
     
    
      <div id="contact-forms">

     <h3 className='h3'><center>Item Creation</center></h3>
     <br/>
    
        <form className="form" id="form" onSubmit={this.handleSubmit}>
        
     
         <div>
         <label for ="item">
         <span class="required">Item : </span>
         <input type="text" name="ITEM" id='item' className="iteminput" placeholder='Item name' onChange={this.handleForm} invalid={this.state.ITEM===""} valid={this.state.ITEM!==undefined}/> 
         <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div> 
         </label>
         </div>

         
         <div>
        <label  for = "supplier">
          <span class="required">Supplier : </span>
        <select  name='SUPPLIER' id='supplier'className="iteminput" onChange={this.handleForm} > 
        <option>Select</option>
        
 {
  

 this.state.supplier_values.length>0?
 this.state.supplier_values.map(supplier_values=>{
  
  return <option>
    {supplier_values.SUPPLIER}
     </option>
     }):null}

      
              
 </select>
         
 <div style={{fontSize:14,color:'red'}}>{this.state.error['SUPPLIER']}</div> 
         </label>

         </div>

          <div>
        <label for = "dept">
          
          <span class="required">Department : </span>
        <select  name='DEPARTMENT' id='department' className="iteminput" onInput={this.handleForm} onChange={this.classget} defaultValue={{ label: "Select Dept", value: "Select" }}> 
        <option>Select</option>
 {
 this.state.dept_val.length>0?
 this.state.dept_val.map(dept_val=>
{
  
  return <option  >{dept_val.DEP_NO} </option>}):null} 

               
              
 </select>
         </label></div>
      
         <div>
        <label  for = "class">
          <span class="required">Class : </span>
        <select name='classde' id='classde' className="iteminput" onInput={this.handleForm} onChange={this.subclassget}> 
        <option>Select</option>
 {

 this.state.class_val?.map((class_value,i)=>
{
  //console.log(this.state.class_val)
  return <option > {class_value.CLASS_NO} </option>})} 

             
              
 </select>
         </label></div> 
      
         <div>
        <label  for = "subclass">
          <span class="required">Sub Class : </span>
        <select  name='subclassde' id='subclassde' className="iteminput" onInput={this.handleForm} > 
        <option>Select</option>
 {

 this.state.subclass_val?.map((subclass_value,i)=>
{
  
 // console.log(this.state.subclass_val)
  return <option defaultValue={this.subclass_value || 'Select'}>{subclass_value.SUB_CLASS_NO} </option>})} 

              
              
 </select>
         </label></div> 
      

         <div>
         <label for="ITEM_DESCRIPTION"> 
         <span class="required">Item Description : </span>
         <input type="text" name="ITEM_DESCRIPTION" id='itemdes' className="iteminput" placeholder='about the item' onChange={this.handleForm}/>
         <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM_DESCRIPTION']}</div> 
         </label>
         </div>

       

         <div>
         <label for="comments">
          <span class="required">Comments : </span>
         <input type="text" name="COMMENTS" className="iteminput" placeholder=''onChange={this.handleForm}/>
         </label>
         </div>

     
          <div>
         <label for="unitcost">
          <span class="required">Unit Cost :* </span>
         <input type="text" name="UNIT_COST" className="iteminput" id='unitcost' placeholder='' onChange={this.handleForm} />
         <div style={{fontSize:14,color:'red'}}>{this.state.error['UNIT_COST']}</div> 
        
         </label>
         </div>


         
 
         <div>
         <label for="create id">
          <span class="required">Created Username: </span>
         <input type="text" name="CREATE_USERNAME" className="iteminput" value={window.sessionStorage.getItem("name")}placeholder=''onChange={this.handleForm}/>
         </label>
         </div>
 
  
      
         <div >
         <button className='submits-item-item'>SUBMIT</button>
         <button className='submits-item-c-item' type="reset"onClick={this.reset}>CLEAR</button>
         {/* <button className='submits-item-c' type="reset" value="Reset">CLEAR</button> */}
         
         </div>
         


    
    
       </form>
      
       </div>
         </div>
         </div>
        
     
    )
  }
 }

export default Item
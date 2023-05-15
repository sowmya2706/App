import React, { Component } from 'react'
import Service from './Service';
import NavBar from '../Nav.js';
import Modal from 'react-bootstrap/Modal';
import './Salescreate.css';
class Sales_create extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        store_values:[],
        item_values:[],
        order_values:[],
      ans:0,
      overall_price:0,
      ans_bool:false,
      error:{},
      modal:false,
      

         
      }
    }
    modalsubmit=(e)=>{
      this.setState({
        order_values:this.state.order_values,
        overall_price:this.state.overall_price
     })
     const val={
      ITEM:this.state.order_values, 
      //ORDERED_QUANTY:this.state.order_values, 
    }
     let uplovali=this.validation(val)
     console.log(e.value)
    console.log(this.state.order_values)
    this.toggle();
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
          errormsg[key]="enter correct info";
          
          re=false;
        }
      })

      this.setState({
        error:errormsg
      })
      return re;
    }
    toggle(){
      console.log("Toggling")
      this.setState({
        modal:!(this.state.modal),
      })
    }
    itemget=(e)=>{
        
       console.log("target is",e.target.value);
       this.setState({
        modal:!(this.state.modal),
          [e.target.name]:e.target.value
      })
       Service.getitem(e.target.value).then(res=>{
        console.log("itemget response",res);
        
        this.setState({
          item_values:res})
       //this.state.item_values=res
       // console.log(this.state.item_values.length)
       
        })
      }
      suma()
      {
        var final_ans=0;
        for(var i=0;i<this.state.item_values.length;i++)
        {
          
if(this.state.item_values[i].total!=undefined)  
{
  console.log(this.state.item_values[i].total," ",typeof(this.state.item_values[i].total))
  final_ans=final_ans+this.state.item_values[i].total;
console.log("inside for",final_ans); 
}     

      }
         console.log("final ans",final_ans)
         this.setState({
          overall_price:final_ans,
         })
      }

      myfunc=(e,id)=>{
      
        if(e.target.checked){
          document.getElementById(id).style.display="block";
       }
       else{
        let list=this.state.item_values
        list[id].total=''
        this.setState({
          item_values:list
        })
        console.log(this.state.item_values);
        this.suma()
//         var final_ans=0;
//         for(var i=0;i<this.state.item_values.length;i++)
//         {
          
// if(this.state.item_values[i].total!=undefined)  
// {
//   console.log(this.state.item_values[i].total," ",typeof(this.state.item_values[i].total))
//   final_ans=final_ans+this.state.item_values[i].total;
// console.log("inside for",final_ans); 
// }     

//       }
//          console.log("final ans",final_ans)
//          this.setState({
//           overall_price:final_ans,
//          })
         document.getElementById(id).style.display="none";
       
         
       }
       }
       saveQuantity=(e,item,id)=>{
        
        console.log("Quantity"+e.target.value);
        console.log("item is",item.ITEM)
        console.log("price is",item.PRICE)
       
        var quantity=e.target.value

        var productitem=item.ITEM
        var price=item.PRICE
        
        var list=  this.state.item_values
        console.log("list is",list)
       
       // console.log(sto);
        if(e.key=="Enter")
       {

        console.log("the productitem is",productitem)
        if(quantity<0)
        {
          this.state.error[e.target.name]="the ordered quantity is negative";
          price=0;
        }
        Service.quanty_check(productitem).then(res=>{
         
          if(quantity<=res[0].CLOSING_UNIT)
          {
            console.log("quantity<=res.CLOSING_UNIT")
            list[id].total=quantity*price
      this.setState({item_values:list})
      var total=item.total
      console.log("total price is",item.total)
       

    this.setState({
     order_values: this.state.order_values.concat({"productitem":productitem,"price":price,"quantity":quantity,"total":total})
    })
console.log("order value is",this.state.order_values)
        }
        
        else
        {
          alert("the entered quantity is greater than closing stock")
        }
        var final_ans=0;
        for(var i=0;i<this.state.item_values.length;i++)
        {
          
if(this.state.item_values[i].total!=undefined)  
{
  console.log(this.state.item_values[i].total," ",typeof(this.state.item_values[i].total))
  parseInt(this.state.item_values[i].total)
  console.log("inside if",final_ans)
  final_ans=final_ans+this.state.item_values[i].total;
  console.log("next if",final_ans)
console.log("inside for",final_ans); 
}     

      }
         console.log("final ans",final_ans)
         this.setState({
          overall_price:final_ans,
         })
          })
        }
       
       
       
      // list[id].quantity=quantity; 
      
       
      }
    componentDidMount(){
        Service.getstoreval().then(res=>{
            console.log("suma");
            console.log(res.data);
          this.setState({store_values:res.data})
        
         })
      }
    handleForm=(event)=>{
        console.log(event.target.value)
        this.state.error[event.target.name]=" "
      
        if(event.target.name=="INVOICE_DATE")
        {
          console.log(event.target.value)
          const enterdate = new Date(event.target.value);
          const todaydate = new Date();
          const diffTime = (todaydate - enterdate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
         
          console.log(diffDays + " days");
          var days=diffDays;
          if(days<=0)
          {
          this.state.error[event.target.name]='the entered date is wrong'
          }
          else{
              this.state.error[event.target.name]=''
          }
      }
      this.setState({
          [event.target.name]:event.target.value
      })
        }

      
     
    handleSubmit=(e)=>{
        e.preventDefault();
        const user={     
            INVOICE_NO:this.state.INVOICE_NO,
            INVOICE_DATE:this.state.INVOICE_DATE,
            STORE:this.state.STORE,
            SALES_TYPE:this.state.SALES_TYPE,
            INVENTORY_PRICE:this.state.overall_price,
           
           // TOT_PRICE:this.state.TOT_PRICE,
        }
        
        console.log(user.INVENTORY_PRICE);
        const val={
          INVOICE_NO:this.state.INVOICE_NO,
        ITEM:this.state.order_values,
        
        }
        const sal_inv={
          ITEM:this.state.order_values
        }
        let uplovali=this.validation(user)
        console.log("value for uplovali",uplovali)
           if(uplovali==true)
           {
  
        Service.upload(user).then (res=>{
            //post method insertion
            console.log("value sent to the service",user)
            console.log("response for normal upload is",res);
            if(res!=undefined)
            {
              window.location.reload(false);

            }
        })
        Service.uploadsalesdetail(val).then (res=>{
          //post method insertion
          console.log("value for sales detail sent to the service")
          console.log("response for normal upload is",res);
          if(res!=undefined)
          {
            window.location.reload(false);

          }
      })
      Service.inventory_sales(sal_inv).then(res=>{
        console.log("value sent for inventory is",sal_inv)
      })
      }
    }
  render() {
    return (
        <div className='overallsales'>
            <NavBar/>
            <div className='htmlsales'>
            <div id='contact-form-sales'>
      <h3><center>Sales Creation</center></h3>
      <br/>
      <form id="form" className="formsales"onSubmit={this.handleSubmit}>
      <div>

            <label for="Invoice number">
              <span className="required">Invoice Number</span>
            <input type="text" name='INVOICE_NO' className="salin" onChange={this.handleForm} required/>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['INVOICE_NO']}</div> 
            </label> 
    </div>
    
  
    <div>
            <label for="invoice date">
              <span className="required">Invoice Date</span>
            <input type="date" name='INVOICE_DATE' className="salin"  onChange={this.handleForm} /> 
            <div style={{fontSize:14,color:'red'}}>{this.state.error['INVOICE_DATE']}</div> 
            </label>
    </div>
    <div>
      <label for="overall price">
        <span className="required">Total Amount </span>
    <input type="text" name="INVENTORY_PRICE" className="salin"  value={this.state.overall_price}></input>
    </label>
    </div>

  
    <div>
            <label for="store">
              <span className="required">Store</span>
          
            <select name='STORE' className="salin"  onInput={this.handleForm}onChange={this.itemget}> 
            <option>Select</option>
                {
                
                this.state.store_values.map((store_values,i)=>
               {
                console.log(store_values)
                return   <option> {store_values.STORE} </option>})} 
              
                </select>
                <div style={{fontSize:14,color:'red'}}>{this.state.error['STORE']}</div>  
                </label>
    </div>
 
    <div>
            <label for="salestype">
              <span className="required">Sales Type</span>
            <select name= 'SALES_TYPE' className="salin" onChange={this.handleForm} required > 

            
            <option>Select</option>
                <option value="cash">Cash</option>
                <option value="credit">Credit</option>
            </select> 
            <div style={{fontSize:14,color:'red'}}>{this.state.error['SALES_TYPE']}</div>  
            </label>
    </div>
  
  
    <div>
   <button  className="submits-item-sales">SUBMIT</button>
   <button type="reset" className="submits-item-c-sales">CLEAR</button>
   </div>  
 
   </form>
   </div>
   <Modal show={this.state.modal} onHide={this.toggle.bind(this)}>
      <Modal.Header>ITEMS : <span className="closeBtn" onClick={this.toggle.bind(this)}>X</span></Modal.Header>
      <Modal.Body>
    <div id="checkbox_renderer">
      <div id="itemcheckbox_iswrapper">
   
             
                 {
                
                this.state.item_values.map((item,ind)=>
                
                  {
                   
                   return (
                    
                   <div key={item.ITEM} id="check_wrap">
                    <input type="checkbox" id={item} name='ITEM' className="item_checkbox" onChange={this.handleForm} onClick={(e)=>{this.myfunc(e,ind)}}  />
                    <div id="checkbox_text">{item.ITEM}</div>
                    

                   <input type="number" placeholder="quantity" name='QUANTITY' id={ind}  onChange={this.handleForm} onKeyDown={(e)=>{this.saveQuantity(e,item,ind)}} style={{"display":"none","marginRight":"18px"}}/> 
                   <br/>
                  <input type="text" PLACEHOLDER="Unit price" value={this.state.item_values[ind].total} ></input>
                  <div id="checkbox_text"></div>
                  </div>
                
                  )  
                  }
                )} 
                   <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div> 
    <div style={{fontSize:14,color:'red'}}>{this.state.error['QUANTITY']}</div> 

  
              </div>
              </div>
              </Modal.Body>
      <Modal.Footer>
      <div>
      <label for="overall price">
        <span className="required">Total Amount </span>
    <input type="text" name="INVENTORY_PRICE" value={this.state.overall_price}></input>
    </label>
    </div>
  
      <div>
          <button type="submit" onClick={this.modalsubmit}>Submit</button>
         
        </div>
      </Modal.Footer>
     </Modal>
     </div>   
    </div>
 
  
  
   
   

      
       
    )
  }
}

export default Sales_create
import React, { Component } from 'react'
import Service from './Service';
import NavBar from '../Nav.js'
// import './Storestyle.css'
import './Itemlocstyle.css'
 class Item_loc extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        store_values:[],
        item_values:[{}],
        order_values:[],
        error:{},
        
      }
    }
    handleSubmit=(e)=>{
        e.preventDefault();

        const user={     
STORE:this.state.STORE ,                
ITEM:this.state.order_values,                           
STATUS:this.state.STATUS,                      
  
        }
     
        console.log(user);
        let uplovali=this.validation(user)
        console.log("value for uplovali",uplovali)
           if(uplovali==true)
           {
        Service.uploaditemloc(user).then (res=>{
            //post method insertion
            if(res!=undefined)
            {
              this.setState({
                ITEM:'',
               ORDER_VALUES:'',
                STATUS:'',
                STORE:'',
              })
              document.getElementById("form").reset();
              document.getElementsByName('STATUS').value="";
              document.getElementsByName('ITEM').value="";
              document.getElementsByName('PRICE').value="";
            }
            else{

            }
        })
      }
    }
    handleForm=(event)=>{
      this.state.error[event.target.name]=" "
        console.log(event.target.value)
          this.setState({
            // check:!this.state.check,
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
            errormsg[key]="enter correct info";
            
            re=false;
          }
        })
  
        this.setState({
          error:errormsg
        })
        return re;
      }
      
      itemget=(e)=>{
        console.log("going inside itemget")
        console.log("the target value for store is",e.target.value);
        this.setState({
       
            [e.target.name]:e.target.value
        })
        Service.getitem(e.target.value).then(res=>{
            console.log(res.data);
          this.setState({item_values:res.data})
          
        
         })
      }
      componentDidMount(){
        Service.getstoreval().then(res=>{
            console.log("suma");
            console.log(res.data);
          this.setState({store_values:res.data})
        
         })

         
      }
      myfunc=(e,id)=>{
      console.log(id)
        if(e.target.checked){
         this.setState({item:id})
         document.getElementById(id).style.display="block";
 
       }
       else{
         document.getElementById(id).style.display="none";
       }
       }
      saveQuantity=(e,item)=>{
       
        var productitem=item.ITEM
         var quantity=e.target.value
         console.log(productitem,quantity)
        if(e.key=="Enter")
        {
            console.log("it is working")
         this.setState({
          order_values:this.state.order_values.concat({productitem,quantity})
       
          //order_values:this.state.order_values.concat({id:e.target.value})
       })
       console.log("array",this.state.order_values);
      }

      }
  render() {
    return (
      <div className='overallitemloc'>
        <NavBar/>
        <br/>
        <div className='htmlsitemloc'></div>
      <div id='contact-form-itemloc'>
        <h2><center>Item Location</center></h2>
 
      <form id="form" className='formitemloc' onSubmit={this.handleSubmit}>
      <div>
            <label for='Store'>
              <span class="required">Store :</span>
          
            <select   name='STORE' onInput={this.handleForm} onChange={this.itemget}> 
                {this.state.store_values.map((store_values,i)=>
               {return   <option> {store_values.STORE} </option>})} 
                  <option>Select</option>
                </select>
             
                </label>
    </div>
    <div style={{fontSize:14,color:'red'}}>{this.state.error['STORE']}</div> 

  

    <div>
 
      <span className="required">ITEM</span>
              <div>
                 {
               
                this.state.item_values.map((item,ind)=>
                  {
                    // console.log(item.ITEM)
                   return (
                   <div key={item.ITEM} style={{"display":"flex"}}>
                    <input type="checkbox"  id={item} name='ITEM' placeholder='ITEM'  onClick={(e)=>{this.myfunc(e,ind)}} />{item.ITEM }
                    <input type="number" name='PRICE'  id={ind} placeholder='Price' onKeyDown={(e)=>{this.saveQuantity(e,item)}} style={{"display":"none"}} /> 
                   
                  </div>
                
                  )  
                  }
                )} 
              </div>
              <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div> 
                 <div style={{fontSize:14,color:'red'}}>{this.state.error['PRICE']}</div> 
              <div>
        <label for='status'>
          <span className="required">Status</span>
        <input type="text" id='status'name='STATUS' onChange={this.handleForm} /> 
        </label>
    </div>
    
                 <div style={{fontSize:14,color:'red'}}>{this.state.error['STATUS']}</div> 
            
    </div>
    <button type="submit">SUBMIT</button>
    </form>
      </div>

      </div>
    )
  }
}

export default Item_loc
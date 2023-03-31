import React, { Component } from 'react'
import Service from './Service';
 class Item_loc extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        store_values:[],
        item_values:[{}],
        order_values:[],
        
      }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const user={     
STORE:this.state.STORE ,                
ITEM:this.state.order_values,                           
STATUS:this.state.STATUS,                      
  
        }
        Service.uploaditemloc(user).then (res=>{
            //post method insertion
            console.log(user);

            console.log("response for normal upload is",res);
        })
      }
    handleForm=(event)=>{
        console.log(event.target.value)
          this.setState({
            // check:!this.state.check,
              [event.target.name]:event.target.value
            
          })
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
      
        if(e.target.checked){
         this.setState({item:id})
         document.getElementById(id).style.display="block";
 
       }
       else{
         document.getElementById(id).style.display="none";
       }
       }
      saveQuantity=(e,item)=>{
        console.log("Quantity"+item.ITEM);
        var productitem=item.ITEM
         var quantity=e.target.value
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
        <div>
      <div><center>Item Location</center></div>
      <hr/>
      <form onSubmit={this.handleSubmit}>
      <div>
            <label>Store</label>
            <select   name='STORE'  onChange={this.itemget}> 
                {this.state.store_values.map((store_values,i)=>
               {return   <option> {store_values.STORE} </option>})} 
                </select>
    </div>
    <br/>
    <div>
        <label>Status</label>
        <input type="text" name='STATUS' onChange={this.handleForm}  required/> 
    </div>
    <br/>
    <div>
    <label>ITEM</label>
              <div>
                 {
                this.state.item_values.map((item,ind)=>
                  {
                  
                   return (
                   <div key={ind}>
                    <input type="checkbox" id={item} name='ITEM'   onClick={(e)=>{this.myfunc(e,ind)}} />{item.ITEM}
                     <input type="number" name='PRICE' id={ind}  onKeyDown={(e)=>{this.saveQuantity(e,item)}} style={{"display":"none"}} /> 
                   
                  </div>
                
                  )  
                  }
                )} 
              </div>
    </div>
    <br/>
    <div>
        <button>Submit</button>
    </div>
      </form>
      </div>
    )
  }
}

export default Item_loc
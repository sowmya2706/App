import React, { Component } from 'react'
import Service from './Po_Service';
import { Link } from 'react-router-dom';
 class Po_receive extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         po_number:[],
         item_values:[{}],
         received_values:[],
         orderqua:'',
         error:{}

     

      }
    }
    validation=(user)=>{
       // console.log("val",user.ITEM)
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
    handleForm=(event)=>{
        this.state.error[event.target.name]=" "
      
        console.log("dfvr",event.target.name)
      
        //this.state.error[event.target.name]=" "
        if(event.target.name=="PO_RECEIVE_DATE")
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
        
        console.log(event.target.name,event.target.value)
    }
    handlesubmit=(e)=>{
        e.preventDefault();
        const val={
            PO_RECEIVE_DATE:this.state.PO_RECEIVE_DATE,
            PO_NUMBER:this.state.PO_NUMBER,
            ITEM:this.state.received_values,

        }
        const user={
            ITEM:this.state.received_values,
            PO_NUMBER:this.state.PO_NUMBER,

        }
        const inv={
            ITEM:this.state.received_values,
            STORE:this.state.item_values[0].STORE,
            //item and received quantity is present
            //RECEIVED_QUANTY:this.state.RECEIVED_QUANTY,
           }
              let uplovali=this.validation(val)
      console.log("value for uplovali",uplovali)
         if(uplovali==true)
         {
        Service.uploadreceive(val).then(res=>{
            console.log(res);
        })
        Service.inventory(inv).then(res=>{
            console.log(inv);
           })
    }
       
      
    }
    componentDidMount(){
        Service.getponumber().then(res=>{
           
            this.setState({po_number:res.data});

        })
    }
    itemget=(e)=>{
        console.log("printtt")
       console.log(e.target.value);
       this.setState({
       
          [e.target.name]:e.target.value
      })
       Service.getitemporeceive(e.target.value).then(res=>{
        console.log("itemgetforpo response",res);
        
        
        this.setState({item_values:res})
       
        console.log(this.state.item_values.length)
       
        })
      }
      myfunc=(e,id)=>{
        if(e.target.checked)
        {
            this.setState({item:id})
            document.getElementById(id).style.display="block";
        }
        else{
            document.getElementById(id).style.display="none";
        }
      }
      saveReceived_Quanty=(e,item)=>{
        console.log("Received Quantity is"+e.target.value);
        var received_quantity=e.target.value
        var received_item=item.ITEM
        console.log("ponumber",this.state.PO_NUMBER)
        var po_num=this.state.PO_NUMBER;
       var  receive_check={received_qunatity:received_quantity,received_item:received_item,po_number:po_num};
        if(e.key=="Enter")
        {
            //api -> order quantity from po detail 
            console.log("enter is pressed")
            Service.receivecheck(receive_check).then(res=>{
                console.log("response from frontend",res.ORDERED_QUANTY)
                // orderqua=res;
            console.log("received quantity is and ordered quanty as follows",received_quantity,res);
            
            if(received_quantity<=res.ORDERED_QUANTY)
            {
                console.log("true true")
            this.setState({
                received_values:this.state.received_values.concat({received_item,received_quantity})

            })
            console.log(this.state.received_values);
        }
        else{
            alert("The entered Received Quantity is higher than the Ordered Quantity");
            console.log("pls enter correct value");
        }
            
    })
        }

      }
  render() {
    return (
      <div>
       <form onSubmit={this.handlesubmit}>
        <div>
            <label>PO RECEIVE DATE</label>
            <input type="date" name="PO_RECEIVE_DATE" onChange={this.handleForm}/>*
        </div>
        <div style={{fontSize:14,color:'red'}}>{this.state.error['PO_RECEIVE_DATE']}</div> 
        <br/>
        <div>
            <label>PO NUMBER</label>
            <select name='PO_NUMBER' onInput={this.itemget}  onChange={this.handleForm}required>*
             {this.state.po_number.map((po_number,i)=>
               {return<option> {po_number.ORDER_NO} </option>})} 
               <option>Select</option> 
                </select>
                <div style={{fontSize:14,color:'red'}}>{this.state.error['PO_NUMBER']}</div> 
        </div>
       <br/>
        <div>
            <label>Store</label>
            <input type="text" name="STORE"  onChange={this.handleForm} value={this.state.item_values[0].STORE}></input>
        </div>
      <div style={{fontSize:14,color:'red'}}>{this.state.error['STORE']}</div> 
      <br/>
        <div>
            <label>ITEM</label>
            <div>
                {
                    this.state.item_values.map((item,ind)=>{
                        return(
                            <div key={ind}>
                                <input type="checkbox" id={item} name='ITEM' onChange={this.handleForm} onClick={(e)=>{this.myfunc(e,ind)}}/>{item.ITEM}
                                <div><label>Received Quantity</label></div>
                                <input type="number" name='RECEIVED_QUANTY' id={ind} onChange={this.handleForm} onKeyDown={(e)=>{this.saveReceived_Quanty(e,item)}} style={{"display":"none"}}/>
                                </div>
                        )
                    })
                }
            </div>
            <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div> 
            <div style={{fontSize:14,color:'red'}}>{this.state.error['RECEIVED_QUANTY']}</div> 
        </div>
        <br/>
        <div>
        <button>Submit</button>
        <Link className="btn-link" to='/home'>
            BACK
                        </Link>
        </div>
       </form>
      </div>
    )
  }
}

export default Po_receive
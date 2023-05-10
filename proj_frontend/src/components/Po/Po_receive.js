import React, { Component } from 'react'
import Service from './Po_Service';
import './Po_style.css';
import NavBar from '../Nav.js'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
 class Po_receive extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         po_number:[],
         item_values:[{}],
         received_values:[],
         orderqua:'',
         error:{},
         modal:false,
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

           window.location.reload(false); 
    }
       
      
    }
    modalsubmit=(e)=>{
      this.setState({
        order_values:this.state.order_values
     })
     const val={
      ITEM:this.state.order_values, 
      //ORDERED_QUANTY:this.state.order_values, 
    }
     let uplovali=this.validation(val)
    //  console.log(e.value)
    console.log(this.state.order_values)
    this.toggle();
    }
    componentDidMount(){
        Service.getponumber().then(res=>{
           
            this.setState({po_number:res.data});

        })
    }
    toggle(){
        console.log("Toggling")
        this.setState({
          modal:!(this.state.modal),
        })
      }
      reset=()=>{
        window.location.reload(false)
      }
    itemget=(e)=>{
        console.log("printtt")
       console.log(e.target.value);
       this.setState({
        modal:!(this.state.modal),
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
      <div className='overallpo'>
        <NavBar/>
        <div className='htmlpo'>
        <div id='contact-form-po' >
            <h2><center>PO Receive</center></h2>
       <form id="form" className="formpo" style={{textAlign:'center',display:'block',paddingTop:'40px'}} onSubmit={this.handlesubmit}>
        <div>
          <div>
            <label for="date">
                <span className='required'>PO ReceiveDate</span>
            <input type="date" name="PO_RECEIVE_DATE" className="porin"onChange={this.handleForm}/>
            
       </label>
        </div>
        <div style={{fontSize:14,color:'red'}}>{this.state.error['PO_RECEIVE_DATE']}</div> 
       

        <div>
            <label for="ponumber">
                <span className="required">PO Number</span>
            <select name='PO_NUMBER' onInput={this.itemget} className="porin" onChange={this.handleForm}required>
             {this.state.po_number.map((po_number,i)=>
               {return<option> {po_number.ORDER_NO} </option>})} 
               <option>Select</option> 
                </select>
              
                </label>
               
        </div>
        <div style={{fontSize:14,color:'red'}}>{this.state.error['PO_NUMBER']}</div> 
      
        <div>
            <label for="store">
                <span className="required">Store</span>
            <input type="text" name="STORE" className="porin"  onChange={this.handleForm} value={this.state.item_values[0].STORE}></input>
           
            </label>
        </div>
        <div style={{fontSize:14,color:'red'}}>{this.state.error['STORE']}</div> 
      <div >
        <button className='submits-item-por'>SUBMIT</button>
        <button className='submits-item-c-por' type="reset" onClick={this.reset}>CLEAR</button>
        </div>
        </div>
        </form>
        </div>
        <Modal show={this.state.modal} onHide={this.toggle.bind(this)}>
      <Modal.Header>ITEMS : <span className="closeBtn" onClick={this.toggle.bind(this)}>X</span></Modal.Header>
      <Modal.Body>
       <div id="checkbox_renderer">
            <div id="itemcheckbox_iswrapper">
                {
                    this.state.item_values.map((item,ind)=>{
                        return(
                            <div key={ind} style={{"display":"flex"}}>
                                <input type="checkbox"   className="item_checkbox"id={item} name='ITEM' onChange={this.handleForm} onClick={(e)=>{this.myfunc(e,ind)}}/>
                                <div id="checkbox_text">{item.ITEM}</div>
                                <input type="number" className="item_qty_tf" placeholder='Received quantity'name='RECEIVED_QUANTY' id={ind} onChange={this.handleForm} onKeyDown={(e)=>{this.saveReceived_Quanty(e,item)}} style={{"display":"none"}}/>
                                </div>
                        )
                    })
                }
           
          
            <div style={{fontSize:14,color:'red'}}>{this.state.error['ITEM']}</div> 
            <div style={{fontSize:14,color:'red'}}>{this.state.error['RECEIVED_QUANTY']}</div> 
        </div>
       
      
          </div>
          </Modal.Body>
      <Modal.Footer>
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

export default Po_receive
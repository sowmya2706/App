import React, { Component } from 'react'
import axios from 'axios';
import Service from '../Supplier/Service';
import { Link } from "react-router-dom";
class SupplierView extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
      }
    }
    componentDidMount(){
        Service.get().then(res=>{
            this.setState({data_value:res.data})
           })
          
           
       }
  render() {
    return (
      <div>
        <div><center>Supplier View</center>
        <hr/>
        <br/>
        <table width="100%" border="1">
                <thead>
                    <th>SUPPLIER </th>
                    <th>SUP_NAME </th>
                    <th>CONTACT_NAME </th>
                   
                    <th>CONTACT_PHONE  </th>
                    <th>SUP_STATUS  </th>
                    <th>FREIGHT_TERMS  </th>
                    <th>HANDLING_PCT</th>
                    <th>SHIP_METHOD  </th>
                    <th>PAYMENT_METHOD </th>
                    <th>FREIGHT_CHARGE_IND </th>
                    <th>PREPAY_INVC_IND </th>
                    <th>BACKORDER_IND </th>
                    <th>VAT_REGION </th>
                    <th>COMMENT_DESC </th>
                    
                </thead>
                <tbody>{this.state.data_value.map(value =>{
            return value.map(a=>{
                
                return (<tr>
                     <td>{a.SUPPLIER}</td>
                     <td>{a.SUP_NAME  }</td>
                     <td>{a.CONTACT_NAME }</td>
                     
                     <td>{a.CONTACT_PHONE}</td>
                     <td>{a.SUP_STATUS }</td>
                     <td>{a.FREIGHT_TERMS}</td>
                     <td>{a.HANDLING_PCT}</td>
                     <td>{a.SHIP_METHOD  }</td>
                     <td>{a.PAYMENT_METHOD  }</td>
                     <td>{a.FREIGHT_CHARGE_IND}</td>
                     <td>{a.PREPAY_INVC_IND}</td>
                     <td>{a.BACKORDER_IND}</td>
                     <td>{a.VAT_REGION}</td>
                     <td>{a.COMMENT_DESC}</td>
                    
                 </tr>)
             })
             
          })
        }</tbody>
            </table>
        </div>
        </div>
   
    )
  }
}

export default SupplierView
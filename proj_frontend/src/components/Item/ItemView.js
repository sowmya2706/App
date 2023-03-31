import React, { Component } from 'react'
import axios from 'axios';
import Service from '../Item/Service';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TableView from 'react-table-view'
class ItemView extends Component {
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
             console.log("rendering the ui")
          }
    
  
  
  render() {
    return (
      <div>
        <div><center>Item Details</center></div>
        <hr/>
        <br/>
        <div>
          <table width="100%" border="1">
              <thead>
                  <th>ITEM</th>
                  <th>STATUS  </th>
                  <th>ITEM_DESCRIPTION </th>
                  <th>SUPPLIER</th>
                 
                  <th>FORECAST_IND</th>
                  <th>SELLABLE_IND </th>
                  <th>ORDERABLE_IND  </th>
                  <th>COMMENTS  </th>
                  <th>INVENTORY_IND</th>
                  <th>UNIT_COST </th>

                  {/* <th>CREATE_USERNAME </th> */}
                  <th>CREATE_DATETIME</th>
                  <th>PRICE</th>
              
              </thead>
              <tbody>
             {this.state.data_value.map(value =>{
   return value.map(a=>{
    
    
       return (<tr>
           
            <td>{a.ITEM}</td>
            <td>{a.STATUS  }</td>
            <td>{a.ITEM_DESCRIPTION }</td>
            <td>{a.SUPPLIER}</td>
        
            <td>{a.FORECAST_IND}</td>
            <td>{a.SELLABLE_IND }</td>
            <td>{a.ORDERABLE_IND  }</td>
            <td>{a.COMMENTS  }</td>
            <td>{a.INVENTORY_IND}</td>
            <td>{a.UNIT_COST }</td>
         
            <td>{a.CREATE_USERNAME }</td>
            {/* <td>{a.CREATE_DATETIME}</td> */}
            <td>{a.PRICE }</td>
           
        </tr>)
   })
  })
}
                </tbody>
          </table>
      </div>
      </div>
      
    )
  }
}

export default ItemView
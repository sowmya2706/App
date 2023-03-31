import React, { Component } from 'react'
import axios from 'axios';
import Service from './Po_Service';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
 class Po_details extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
      
      }
    }
    componentDidMount(){
        Service.podetailsget().then(res=>{
            console.log("going inside")
          this.setState({data_value:res.data})
        
         })
         console.log("rendering the ui")
      }

  render() {
    return (
      <div>
        <div><center>Po detail</center></div>
        <hr/>
        <br/>
        <table width="50%" border="1">
              <thead>
                  <th>ITEM</th>
                  <th>ORDER_NO </th>
                  <th>ORDERED_QUANTY</th>
                  <th>RECEIVED_QUANTITY</th>
                  
                  </thead>
                  <tbody>
                 
                  {this.state.data_value.map(value =>{
                   
   
   //return value.map(a=>{
    
    return (<tr>
         
           
        <td>{value.ITEM}</td>
        <td>{value.ORDER_NO}</td>
        <td>{value.ORDERED_QUANTY}</td>
        <td>{value.RECEIVED_QUANTY}</td>
        </tr>)
   })
  }
  
                </tbody>
          </table>
      </div>
   

    )
  }
}

export default Po_details
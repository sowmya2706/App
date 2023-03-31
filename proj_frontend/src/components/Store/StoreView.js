import React, { Component } from 'react'
import axios from 'axios';
import Service from '../Store/Service';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
 class StoreView extends Component {
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
   render(){
      return (
        <div>
          <div><center>Store View</center>
            <table width="13%" border="1">
                <thead>
                    <th>STORE</th>
                    <th>STORE_NAME</th>
                    {/* <th>STORE_OPEN_DATE</th> */}
                    {/* <th>STORE_CLOSE_DATE</th> */}
                    <th>PHONE_NUMBER</th>
                    <th>EMAIL</th>
                    <th>VAT_REGION</th>
                    <th>VAT_INCLUDE_IND</th>
                    <th>STOCKHOLDING_IND</th>
                    <th>AUTO_RCV</th>
                    {/* <th>CREATE_DATETIME</th> */}
                    <th>CREATE_USERNAME</th>
                   
                </thead>
                <tbody>
                {this.state.data_value.map(value =>{
         return value.map(a=>{
             return (<tr>
                  <td>{a.STORE}</td>
                  <td>{a.STORE_NAME}</td>
                  {/* <td>{a.STORE_OPEN_DATE}</td> */}
                  {/* <td>{a.STORE_CLOSE_DATE}</td> */}
                  <td>{a.PHONE_NUMBER}</td>
                  <td>{a.EMAIL}</td>
                  <td>{a.VAT_REGION}</td>
                  <td>{a.VAT_INCLUDE_IND}</td>
                  <td>{a.STOCKHOLDING_IND}</td>
                  <td>{a.AUTO_RCV}</td>
                  {/* <td>{a.CREATE_DATETIME}</td> */}
                  <td>{a.CREATE_USERNAME}</td>
                
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

export default StoreView
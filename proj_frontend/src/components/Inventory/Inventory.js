import React, { Component } from 'react'
import Service from './Service'
import "../Sales/Salestable.css"

import usePagination from '@mui/material/usePagination';

import Pagination from "react-js-pagination";
import NavBar from "../Nav.js"
 class Inventory extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
        currentpage:0,
        pagesize:5,
         
      }
    }
    componentDidMount(){
      Service.inventory_view().then(res=>{
          console.log("calling this func")
          console.log(res.data)
        this.setState({data_value:res.data})
       })
    }
    handlePageChange(e){
      // e.preventDefault()
      let suma=e-1;
      console.log(e)
   this.setState({
    currentpage:suma
   })
   console.log(this.state.currentpage)
    }
    
  render() {
    return (
        <div>
          <NavBar/>
          <br/>
          <br/>
          <div>
            <br/>
          </div>
      <div><h2 className="title"><center>Inventory Detail</center></h2></div>
   
      <br/>
      <div class="cen">
        <table>
              <thead>
                  <th>Item</th>
                  <th>Purchase Unit</th>
                  <th>Purchase Cost</th>
                  <th>Sales Unit</th>
                  <th>Sales Cost</th>
                  <th>Closing Unit</th>
                  <th>Closing Cost</th>
                  <th>Store</th>
                  </thead>
                  <tbody> 

                  { this.state.data_value.map(value =>{
                     console.log("fwf")
                     console.log(value)
console.log(this.state.data_value[0].length)
                    return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
                      
                     return (<tr>
                        <td>{a.ITEM}</td>
                        <td>{a.PURCHASE_UNIT}</td>
                        <td>{a.PURCHASE_COST}</td>
                        <td>{a.SALES_UNIT}</td>
                        <td>{a.SALES_COST}</td>
                        <td>{a.CLOSING_UNIT}</td>
                        <td>{a.CLOSING_COST}</td>
                        <td>{a.STORE}</td>
                       


                        </tr>)
                    })
                   })
                 }
                 
                
                    </tbody>
                    </table>
         </div>
         <Pagination 
          activePage={this.state.currentpage+1}
          itemsCountPerPage={5}
          totalItemsCount={this.state.data_value[0]==undefined?0:this.state.data_value[0].length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
         </div>
    )
  }
}

export default Inventory
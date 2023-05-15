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
        pagesize:7,
        flag:false,
         
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
    getQuery(e){
      let query=e.target.value;
      if(query=='')
      {
        this.setState({
          flag:false,
        })
      }
      else{
      let getres=[]
      console.log(this.state.data_value[0].length)
      for(var i=0;i<this.state.data_value[0].length;i++)
      {
        console.log((this.state.data_value[0][i].ORDER_NO))
        if(this.state.data_value[0][i].ITEM.includes(e.target.value))
        {
          console.log("dfef");
        
         getres.push(this.state.data_value[0][i])
         
         
        }
     
      }
      this.setState({
        results:getres,
        flag:true
      })
      console.log(getres)
     console.log(this.state.results)

    }
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
      <div>
                  Search
                  <input type="text" name="search" placeholder="Search by item"onChange={this.getQuery.bind(this)}/>
                 
                
                 
                </div>
      <div class="cen">
        <table>
              <thead>
                  <th>Item</th>
                  <th>Store</th>
                  <th>Purchase Unit</th>
                  <th>Purchase Cost</th>
                  <th>Sales Unit</th>
                  <th>Sales Cost</th>
                  <th>Closing Unit</th>
                  <th>Closing Cost</th>
                 
                  </thead>
                  <tbody> 

                  {
                                     this.state.flag==true?
                                     this.state.results.map(a =>{
                                      return (<tr>
                                        <td>{a.ITEM}</td>
                                        <td>{a.STORE}</td>
                                        <td>{a.PURCHASE_UNIT}</td>
                                        <td>{a.PURCHASE_COST}</td>
                                        <td>{a.SALES_UNIT}</td>
                                        <td>{a.SALES_COST}</td>
                                        <td>{a.CLOSING_UNIT}</td>
                                        <td>{a.CLOSING_COST}</td>
                                        
                                       
                
                
                                        </tr>)
                                    }):
                                       this.state.data_value.map(value =>{
                     console.log("fwf")
                     console.log(value)
console.log(this.state.data_value[0].length)
                    return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
                      
                     return (<tr>
                        <td>{a.ITEM}</td>
                        <td>{a.STORE}</td>
                        <td>{a.PURCHASE_UNIT}</td>
                        <td>{a.PURCHASE_COST}</td>
                        <td>{a.SALES_UNIT}</td>
                        <td>{a.SALES_COST}</td>
                        <td>{a.CLOSING_UNIT}</td>
                        <td>{a.CLOSING_COST}</td>
                       
                       


                        </tr>)
                    })
                   })
                 }
                 
                
                    </tbody>
                    <Pagination 
          activePage={this.state.currentpage+1}
          itemsCountPerPage={7}
          totalItemsCount={this.state.data_value[0]==undefined?0:this.state.data_value[0].length}
          pageRangeDisplayed={9}
          onChange={this.handlePageChange.bind(this)}
        />
                    </table>
         </div>
         {/* <Pagination 
          activePage={this.state.currentpage+1}
          itemsCountPerPage={7}
          totalItemsCount={this.state.data_value[0]==undefined?0:this.state.data_value[0].length}
          pageRangeDisplayed={9}
          onChange={this.handlePageChange.bind(this)}
        /> */}
         </div>
    )
  }
}

export default Inventory
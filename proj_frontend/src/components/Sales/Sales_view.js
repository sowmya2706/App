import React, { Component } from 'react'
import Service from './Service'
import './Salestable.css'
// import ReactPaginate from 'react-paginate';  

import Pagination from "react-js-pagination";
import NavBar from '../Nav.js'
class Sales_view extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
        results:[],
        currentpage:0,
        pagesize:5,
      } 
    }
    componentDidMount(){
        Service.salesdetails_view().then(res=>{
            console.log("calling this func")
          this.setState({data_value:res.data})
          console.log(this.state.data_value)
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
        console.log(query)
        let getres=[]
        for(var i=0;i<this.state.data_value[0].length;i++)
        {
          if(String(this.state.data_value[0][i].INVOICE_NO).includes(e.target.value))
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
 
  render() {
    return (
        <div>
           <NavBar/> 
           <br/>
           <br/>
           <div>
            <br/>
           </div>
      <div ><h2 class="title"><center>Sales View</center></h2></div>
   
      {console.log("result from backend is",this.state.data_value)}
      <div>
                  Search
                  <input type="text" placeholder="Search by Invoice number"name="search"onChange={this.getQuery.bind(this)}/>
   
                </div>
      <div className="cen">
        <table >
              <thead style={{color:'blue'}}>
                  <th>Invoice Number</th>
                  {/* <th>Invoice Date</th> */}
                  <th>Store</th>
                  <th>Sales type</th>
                  <th>Inventory Price</th>
                  </thead>
                  <tbody>  
                 {
                 this.state.flag==true?
                 this.state.results.map(a =>{
                  return (<tr>
                    <td>{a.INVOICE_NO}</td>
                    {/* <td>{a.INVOICE_DATE}</td> */}
                    <td>{a.STORE}</td>
                    <td>{a.SALES_TYPE}</td>
                    <td>{a.INVENTORY_PRICE}</td>
                    </tr>)
                }):
                 this.state.data_value.map(value =>{
                    return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
    
                     return (<tr>
                        <td>{a.INVOICE_NO}</td>
                        {/* <td>{a.INVOICE_DATE}</td> */}
                        <td>{a.STORE}</td>
                        <td>{a.SALES_TYPE}</td>
                        <td>{a.INVENTORY_PRICE}</td>
                        </tr>)
                    })
                   })
                  }
                                  
                                </tbody>
                                {/* <ReactPaginate count={11} defaultPage={6} siblingCount={0} /> */}
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

export default Sales_view
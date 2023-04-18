import React, { Component } from 'react'
import '../Sales/Salestable.css'
import Service from '../Item/Service';
import NavBar from '../Nav.js'
import "../Sales/Salestable.css"
import Pagination from "react-js-pagination";


class ItemView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     
      data_value:[],
      currentpage:0,
      pagesize:5,
      
     
              }
          }
          handlePageChange(pageNumber) {
            console.log(`active page is ${pageNumber}`);
            this.setState({activePage: pageNumber});
          }

          componentDidMount(){
            Service.get().then(res=>{
              this.setState({data_value:res.data})
            
             })
             console.log("rendering the ui",this.state.data_value)
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
        <div><h2 className="title"><center>Item Details</center></h2></div>
   

       
        <div className='cen'>
          <table>
              <thead>
                  <th>ITEM</th>
                  <th>STATUS  </th>
                  <th>ITEM_DESCRIPTION </th>
                  <th>SUPPLIER</th>
                  <th>FORECAST_IND</th>
                  <th>SELLABLE_IND </th>
                  <th>ORDERABLE_IND  </th>
                  <th>INVENTORY_IND</th>
                  <th>UNIT_COST </th>
                  {/* <th>CREATE_USERNAME </th> */}
                  <th>CREATE_DATETIME</th>
                  <th>PRICE</th>
              
              </thead>
              <tbody>
             {this.state.data_value.map(value =>{
   return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
    
    
       return (<tr>
           
            <td>{a.ITEM}</td>
            <td>{a.STATUS  }</td>
            <td>{a.ITEM_DESCRIPTION }</td>
            <td>{a.SUPPLIER}</td>
        
            <td>{a.FORECAST_IND}</td>
            <td>{a.SELLABLE_IND }</td>
            <td>{a.ORDERABLE_IND  }</td>

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
      <Pagination
          activePage={this.state.activePage+1}
          itemsCountPerPage={5}
          totalItemsCount={this.state.data_value[0]==undefined?0:this.state.data_value[0].length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
      
    )
  }
}

export default ItemView
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
      results:[],
      currentpage:0,
      pagesize:5,
      error:{}, 
      flag:false,
      
     
              }
          }
          // handlePageChange(pageNumber) {
          //   console.log(`active page is ${pageNumber}`);
          //   this.setState({activePage: pageNumber});
          // }

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
        
          getQuery(e){
            let query=e.target.value;
            console.log(query)

            console.log(this.state.data_value[0].length)
            let getres=[]
            for(var i=0;i<this.state.data_value[0].length;i++)
            {
              if(this.state.data_value[0][i].ITEM.includes(e.target.value))
              {
                console.log("dfef");
              //  console.log(this.state.data_value[0][i])
               // this.state.results=[this.state.data_value[0][i]];
               getres.push(this.state.data_value[0][i])
               // console.log([this.state.results])
               
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
        <div><h2 className="title"><center>Item Details</center></h2></div>
   <div>
                  Search
                  <input type="text" placeholder="Search by item" name="search"onChange={this.getQuery.bind(this)}/>
                 
                
                 
                </div>
                {/* <div className="results">
          {
           
            this.state.results? this.state.results.map((value)=>{

              console.log(value.ITEM)
              return(
              
              <div>{value.ITEM}</div>
              )
            }):null
          }
          
          


        </div> */}

       
        <div className='cen'>

          <table>
          
              <thead>
             
                
                
                  <th>Item</th>
                  <th>Status </th>
                  <th>Item Description </th>
                  <th>Supplier</th>
                  <th>Forecast_IND</th>
                  <th>Sellable_IND </th>
                  <th>Orderable_IND  </th>
                  <th>Inventory_IND</th>
                  <th>Unit Cost</th>
                  {/* <th>CREATE_USERNAME </th> */}
                  <th>Department</th>
                  <th>Class</th>
                  <th>SubClass</th>
                  <th>Date</th>
                  {/* <th>Price</th> */}
              
              </thead>
              <tbody>
                
             
              
              {
                this.state.flag==true?
                this.state.results.map(a =>{
                  // return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
                   
                   
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
                           <td>{a.DEPARTMENT}</td>
                           <td>{a.CLASS}</td>
                           <td>{a.SUBCLASS}</td>
                        
                           <td>{a.CREATE_USERNAME }</td>
                           {/* <td>{a.CREATE_DATETIME}</td> */}
                           {/* <td>{a.PRICE }</td> */}
                          
                       </tr>)
                 
                  // })
                 
                 }):
              
             this.state.data_value.map(value =>{
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
            <td>{a.DEPARTMENT}</td>
            <td>{a.CLASS}</td>
            <td>{a.SUBCLASS}</td>
         
            <td>{a.CREATE_USERNAME }</td>
            {/* <td>{a.CREATE_DATETIME}</td> */}
            {/* <td>{a.PRICE }</td> */}
           
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
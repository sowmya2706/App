import React, { Component } from 'react'
import NavBar from "../Nav.js"
import Service from '../Store/Service';
import "../Sales/Salestable.css"
// import App from "../App.js"
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
 class StoreView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data_value:[],
       currentpage:0,
       pagesize:10,
    }
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
  
  componentDidMount(){
    Service.get().then(res=>{
      this.setState({data_value:res.data})
     })
    }
   render(){
      return (
        <div>
          <NavBar/>
          <br/>
          <br/>
          <div><h2 className='title'><center>Store View</center></h2></div>
          <div className='cen'>
            <table>
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
         return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
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
                <div><Pagination 
          activePage={this.state.activePage+1}
          itemsCountPerPage={10} 
          totalItemsCount={this.state.data_value==undefined?0:this.state.data_value.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
        </div>
           
        
        </div>
    )
  }
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default StoreView
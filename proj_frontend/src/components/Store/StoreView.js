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
       results:[],
       flag:false,
       currentpage:0,
       pagesize:5,
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
    Service.getstoreview().then(res=>{
      this.setState({data_value:res.data})
     })
     console.log(this.state.res)
     console.log(this.state.data_value)
    }
    getQuery(e){
      let query=e.target.value;
      console.log(query)
      console.log(this.state.data_value[0].length)
      if(query=='')
            {
              this.setState({
                flag:false,
              })
            }
            else{
      let getres=[]
      for(var i=0;i<this.state.data_value[0].length;i++)
      {
        console.log(this.state.data_value[0][i].STORE)
        if(String(this.state.data_value[0][i].STORE).includes(e.target.value))
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
   render(){
      return (
        <div>
          <NavBar/>
          <br/>
          <br/>
          <div><h2 className='title'><center>Store View</center></h2></div>
          <div>
                  Search
                  <input type="text" placeholder="Search by Store"name="search"onChange={this.getQuery.bind(this)}/>
                
                
                 
                </div>
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
                {
                this.state.flag==true?
                this.state.results.map(a =>{
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
            }):
                this.state.data_value.map(value =>{
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
              
        
        <div>
            <Pagination 
          activePage={this.state.currentpage+1}
          itemsCountPerPage={5}
          totalItemsCount={this.state.data_value[0]==undefined?0:this.state.data_value[0].length}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange.bind(this)}/>
           
        
        </div>
        </div>
    )
  }
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default StoreView
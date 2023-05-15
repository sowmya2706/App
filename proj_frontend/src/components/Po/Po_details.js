import React, { Component } from 'react'
import "../Sales/Salestable.css"
import Service from './Po_Service';
import Pagination from "react-js-pagination";
import NavBar from '../Nav.js'
 class Po_details extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
        currentpage:0,
        pagesize:5,
        results:[],
        flag:false,
      
      }
    }
    componentDidMount(){
        Service.podetailsget().then(res=>{
            console.log("going inside")
            console.log(typeof(res.data))
          this.setState({data_value:res.data})
          console.log(this.state.data_value)
        
         })
         console.log("rendering the ui")
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
          console.log(String(this.state.data_value[0][i].ORDER_NO))
          if(String(this.state.data_value[0][i].ORDER_NO).includes(e.target.value))
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
     
        <div className="title"><center>Po detail</center></div>
       
        <br/>
        <div>
                  Search
                  <input type="text" placeholder="Search by Order number"name="search"onChange={this.getQuery.bind(this)}/>
                 
                
                 
                </div>
        <div className='cen'>
        <table>
              <thead >
                  <th>ITEM</th>
                  <th>ORDER_NO </th>
                  <th>ORDERED_QUANTY</th>
                  <th>RECEIVED_QUANTITY</th>
                  
                  </thead>
                  <tbody >
                 
                  {
                   this.state.flag==true?
                   this.state.results.map(a =>{
                    return (<tr> 
                      <td>{a.ITEM}</td>
                      <td>{a.ORDER_NO}</td>
                      <td>{a.ORDERED_QUANTY}</td>
                      <td>{a.RECEIVED_QUANTY}</td>
                      </tr>)
                                 } ):
                  this.state.data_value.map(value =>{
                    console.log(value)
                   return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
                    
    return (<tr> 
        

        <td>{a.ITEM}</td>
        <td>{a.ORDER_NO}</td>
        <td>{a.ORDERED_QUANTY}</td>
        <td>{a.RECEIVED_QUANTY}</td>
        </tr>)
                   } )
  })
}
  
                </tbody>
          </table>
      </div>
      
      <Pagination 
          activePage={this.state.currentpage+1}
          itemsCountPerPage={5}
          totalItemsCount={this.state.data_value[0]==undefined?0:this.state.data_value[0].length}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange.bind(this)}/>
      </div>

    )
  }
}

export default Po_details
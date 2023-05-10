import React, { Component } from 'react'
import Pagination from "react-js-pagination"
import NavBar from '../../Nav.js';
import Service from './Service.js';
 class SubView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data_value:[],
      currentpage:0,
      pagesize:5,
      flag:false,
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
    Service.getsubclass().then(res=>{
      console.log("inside get method",res.data)
      this.setState({data_value:res.data})
    
     })
     console.log("rendering the ui",this.state.data_value)
  }
  getQuery(e){
    let query=e.target.value;
  
    let getres=[]
    console.log(this.state.data_value[0].length)
    for(var i=0;i<this.state.data_value[0].length;i++)
    {
      console.log(String(this.state.data_value[0][i].SUB_CLASS_NO))
      if(String(this.state.data_value[0][i].SUB_CLASS_NO).includes(e.target.value))
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
     <div><h2 className="title"><center>Sub Class Details</center></h2></div>
     <div>
                  Search
                  <input type="text" placeholder="Search by SubClassNo" name="search"onChange={this.getQuery.bind(this)}/>
                 
                
                 
                </div>
     <div className='cen'>
       <table>
           <thead>
               <th>Sub Class ID</th>
               <th>Sub Class Name</th>
               <th>Class</th>
           </thead>
           <tbody>
            
          {
           this.state.flag==true?
           this.state.results.map(a =>{
            return (<tr>
      
              <td>{a.SUB_CLASS_NO}</td>
              <td>{a.SUB_CLASS_NAME}</td>
              <td>{a.CLASS_NO}</td>
              
             
          </tr>)
     }):
            this.state.data_value.map(value =>{
            console.log(this.state.data_value)
return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>
  
  {
 console.log(a)
 
    return (<tr>
      
         <td>{a.SUB_CLASS_NO}</td>
         <td>{a.SUB_CLASS_NAME}</td>
         <td>{a.CLASS_NO}</td>
         
        
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


export default SubView
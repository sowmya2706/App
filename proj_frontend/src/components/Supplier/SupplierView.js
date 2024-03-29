import React, { Component } from 'react'
import axios from 'axios';
import Service from '../Supplier/Service';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import NavBar from "../Nav.js"
import "../Sales/Salestable.css"
class SupplierView extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
        results:[],
        currentpage:0,
        pagesize:5,
        flag:false,
      }
    }
    componentDidMount(){
        Service.get().then(res=>{
            this.setState({data_value:res.data})
           })
           console.log(this.state.data_value)
          
           
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
        if(query=='')
            {
              this.setState({
                flag:false,
              })
            }
            else
            {
        let getres=[]
        for(var i=0;i<this.state.data_value[0].length;i++)
        {
          if(this.state.data_value[0][i].SUPPLIER.includes(e.target.value))
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
    }
  render() {
    return (
      <div>
        <NavBar/>
        <br/>
        <br/>
        
        <div><h2 className='title'><center>Supplier View</center></h2></div>
        <div>
                  Search
                  <input type="text" placeholder="Search by Supplier" name="search"onChange={this.getQuery.bind(this)}/>
                 
                
                 
                </div>
       
        <div className='cen'>
        <table>
                <thead>
                    <th>SUPPLIER </th>
                    <th>SUP_NAME </th>
                    <th>CONTACT_NAME </th>
                    <th>CONTACT_PHONE  </th>
                    <th>SUP_STATUS  </th>
                    <th>FREIGHT_TERMS  </th>
                    <th>PAYMENT_METHOD </th>
                    <th>FREIGHT_CHARGE_IND </th>
                    <th>PREPAY_INVC_IND </th>
                    <th>BACKORDER_IND </th>
                    <th>VAT_REGION </th>
                  
                    
                </thead>
                <tbody>
                {
                this.state.flag==true?
                this.state.results.map(a =>{
                  return (<tr>
                    <td>{a.SUPPLIER}</td>
                    <td>{a.SUP_NAME  }</td>
                    <td>{a.CONTACT_NAME }</td>
                    <td>{a.CONTACT_PHONE}</td>
                    <td>{a.SUP_STATUS }</td>
                    <td>{a.FREIGHT_TERMS}</td>
                    <td>{a.PAYMENT_METHOD  }</td>
                    <td>{a.FREIGHT_CHARGE_IND}</td>
                    <td>{a.PREPAY_INVC_IND}</td>
                    <td>{a.BACKORDER_IND}</td>
                    <td>{a.VAT_REGION}</td>
                </tr>)
            }):
                this.state.data_value.map(value =>{
                
            return value.slice(this.state.currentpage*this.state.pagesize,(this.state.currentpage+1)*this.state.pagesize).map(a=>{
                
                return (<tr>
                     <td>{a.SUPPLIER}</td>
                     <td>{a.SUP_NAME  }</td>
                     <td>{a.CONTACT_NAME }</td>
                     <td>{a.CONTACT_PHONE}</td>
                     <td>{a.SUP_STATUS }</td>
                     <td>{a.FREIGHT_TERMS}</td>
                     <td>{a.PAYMENT_METHOD  }</td>
                     <td>{a.FREIGHT_CHARGE_IND}</td>
                     <td>{a.PREPAY_INVC_IND}</td>
                     <td>{a.BACKORDER_IND}</td>
                     <td>{a.VAT_REGION}</td>
                 </tr>)
             }) 
          })
        
        }
        </tbody>
        </table>

        </div>
        <Pagination 
          activePage={this.state.currentpage+1}
          itemsCountPerPage={1}
          totalItemsCount={this.state.data_value[0]==undefined?0:this.state.data_value[0].length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
        </div>
    
   
    )
  }
}

export default SupplierView
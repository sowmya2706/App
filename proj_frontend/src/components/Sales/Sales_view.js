import React, { Component } from 'react'
import Service from './Service'
class Sales_view extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
      } 
    }
    componentDidMount(){
        Service.salesdetails_view().then(res=>{
            console.log("calling this func")
          this.setState({data_value:res.data})
         })
      }
 
  render() {
    return (
        <div>
            
      <div ><center>Sales View</center></div>
      <hr/>
      {console.log("result from backend is",this.state.data_value)}
      <div>
        <table width="100%" border="1">
              <thead>
                  <th>Invoice Number</th>
                  {/* <th>Invoice Date</th> */}
                  <th>Store</th>
                  <th>Sales type</th>
                  <th>Inventory Price</th>
                  </thead>
                  <tbody>  
                 {this.state.data_value.map(value =>{
                    return value.map(a=>{
    
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
                          </table>
                      </div>
                  

      </div>
    )
  }
}

export default Sales_view
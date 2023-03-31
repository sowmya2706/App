import React, { Component } from 'react'
import Service from './Service'
 class Inventory extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data_value:[],
         
      }
    }
    componentDidMount(){
      Service.inventory_view().then(res=>{
          console.log("calling this func")
        this.setState({data_value:res.data})
       })
    }
    
  render() {
    return (
        <div>
      <div><center>Inventory Detail</center></div>
      <hr/>
      <br/>
      <div>
        <table width="100%" border="1">
              <thead>
                  <th>Item</th>
                  <th>Purchase Unit</th>
                  <th>Purchase Cost</th>
                  <th>Sales Unit</th>
                  <th>Sales Cost</th>
                  <th>Closing Unit</th>
                  <th>Closing Cost</th>
                  <th>Store</th>
                  </thead>
                  <tbody> 
                  {this.state.data_value.map(value =>{
                    return value.map(a=>{
    
                     return (<tr>
                        <td>{a.ITEM}</td>
                        <td>{a.PURCHASE_UNIT}</td>
                        <td>{a.PURCHASE_COST}</td>
                        <td>{a.SALES_UNIT}</td>
                        <td>{a.SALES_COST}</td>
                        <td>{a.CLOSING_UNIT}</td>
                        <td>{a.CLOSING_COST}</td>
                        <td>{a.STORE}</td>
                       


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

export default Inventory
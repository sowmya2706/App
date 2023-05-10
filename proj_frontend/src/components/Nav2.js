import React, { Component } from 'react'

 class Nav2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {

    return (
      <div>
         <div class="list-group"><img src="https://seekvectorlogo.com/wp-content/uploads/2019/03/reynolds-retail-management-system-vector-logo-small.png"></img>
   
         <ul class="nav nav-tabs">
     
     <li class="nav-item dropdown">
       <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Item</a>
       <ul class="dropdown-menu" style="">
         <li><a class="dropdown-item" href="#">Item Create</a></li>
         <li><a class="dropdown-item" href="#">Item View</a></li>
         <li><a class="dropdown-item" href="#">Something else here</a></li>
        
       </ul>
     </li>
     <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Supplier</a>
     <ul class="dropdown-menu" style="">
       <li><a class="dropdown-item" href="#">Supplier Create</a></li>
       <li><a class="dropdown-item" href="#">Supplier View</a></li>
       <li><a class="dropdown-item" href="#">Something else here</a></li>
      
     </ul>
   </li>

   <li class="nav-item dropdown">
   <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Store</a>
   <ul class="dropdown-menu" style="">
     <li><a class="dropdown-item" href="#">Store Create</a></li>
     <li><a class="dropdown-item" href="#">Store View</a></li>
     <li><a class="dropdown-item" href="#">Item Location</a></li>
    
   </ul>
 </li>
     
   </ul>
</div>
      </div>
    )
  }
}

export default Nav2
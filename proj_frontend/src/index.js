import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import '@szhsin/react-menu/dist/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/User/Login'
import Home from './components/Home'
import Item from './components/Item/Item'
import ItemView from './components/Item/ItemView'
import Supplier from './components/Supplier/Supplier'
import SupplierView from './components/Supplier/SupplierView'
import StoreCreation from './components/Store/StoreCreation'
import StoreView from './components/Store/StoreView'
import PoCreate from './components/Po/PoCreate'
import Po_receive from './components/Po/Po_receive'
import Sales_create from './components/Sales/Sales_create'
import Sales_view from './components/Sales/Sales_view'
import Home1 from './components/Home1/Home1'
import Nav1 from './components/Nav1'
import Nav2 from './components/Nav2'
import DeptCreate from './components/Merchandise/Department/DeptCreate';
import DeptView from './components/Merchandise/Department/DeptView';
import ClassCreate from './components/Merchandise/Class/ClassCreate';
import ClassView from './components/Merchandise/Class/ClassView';
import SubCreate from './components/Merchandise/Subclass/SubCreate';
import SubView from './components/Merchandise/Subclass/SubView';
import Suma_form from './components/Suma_form'
import Item_loc from './components/Store/Item_loc'
import New_user from './components/User/New_user'
import Inventory from './components/Inventory/Inventory'
import {Routes,Route,  BrowserRouter as Router} from 'react-router-dom'
import Po_details from './components/Po/Po_details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
<Routes>
  
  <Route path="/" element={<Login/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/item" element={<Item/>}/>
  <Route path="/itemview" element={<ItemView/>}/>
  <Route path='/supplier' element={<Supplier/>}/>
  <Route path='/supplierview' element={<SupplierView/>}/>
  <Route path='/storecreate' element={<StoreCreation/>}/>
  <Route path='/storeview' element={<StoreView/>}/>
  <Route path='/pocreate'  element={<PoCreate/>}/>
  <Route path='/podetails' element={<Po_details/>}/>
  <Route path='/poreceive' element={<Po_receive/>}/>
  <Route path='/suma' element={<Suma_form/>}/>
    <Route path='/newuser' element={<New_user/>}/> 
    <Route path='/salescreate' element={<Sales_create/>}/>
    <Route path='/salesview' element={<Sales_view/>}/>
    <Route path='/itemloc' element={<Item_loc/>}/>
    <Route path='/inventory' element={<Inventory/>}/>
    <Route path='/home1'element={<Home1/>}/>
    <Route path='/nav1' element={<Nav1/>}/>
    <Route path='/nav2' element={<Nav2/>}/>
    <Route path='/deptcreate' element={<DeptCreate/>}/>
    <Route path='/deptview'  element={<DeptView/>}/>
    <Route path='/classcreate' element={<ClassCreate/>}/>
    <Route path='/classview'  element={<ClassView/>}/>
    <Route path='/subcreate' element={<SubCreate/>}/>
    <Route path='/subview'  element={<SubView/>}/>
  {/* <Route path="/insert" element={<Form/>}/> */}
</Routes>
 
  </Router>,
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import logo from './logo.svg';
import './App.css';
import Login from'./components/User/Login'
import Home from './components/Home'
import Item from './components/Item/Item'


function App() {
  return (
    <div className="App">
      <Login/>
      <Item/>
      <Home/>
      <img src="https://www.shutterstock.com/image-photo/smart-warehouse-management-system-innovative-internet-2074721800"/>
    </div>
  );
}

export default App;

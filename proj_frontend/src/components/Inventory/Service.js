import axios from "axios";
const Service={
async inventory_view()
{
    const res = await axios.get("http://localhost:4000/inventoryview");
  
    console.log("response from backend is",res);
     return await res;
    
},
}
export default Service;
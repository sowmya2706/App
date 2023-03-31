import axios from "axios";
const Service={
    async  upload(value) {
        console.log("sent value is ",value);
        // const itemcheck = await axios.get("http://localhost:4000/getval?ITEM="+value.ITEM);
         const res = axios.post("http://localhost:4000/salescreate",value);
       //  alert("succesfull");
        // return await res;  
    },
    async  uploadsalesdetail(value) {
        console.log("sent value for salesdetail is ",value);
       
         const res = axios.post("http://localhost:4000/salesdetail",value);
         alert("succesfull");
         return await res;  
    },
    async getstoreval()
    {
        const res = await axios.get("http://localhost:4000/getstoreforsales");
         //alert("succesfull");
    
         return await res;
        
    },
    async salesdetails_view()
    {
        const res = await axios.get("http://localhost:4000/salesdetailsview");
      
        console.log("response from backend is",res);
         return await res;
        
    },
    async inventory_sales(value)
    {
        console.log("value sent to service for inventory sales is",value)
        const res = await axios.post("http://localhost:4000/inventory_sales",value);
      
        console.log("response from backend is",res);
         return await res;
        
    },
    async gettotal(value)
    {
        console.log("the value for get total",value)
        const res = await axios.post("http://localhost:4000/gettotalvalue",value);
        console.log("response from the backend is",res)
         return await res;
        
    },
    async getitem(value)
    {
       console.log("sent value is",value);
        const res = await axios.get("http://localhost:4000/getitemforsales?value="+value);
         //alert("succesfull");
         console.log("response in the frontend",res.data);
         return await res.data;
        
    },
    async quanty_check(value)
    {
        console.log("sent value for quantity check is ",value);
        const res=await axios.get("http://localhost:4000/quanty_check?item="+value);
        console.log("response as closing unit",res.data);
        return await res.data;
          },
}
    export default Service;

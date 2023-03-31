import axios from "axios";

 const Service={
    async uploaditemloc(value)
    {
        console.log("the value is",value);
        const res = await axios.post("http://localhost:4000/uploaditemloc",value);
         alert("succesfull");
    
        return await res;
        
    },
    async  upload(value) {
        console.log(value.STORE);
        
         const storecheck = await axios.get("http://localhost:4000/getstorecheck?STORE="+value.STORE);
         //console.log( itemcheck);
         //console.log( itemcheck.data);
        if (storecheck.data==0) {
            const res = axios.post("http://localhost:4000/postStore",value);
            alert("succesfull");
            return await res;
           
        }
         else{
             alert("this record is already presented");
        }
    },
    async  get() {
        const res = axios.get("http://localhost:4000/getStore")

        return await res;
    },
    async getstoreval()
    {
        const res = await axios.get("http://localhost:4000/getstoreforstore");
         //alert("succesfull");
    
         return await res;
        
    },
    async getitem(value)
    {
        console.log("the sent value is",value);
        const res = await axios.get("http://localhost:4000/getitemforstore?value="+value);
         //alert("succesfull");
    
         return await res;
        
    },
}
export default  Service;
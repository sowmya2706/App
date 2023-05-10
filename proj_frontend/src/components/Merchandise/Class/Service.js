import axios from "axios";

 const Service={
    async getdept()
    {
        const res = axios.get("http://localhost:4000/getdeptforclass");
         //alert("succesfull");
         return await res;
        
    },
    async  upload(value) {
        console.log(value)
      

 console.log("sent value is ",value.CLASS_NO);
        const datacheck = await axios.get("http://localhost:4000/getclassno?classno="+value.CLASS_NO);
        console.log(datacheck.data)
        if(datacheck.data==0)
{
    const res = axios.post("http://localhost:4000/classcreate",value);
       
    alert("success");
   return await res;  

    }
else{
    alert("the class number is already present")
}


    },
    async getclass(){
        const res = axios.get("http://localhost:4000/getclassview")
            console.log("get completed succ",await(res));
            return await res;
    }
}
export default  Service;


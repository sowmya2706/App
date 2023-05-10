import axios from "axios";

 const Service={
    async getclass()
    {
        const res = axios.get("http://localhost:4000/getclassforsubclass");
         //alert("succesfull");
         return await res;
        
    },
    async  upload(value) {
        console.log(value)
      


        const datacheck = await axios.get("http://localhost:4000/getsubclassno?subclassno="+value.SUB_CLASS_NO);
        console.log(datacheck.data)
        if(datacheck.data==0)
{
    const res = axios.post("http://localhost:4000/subclasscreate",value);
       
    alert("success");
   return await res;  

    }
else{
    alert("the class number is already present")
}


    },
    async getsubclass(){
        const res = axios.get("http://localhost:4000/getsubclassview")
            console.log("get completed succ",await(res));
            return await res;
    }
}
export default  Service;


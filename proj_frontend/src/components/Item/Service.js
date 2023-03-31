import axios from "axios";

 const Service={
    async  upload(value) {
        console.log("upload value",value.ITEM,value.SUPPLIER)
         const itemcheck = await axios.get("http://localhost:4000/getval?ITEM="+value.ITEM);
         console.log(itemcheck.data)
         console.log("item after supplier")
         const suppliercheck=await axios.get("http://localhost:4000/getvalsupp?ITEM="+value.SUPPLIER)
         console.log(suppliercheck.data)
         //console.log( itemcheck);
         //console.log( itemcheck.data);
        if ((itemcheck.data==0)&&(suppliercheck.data==1)) {
            console.log("inside if ",itemcheck.data,suppliercheck.data)
            const res = axios.post("http://localhost:4000/post",value);
            alert("succesfull");
            return await res;
           
        }
        else if((itemcheck.data==1)&&(suppliercheck.data==0)){
            console.log("inside else if ",itemcheck.data,suppliercheck.data)
             alert("this item is already present but  supplier is not present");
        }
        
       else if((itemcheck.data==0)&&(suppliercheck.data==0))
       {
        alert("supplier not present")
       }
       else 
       {
        alert("item already present")
       }
    },
    async  get() {
        const res = axios.get("http://localhost:4000/get")
        console.log("get completed succ",await(res));
        return await res;
    },
}
export default  Service;
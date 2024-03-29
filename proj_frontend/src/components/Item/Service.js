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
            alert("success");
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
    async getsupplier()
    {

        const res = axios.get("http://localhost:4000/getsupplierforitem")
       // console.log("get completed succ",await(res));
        return await res;
    
    
    },
    async getdeptval()
    {
        console.log("getting deptval")
        const res = axios.get("http://localhost:4000/getdeptforitem")
       // console.log("get completed succ",await(res));
        return await res;
    },
    async getclass(dept)        
    {
       // receivecheck?received_quantity="+value.received_qunatity+"&received_item="+value.received_item
       // {
      console.log("sent value is",dept);
        const res = await axios.get("http://localhost:4000/getclassforitem?department="+dept);
       //  //alert("succesfull");
        console.log("response in the frontend",res.data);
        return await res.data;
       
   },
   async getsubclass(classno)        
   {
      // receivecheck?received_quantity="+value.received_qunatity+"&received_item="+value.received_item
      // {
     console.log("sent value is",classno);
       const res = await axios.get("http://localhost:4000/getsubclassforitem?classno="+classno);
      //  //alert("succesfull");
       console.log("response in the frontend",res.data);
       return await res.data;
      
  },

}
export default  Service;
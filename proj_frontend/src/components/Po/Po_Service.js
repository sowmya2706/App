import axios from "axios";

 const Service={
    async  upload(value) {
       const ordercheck=await axios.get("http://localhost:4000/ordercheck?ORDER_NO="+value.ORDER_NO);
        console.log(ordercheck);
        console.log(ordercheck.data);
        if (ordercheck.data==0) {
            const res = axios.post("http://localhost:4000/postpocreate",value);
            alert("success");
            
            return await res;
            console.log("response for po create upload",res);
        }
        
    },

    // async  enterdetails(value) {
        
        
    //     // const itemcheck = await axios.get("http://localhost:4000/getval?ITEM="+value.ITEM);
    //      const res = axios.post("http://localhost:4000/postpodetails",value);
    //      alert("succesfull");
    //      return await res;
        
         
        
    // },
    async getsupplier()
    {
        const res = axios.get("http://localhost:4000/getsupplierforpo");
         //alert("succesfull");
         return await res;
        
    },
     async getitem(supplier,store)        
     {
        // receivecheck?received_quantity="+value.received_qunatity+"&received_item="+value.received_item
        // {
       console.log("sent value is",supplier,store);
         const res = await axios.get("http://localhost:4000/getitemforpo?SUPPLIER="+supplier+"&STORE="+store);
        //  //alert("succesfull");
         console.log("response in the frontend",res.data);
         return await res.data;
        
    },
//     async getitemstore(value)        
//     {
//        // receivecheck?received_quantity="+value.received_qunatity+"&received_item="+value.received_item
//        // {
//       console.log("sent value is",value);
//        const res = await axios.get("http://localhost:4000/getitemforpostore?STORE="+value);
//         //alert("succesfull");
//         console.log("response in the frontend",res.data);
//         return await res.data;
       
//    },
   async getitemporeceive(value)
   {
     console.log('sent ponumber is',value);
     const res=await axios.get("http://localhost:4000/getitemforporeceive?ORDER_NO="+value);
     console.log("response as ordernumber",res.data);
     return await res.data;
       },
    async podetailsget()
    {
        console.log("gotcha")
        const res = await axios.get("http://localhost:4000/getdetails");
        //alert("succesfull");
   
        return await res;
    },
    async getponumber()
    {
        const res = axios.get("http://localhost:4000/getponumberforpo");
         //alert("succesfull");
         return await res;
        
    },
    async uploadreceive(value)
    {

        const res = axios.post("http://localhost:4000/uploadporeceive",value);
        alert("success");
        return await res;  
    },
    async inventory(value)
    {
        console.log("value in the servicer  is",value)
       const res = axios.post("http://localhost:4000/inventory",value);
       // alert("succesfull");
       return await res;  
    },
    async ordercheck(value)
    {
        console.log("ordercheck value is",value)
        const res=axios.post("http://localhost:4000/ordercheck",value);
        console.log(res);
    },
    async getstore()
    {
        const res = await axios.get("http://localhost:4000/getstoreforpo");
         //alert("succesfull");
    
         return await res;
        
    },
    async getorder()
    {
        const res = await axios.get("http://localhost:4000/getorderno");
         //alert("succesfull");
    
         return await res;
        
    },
    async receivecheck(value)
    {
        console.log("sent value1 , value2 and value 3 is",value);

        const res = await axios.get("http://localhost:4000/receivecheck?received_quantity="+value.received_qunatity+"&received_item="+value.received_item+"&po_number="+value.po_number);
        console.log("response as ordernumber",res.data);
     return await res.data;
       },
}
 export default Service;
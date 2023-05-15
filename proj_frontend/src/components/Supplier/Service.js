import axios from "axios";

 const Service={
    async  upload(value) {
        console.log("value is ",value);
        const storecheck = await axios.get("http://localhost:4000/getsuppliercheck?SUPPLIER="+value.SUPPLIER);
        console.log(storecheck);
        console.log(storecheck.data);
       if (storecheck.data==0) {
        const res = axios.post("http://localhost:4000/postSupplier",value);
        alert("success");
        return await res;
        console.log(res);
    }
    else{
        alert("this record is already presented");
   }
    },
    async  get() {
        const res = axios.get("http://localhost:4000/getSupplier")

        return await res;
    },
}
export default  Service;
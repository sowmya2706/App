import axios from "axios";
const Service={
    async  upload(value) {
        console.log("sent value is ",value.DEPT_NO);
        const datacheck = await axios.get("http://localhost:4000/getdeptno?deptno="+value.DEPT_NO);
        console.log(datacheck.data)
        if(datacheck.data==0)
{
      
        const res = axios.post("http://localhost:4000/deptcreate",value);
       
        alert("success");
        return await res; 
        
}
else{
    alert("the department number is already present")
   // window.location.reload(false);
}

    },
async getdept(){
    const res = axios.get("http://localhost:4000/getdeptview")
        console.log("get completed succ",await(res));
        return await res;
}
}
export default Service;
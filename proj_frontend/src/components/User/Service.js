import axios from "axios";

 const Service={
    async newuser(value)
    {
      console.log("sent value is",value);
      console.log(value.USERNAME);
      
     
      const res=await axios.post("http://localhost:4000/newusercheck",value);
     console.log(res.data);
      return await res.data;
    },
    async otpgenerate(value)
    {
      console.log("sent value is",value.EMAIL);
      if(value.EMAIL==undefined)
      {
        console.log("fvgg")
        alert("Please enter the Email ID");
      }
      else{

      
      const res=await axios.post("http://localhost:4000/otpgenerate",value);
     console.log(res.data);
      return await res.data;
      }
    },
    async userexist(value)
    {
        console.log("sent value for checking is",value);
        const res=await axios.post("http://localhost:4000/userexist",value);
     console.log(res.data);
      return await res.data;

    }
}
export default Service;
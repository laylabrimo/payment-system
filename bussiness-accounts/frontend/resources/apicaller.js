import axios from "axios";

export default class Apicaller {
  data={}
  signup = async (data) => {
    console.log(data);
    let res = await axios.post("http://localhost:5500/register", {
      data, //send user object to the server
    });
    return res;
  };
  sendvercode=async()=>{
    let res=await axios.post("http://localhost:5500/vercode/send",{
      data:this.data // send email
    })
    return res

  }

  verifycode=async()=>{
    let res=await axios.post("http://localhost:5500/vercode/verify",{
      data:this.data // {email:this.data.email,vercode:this.data.vercode}
    })
    return res
  }
}

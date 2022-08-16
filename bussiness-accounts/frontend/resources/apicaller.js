import axios from "axios";

export default class Apicaller {
  data={}
  http=axios.create({
    baseURL:'http://localhost:5500/',
    headers:{
      'Content-Type':'application/text'
    }
    
    
  })

  signup = async (data) => {
    console.log(data);
    let res = await this.http.post("/register", {
      data, //send user object to the server
    });
    return res;
  };
  login=async(data)=>{
    console.log('login in progress');
    let res=await this.http.post("/login",{
      data
    })
    return res

  }
  sendvercode=async()=>{
    let res=await this.http.post("/vercode/send",{
      data:this.data // send email
    })
    return res

  }
  updaterefrence=async(data)=>{
    console.log(data)
    let res= await this.http.post('/updaterefrence',{
      data:data //send user object to the server
    })
    return res.data
  
  }
  

  verifycode=async()=>{
    let res=await this.http.post("/vercode/verify",{
      data:this.data // {email:this.data.email,vercode:this.data.vercode}
    })
    return res
  }
}

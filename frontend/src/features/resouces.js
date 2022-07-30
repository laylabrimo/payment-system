import axios, { Axios } from "axios";
export default class resourses {
  fullname = "";
  email = "";
  phonenumber = "";
  birthdate = "";
  password1 = "";
  password2 = "";
  token = "";
  verificationtype = "";
  logged = false;
  token = "";
  refreshtoken = "";
  login = async (data) => {
    //  call http end point
  
    let res=await axios.post("http://localhost:4000/login", { data })
    
      if (res){
        localStorage.setItem("accesstoken", res.data.accesstoken);
      return res
      }
      else{
        return 'no res'
      }

  }
     

  logout = (data) => {
    localStorage.removeItem('accesstoken')
    window.location.reload()
    //  call http end point
  };

  getverificationlink = async () => {
    let data = {
      phone_number: this.phonenumber,
      email: this.email,
    };
    let res = await axios.post(
      "http://localhost:4000/generate-verification-link",
      { data }
    );
    return res.data;
  };
  verifytoken = async () => {
    let access_token = localStorage.getItem("accesstoken");
    let data = {
      token: access_token,
    };
    console.log(data);
    let res = await axios.post("http://localhost:4000/verifytoken", { data });
    return res;
  };

  sendverificationcode = async () => {
    console.log("qeybta bilawga");
   
    if (this.verificationtype === "email") {
      console.log("qeybta emailka");
      let res = await axios.post("http://localhost:4000/sendverificationcode", {
        data: { email: this.email, vertype: "email" },
      });

      return res.data;
    }
    if (this.verificationtype === "number") {
      console.log("qeybta numberka");
      let res = await axios.post("http://localhost:4000/sendverificationcode", {
        data: { number: this.phonenumber, vertype: "number" },
      });

      return res.data;
    }
    console.log("qeybta dhamaadka");
  };
  changevercode = async () => {
   
    let res = await axios.post("http://localhost:4000/changevercode", {
        email:this.email,
      });
      return res
     
 
  };

  retriveuserbytoken = async () => {
    let user = await axios.post("http://localhost:4000/retriveuserbytoken", {
      token: this.token,
    });
    console.log('in retrive user by token',user,this.token)
    return user
  };
  refreshtoken = async () => {
    console.log("refreshing the token ....");
    let access_token = localStorage.getItem("accesstoken");
    console.log("akses tokenka waa ", access_token);
    let res = await axios.post("http://localhost:4000/refreshtoken", {
      token: access_token,
    });
    let isok=res.data.access_token
    if (isok){
    localStorage.setItem('accesstoken',isok)
    }
   
    
    return res;
  };
  addpaymentmethod=async(data)=>{
    console.log('datada',data)
    let access_token = localStorage.getItem("accesstoken");
    this.token=access_token
    let user= await this.retriveuserbytoken()
    console.log('add payment method',user)
    let res= await axios.post('http://localhost:4000/addpm',{data:data,user:user})
    return res


  }
  removepaymentmethod=async(id)=>{
    let access_token = localStorage.getItem("accesstoken");
    this.token=access_token
    let user= await this.retriveuserbytoken()
    let res= await axios.post('http://localhost:4000/rmpm',{data:id,user:user})
    return res

  }
  deposit=async(depositinfo)=>{
    let access_token = localStorage.getItem("accesstoken");
    this.token=access_token
    let user= await this.retriveuserbytoken()
    let res= await axios.post('http://localhost:4000/deposit',{depositinfo,user:user})
    return res

  }
  sendmoney=async(sendinfo)=>{
    let access_token = localStorage.getItem("accesstoken");
    this.token=access_token
    let user= await this.retriveuserbytoken()
    let res= await axios.post('http://localhost:4000/sendmoney',{sendinfo,user:user})
    return res

  }
  setdpm=async(card)=>{
    let access_token = localStorage.getItem("accesstoken");
    this.token=access_token
    let user= await this.retriveuserbytoken()
    let res= await axios.post('http://localhost:4000/setdpm',{card,user})
    return res

  }
  finduseraccountinfo=async(acc)=>{
    console.log('hadaa diraa')
    let res= await axios.post('http://localhost:4000/findaccountinfo',{acc,acc})
    return res
  }
  getmytransactions=async(cusid)=>{
    let res= await axios.post('http://localhost:4000/getmytrx',{cusid})
    return res

  }
  checkotp=async(otp)=>{
    let access_token = localStorage.getItem("accesstoken");
    this.token=access_token
    let user= await this.retriveuserbytoken()
    let res= await axios.post('http://localhost:4000/checkotp',{otp,user})
    return res
    
  }
}

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
   try {
    await axios.post("http://localhost:4000/login", { data }).then((res) => {
      localStorage.setItem("accesstoken", res.data.accesstoken);
      window.location.reload()

      // get access token and store in localstorage
    });
   } catch (error) {
     return 'error'
   }

    // => create logging token
    // =>
  };
  logout = (data) => {
    this.logged = false;
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
    let data = {
      email: this.email,
      phonenumber: this.phonenumber,
    };
    if (this.verificationtype === "email") {
      console.log("qeybta emailka");
      let res = await axios.post("http://localhost:4000/sendverificationcode", {
        data: { email: data.email, vertype: "email" },
      });

      return res.data;
    }
    if (this.verificationtype === "number") {
      console.log("qeybta numberka");
      let res = await axios.post("http://localhost:4000/sendverificationcode", {
        data: { number: data.phonenumber, vertype: "number" },
      });

      return res.data;
    }
    console.log("qeybta dhamaadka");
  };
  changevercode = async () => {
    let data = {
      type: "",
      value: "",
    };
    if (this.verificationtype == "email") {
      data.type = "email";
      data.value = this.email;
      let res = await axios.post("http://localhost:4000/changevercode", {
        data,
      });
      console.log(res.data);
    }
  };

  retriveuserbytoken = async () => {
    let user = axios.post("http://localhost:4000/retriveuserbytoken", {
      token: this.token,
    });
    return (await user).data;
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
}

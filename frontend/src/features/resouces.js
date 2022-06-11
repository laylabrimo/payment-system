import axios, {Axios} from 'axios'
export default class resourses{
    fullname= ""
    email= ""
    phonenumber= ""
    birthdate= ""
    password1= ""
    password2= ""
    token=''
    verificationtype=''
    logged=false

    login=(data)=>{
        this.logged(true)
        //  call http end point
        // => create logging token
        // =>


    }
    logout=(data)=>{
        this.logged=false
        //  call http end point
        

    }

    getverificationlink=async()=>{
        let data={
            phone_number:this.phonenumber,
            email:this.email

        }
        let res= await axios.post('http://localhost:4000/generate-verification-link',{data})
        return res.data
        

    }
    verifytoken=async()=>{
        let data={
            token:this.token

        }
        let res= await axios.post('http://localhost:4000/verifytoken',{data})
        return res


    }

 sendverificationcode=async()=>{
    let data={
       email:this.email,
       phonenumber:this.phonenumber

    }
     if (this.verificationtype==='email'){
        let res= await axios.post('http://localhost:4000/sendverificationcode',{data:{email:data.email,vertype:'email'}})
        return res.data

     }
     if (this.verificationtype==='number'){
        let res= await axios.post('http://localhost:4000/sendverificationcode',{data:{number:data.phonenumber,vertype:'number'}})
        return res.data

     }

 }


}
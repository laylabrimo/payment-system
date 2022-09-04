import axios from "axios"

let pay=async({amount,reason})=>{
    console.log(amount,reason)
    let res= await axios.post('http://localhost:3005/pay',{
        reason:reason,
        amount:amount
    })
   
    return res.data


}
export default pay;
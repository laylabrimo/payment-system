
import * as LocalAuthentication from 'expo-local-authentication';

let authrequired=async()=>{
    let resu= await LocalAuthentication.authenticateAsync({promptMessage:'message'})
    if (resu.error){
      return 'error'
    }
    if (resu.warning){
      return 'warning'
    }
    else{
      return 'ok'
    }
     
   }


module.exports=authrequired
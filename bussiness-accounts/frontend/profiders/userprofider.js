import React,{useState,createContext, useEffect} from 'react'
import Apicaller from '../resources/apicaller';
export const Usercontext=createContext()
export const Userprofider=(props)=>{
  useEffect(()=>{
    let getaccount=async()=>{
        let token=localStorage.getItem('token')
    if(token){
       // verify token
       let api=new Apicaller()
       let res=await api.getaccount(token)
       
       setuser(res)

      
       

        }
    }
    getaccount()

  },[])
   
    let [user,setuser]=useState('waaw')
  

    return (
        <Usercontext.Provider value={[user,setuser]}>
            {props.children}
        </Usercontext.Provider>
    )

}

import React,{useState,createContext, useEffect} from 'react'
export const Usercontext=createContext()
export const Userprofider=(props)=>{
 
   
    let [user,setuser]=useState('null')
  

    return (
        <Usercontext.Provider value={[user,setuser]}>
            {props.children}
        </Usercontext.Provider>
    )

}

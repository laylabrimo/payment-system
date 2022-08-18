import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Usercontext } from '../../profiders/userprofider'
import { validateuser } from '../../validators/uservalidator'

function Authwrapper(props) {
    // check if there is a account
    let [account,setacount]=useContext(Usercontext)
 useEffect(()=>{

  

 },[])
    // if user => refresh the token
    // if not => redirect to auth page
  let [user,setuser]=useContext(Usercontext)
  return (
    <div>{props.children}</div>
  )
}

export default Authwrapper
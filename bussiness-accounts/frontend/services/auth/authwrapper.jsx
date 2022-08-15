import React, { useContext } from 'react'
import { Usercontext } from '../../profiders/userprofider'
import { validateuser } from '../../validators/uservalidator'

function Authwrapper(props) {
    // check if there is a user
    // if user => refresh the token
    // if not => redirect to auth page
  let [user,setuser]=useContext(Usercontext)
  console.log(user)
  return (
    <div>{props.children}</div>
  )
}

export default Authwrapper
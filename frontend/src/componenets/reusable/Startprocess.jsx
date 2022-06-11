import { Check, Download } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import process from '../../images/process.svg'
import processtext from '../../images/processtext.svg'
import { AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Verificationform from './Verificationform'
import Verification from './Verification'
import Phonenumbeverify from './verifications/Phonenumbeverify';
import Emailverify from './verifications/Emailverify'
import Agreement from './verifications/Agreement';


export default function Startprocess() {
    let navigate=useNavigate()
    let [agreementaccepted,setagreementtaccepted]=useState(false)
    let [emailverified,setemailverified]=useState(false)
    let [numberverified,setnumberverified]=useState(false)
    let [documentverified,setdocumentverified]=useState(false)
    let [faceverified,setfaceverified]=useState(false)



  if (!agreementaccepted){
    return  <Agreement setagreementtaccepted={setagreementtaccepted} />
  }
 
  if (!emailverified && agreementaccepted){
      return <Emailverify/>
  }
  if (emailverified && agreementaccepted){
    return <Phonenumbeverify/>
}
 
  return <h1>everything is finished</h1>
}

import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from 'native-base';
import { Usercontext } from '../contexts/Usercontext';
import resourses from '../../resouces';
import Addcard from '../../compinents/Addcard';
import axios from 'axios';
import Loading from '../Loading';
import logo from '../../assets/logo.png'
import {    Image} from 'react-native'

const Pamentconfirm = ({data}) => {
  let [user,setuser]=React.useContext(Usercontext)
  let [paymentinfo,setpaymentinfo]=React.useState({})
  let [confirmed ,setconfirmed]=React.useState(false)
  let [type,settype]=React.useState('')

  // timer for 10 seconds
  const [seconds, setseconds] = React.useState(30);
 useEffect(()=>{
  let timer=()=>{
    setseconds(seconds-1)
    if(seconds===0){
      Alert.alert('Payment Failed','Please try again')
    }
  }
  setTimeout(timer,1000)
  return ()=>{
    clearTimeout(timer)
  }
 },[seconds])

    let navigate=useNavigation()
    // get the params
    let roue=useRoute()
    let info=roue.params.data
    
    //  handle the payment according to the type of payment that can be found in the params
    // info that begins with PI is payment intent 
    // info that begins with SUB is subscription



    useEffect(()=>{

      if (info.startsWith('PI')){
        settype('payment intent')
        let getpaymentintentinfo=async(info)=>{
          console.log(info)
            let res=await axios.post('http://192.168.0.101:5500/intents/getintentinfo',{intentid:info});
            console.log('jhjhjh',res.data)
            setpaymentinfo(res.data)
         
            }
            getpaymentintentinfo(info);

      }
    
  },[])
    
   
if(type=='payment intent'){
  if (paymentinfo.status=='paid'){
    return (
     <View style={{
      flex:1,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
     }}>
      <Text>it seems that this intent has been alredy paid if you paid it plea</Text>
      <Button>Contact us</Button>
     </View>
    )
  }
  

}
  return (
    <View style={{
      flex:1,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'

    }}>
      <Image source={logo} style={{width:300,height:300}}/>
      <View style={{
        width:100,
        height:100,
        borderRadius:50,
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#fff',
      }}>
<Text style={{
  fontSize:40,
  padding:10,
}}>{seconds}</Text>
      </View>
<Text style={{
  fontSize:15
}}>{paymentinfo?.who?.bname} want to recharge your account for ${paymentinfo?.ammount}  </Text>   
<Text>ID: {paymentinfo?.intent_id}</Text>
<Text>Reason: {paymentinfo?.reason}</Text>

<Button disabled={paymentinfo?false:true} onLongPress={()=>{
setconfirmed(true)}} style={{
  marginTop:20,
  borderRadius:80
}} width={500}>Confirm</Button> 
<View style={{
  width:500
}}>
<Text   style={{
  marginTop:20,
  alignSelf:'center',
  color:'#D3D3D3'
}}>you have {seconds} to confirm this transaction if did not tp confirm this transaction will be cancelled and you will not get recharged but at this case we will notify intent profider that you have cancelled paying  this intent</Text>
</View>







    
    </View>
  )
}

export default Pamentconfirm

const styles = StyleSheet.create({})
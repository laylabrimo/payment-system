import { StyleSheet, Text, View ,TextInput,Alert,Keyboard,Button,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {   Divider,Spinner,Toast } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import Appconfirm from '../../../compinents/Confirm';
import resourses from '../../../resouces';
import Throwotp from '../../../compinents/Throwotp';
import { Usercontext } from '../../contexts/Usercontext';
import cncelicon from  '../../../assets/icons/cancel.png'
const Recharge = () => {
  let navigate= useNavigation()
  let [confirmopen,setconfirmopen]=React.useState(false)
  let [loading,setloading]=React.useState(false)
  let [touser,settouser]=React.useState({})
  let [error,seterror]=React.useState('')
  let [otpneeded,setotpneeded]=React.useState(false)
  let [user,setuser]=React.useContext(Usercontext)
  let [otp,setotp]=React.useState('')
  let [ammount,setammount]=React.useState('')
  let [hasammount,sethasammount]=React.useState(false)
  let [cansend,setcansend]=React.useState(false)
  let ok =cansend && hasammount //  true - false =false ... true-false 
  console.log(ok)
  console.log(cansend , hasammount)


  

  let makethe_transaction=async()=>{

    let Res = new resourses();
    Res.email=user.email
  
    let senddatainfo = {
      ammount: ammount,
      to_acc:touser
    };
    let res = await Res.sendmoney(senddatainfo);
   
    
    console.log('send money res ',res.data.msg);
  }
  let confirmuser=async()=>{
    setconfirmopen(false)
    let Res=new resourses()
    Res.verificationtype='email'
    Res.email=user.email
    let res= await Res.sendverificationcode()
    console.log(res.otp)
    setotp(res.otp)
   setotpneeded(true)
   
  }
  let findatouser_account=async(account_number)=>{
    setcansend(false)
    console.log(account_number)
    setloading(true)
    let Res= new resourses()
    let respond=await Res.finduseraccountinfo(account_number)
    if (respond.data.msg[0]==undefined){
      setloading(false)
      seterror('could not found that account')
     Toast.show({
       render:()=>{
         return <View style={{
           width:200,
           height:30,
           backgroundColor:'#e8797b',
           marginBottom:80,
           borderRadius:7,
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           
         }}>
          
           <Text style={{
             color:'white'
           }}>{error}</Text>

         </View>
       }
     })
     
    }
    else{
      setloading(false)
      settouser(respond.data.msg[0])
      console.log('inta aan la dirin ',respond.data.msg[0])
      console.log('kan loo diraayo', touser?.finanaces?.acc+ ' kan diraayo ',user?.finanaces?.acc)
      if (respond.data.msg[0]?.finanaces?.acc==user?.finanaces?.acc){
        Alert.alert('sory you cant send money to your account')
      }
      else{
        setcansend(true)
      }

    }
  }
  if (otpneeded){
    return (
      <View>
        <Throwotp chargetheuser={makethe_transaction} otp={otp}/>
      </View>
    )
  }
  return (
    <View style={styles.sendmoneywrapper} >
       <TouchableOpacity onPress={()=>{
            navigate.navigate('home')
           }}>
           <Image  alt='shaqo la'aan style={{
                tintColor:'black',
                width:30,
                height:30,
                position:'absolute',
                top:10,
                right:120
            }} source={cncelicon}/>
           </TouchableOpacity>
      <Text  style={{
        fontWeight:'bold',
        marginTop:30
      }}>Recharge Your Account</Text>
      <Divider style={{
        width:56,marginTop:4
      }}/>
     <View style={styles.inputswrapper}>
    {loading &&  <Spinner style={{
       marginBottom:10
     }} color="indigo.500" />}
    

     <TextInput editable={false} selectTextOnFocus={!loading} 
      
  keyboardType='numeric' style={styles.input} defaultValue={user.acc} placeholder={user.finanaces.acc}/>
     
     <TextInput  editable={false}   disableFullscreenUI style={styles.input} placeholder={user.name}/>

     <TextInput  editable={!loading} selectTextOnFocus={!loading} onChange={(e)=>{
       setammount(e.nativeEvent.text)
       if (e.nativeEvent.text==0){
        sethasammount(false)
       }
       else{
        sethasammount(true)
       }
       
     }}  keyboardType='numeric' style={styles.input} placeholder='Ammount'/>
     <Button disabled={!ok} title='Recharge Now' onPress={()=>{
       setconfirmopen(true)

     }}/>
      <Appconfirm handleaction={confirmuser} message={`your account will be charged $${ammount} so before that please make sure you are sending to the right person : ${touser?.name}`} title={`Are you sure you want to send $${ammount} to ${touser?.name}`} confirmopen={confirmopen} setconfirmopen={setconfirmopen}/>


      </View>
     
    </View>
  )
}

export default Recharge

const styles = StyleSheet.create({
  sendmoneywrapper:{
    flex:1,
    backgroundColor:'white',
    display:'flex',
    alignItems:'center',
    marginTop:40
    
  },
  sendmoneyform:{
  
    width:'90%',
    height:'100%',
    padding:12,
  
  },
  inputswrapper:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  
    padding:6,
    marginTop:30,
  
   


  },
  input:{
    backgroundColor:'white',
    padding:10,
    borderColor:'grey',
    borderWidth: 0.3,
    borderRadius: 10,
    width:'90%',
    margin:4,
    marginBottom:5
  },
})
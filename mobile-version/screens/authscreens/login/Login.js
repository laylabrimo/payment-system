import { StyleSheet,  View,TextInput ,Button,Image,Pressable,TouchableOpacity,Alert} from 'react-native'
import React,{useContext, useEffect,useState} from 'react'
import { VStack, HStack, IconButton, CloseIcon, Box, Text, Center, NativeBaseProvider, Spinner, Heading } from "native-base";
import logo from '../../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Appalert from '../../../compinents/Alert'
import  axios, {Axios} from 'axios'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Usercontext } from '../../contexts/Usercontext';
import resourses from '../../../resouces';
const Login = () => {
    let navigate=useNavigation()
    let [user,setuser]=useContext(Usercontext)
    let [email,setemail]=useState('')
    let [password,setpassword]=useState('')
    let [nightmode,setnightmode]=useState(false)
    let [loadingch,setloadingch]=useState(false)
   
    let [ok,setok]=useState(null)
    let [message,setmessage]=useState('')
    let [openalert,setopenalert]=useState(false)
   //
   useEffect(()=>{
     setpassword('')
     setemail('')
   },[])
   let retriveuserbytoken = async (token) => {
    let user = await axios.post("http://192.168.0.101:4000/retriveuserbytoken", {
      token,
    });
    console.log('in retrive user by token',user)
    return user
  };
    let handlelogin=async()=>{
      let data={email:email,password:password}
      let Res=new resourses()
      let respon= await Res.login(data)
      console.log(respon)
      let usertoken=await AsyncStorage.getItem('accesstoken')
      Res.token=usertoken
      Res.refreshtoken()
      let respond=await Res.retriveuserbytoken()
      console.log('respondhiga waa',respond)
      let user=respond.data.data.userka
      console.log('jee adag',user)
     setuser(user)
     navigate.navigate('home')
    }
   
   
    
  return (
    
<View style={nightmode?styles.loginwrappernight:styles.loginwrapper}>
      <View style={styles.logowrapper}  >
      
        <Image style={styles.logo}  source={logo} />
      </View>
      <View style={styles.inputswrapper}>
        <TextInput onChange={(x)=>{
          setemail(x.nativeEvent.text)
          

        }} keyboardType='email-address' style={styles.input} placeholder='Enter Your Email'/>
        <TextInput onChange={(x)=>{
          setpassword(x.nativeEvent.text)
          

        }} secureTextEntry style={styles.input} placeholder='Enter Your Pasword'/>
        
      </View>
      
      <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:5
      }}>
{openalert && <Appalert message={message} openalert={openalert} setopenalert={setopenalert} />}
      </View>
       
       <Pressable style={styles.button} >
         <TouchableOpacity>
         <Text onPress={()=>{
          handlelogin()
         }} style={styles.text}>{!loadingch?'login':<>
         <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Verifying" />
      <Heading color="red" fontSize="md">
        verifying
      </Heading>
    </HStack>
         </>}</Text>
         </TouchableOpacity>
     
    </Pressable>

    <View style={styles.links}>
      <TouchableOpacity>
      <Text style={styles.forgotpassword}>forgot your password?</Text>

      </TouchableOpacity>

    </View>
    <View style={styles.footer}>
    <Ionicons style={styles.icon} name="help-circle-outline" size={24} color="black" />
    <MaterialIcons style={styles.icon} name="privacy-tip" size={24} color="black" />
    <Entypo style={styles.icon} name="chat" size={24} color="black" />
    </View>
     <View style={styles.copyright}>
       <Text>©2022 PAYSOM {user=='null'?'loading':user==null?'null':'user ase'}</Text>
     </View>
    </View>
  
      
    
  )
}

export default Login

const styles = StyleSheet.create({
  loginwrapper:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    display:'flex',
    paddingTop:30,
    padding:20,
   justifyContent:'center',
   alignItems:'center'
    

  },
  loginwrappernight:{
    width:'100%',
    height:'100%',
    backgroundColor:'#121212',
    display:'flex',
    paddingTop:30,
    padding:20,
   justifyContent:'center',
   alignItems:'center'
    

  },
  logowrapper:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  logo:{
    width:200,
    height:100

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
    margin:4
  },
  button: {
  display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8,
    borderRadius: 20,
    backgroundColor: 'dodgerblue',
    width:'70%',
   
    marginTop:10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  links:{
    
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
    
  },
  forgotpassword:{
  
    letterSpacing: 0.2,
    color: 'grey',

  },
  footer:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    padding:15
    
  },
  icon:{
    margin:7,
    color:'grey',
    borderColor:'grey',
    borderWidth: 0.3,
    borderRadius: 10,
    padding:5
  },
  copyright:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    color: 'grey',
  }
    

})
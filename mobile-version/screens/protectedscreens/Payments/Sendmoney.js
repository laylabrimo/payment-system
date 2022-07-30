import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import { Button, Divider } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import Appconfirm from '../../../compinents/Confirm';
const Sendmoney = () => {
  let navigate= useNavigation()
  let [confirmopen,setconfirmopen]=React.useState(false)
  return (
    <View style={styles.sendmoneywrapper} >
      <Text style={{
        fontWeight:'bold',
        marginTop:30
      }}>Send Money</Text>
      <Divider style={{
        width:56,marginTop:4
      }}/>
     <View style={styles.inputswrapper}>
     <TextInput keyboardType='numeric' style={styles.input} placeholder='Account Number'/>
     <TextInput disableFullscreenUI style={styles.input} placeholder='Account Name'/>

     <TextInput keyboardType='numeric' style={styles.input} placeholder='Ammount'/>
     
     <Button onPress={()=>{
       setconfirmopen(true)

     }} style={{
       borderRadius:10,
       width:150,
       marginTop:9
     }}>Send</Button>
      <Appconfirm confirmopen={confirmopen} setconfirmopen={setconfirmopen}/>


      </View>
     
    </View>
  )
}

export default Sendmoney

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
    margin:4
  },
})
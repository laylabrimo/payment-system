import { StyleSheet,  View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider, Image, Text } from 'native-base';
import walleticon from '../../assets/icons/ewallet.png'
import addicon from '../../assets/icons/add.png' 
import sendmoneyicon from '../../assets/icons/send.png' 
import withdrowicon from '../../assets/icons/withdrow.png' 
import billsicon from '../../assets/icons/bills.png' 
import cardsicon from '../../assets/icons/cards.png'
import moneyrequestsicon from '../../assets/icons/moneyrequests.png' 
import mycontactsicon from '../../assets/icons/mycontacts.png' 
import diupic from '../../assets/icons/diu.jpeg' 
import { useNavigation } from '@react-navigation/native';
import {useContext} from 'react'
import { Usercontext } from '../contexts/Usercontext';







const Home = () => {
  let [user,setuser]=useContext(Usercontext)

  let navigate=useNavigation()
  let features=[
    {id:1,name:'Send Money',icon:sendmoneyicon,route:'sendmoney'},
    {id:2,name:'Withdrow',icon:withdrowicon,route:'withdrow'},
    {id:3,name:'Pay Bills',icon:billsicon,route:'paybills'},
    {id:4,name:'Saved Cards',icon:cardsicon,route:'savedcards'},
    {id:5,name:'Money Request',icon:moneyrequestsicon,route:'moneyrequest'},
    {id:6,name:'My Contacts',icon:mycontactsicon,route:'mycontacts'},
  ]
  console.log(user)
  return (
    <View style={styles.wrapper}>
      <View style={styles.front}>
     

        <View style={{
          width:300,
          height:90,
          // backgroundColor:'#f5f5f5',
          backgroundColor:'#174c61',
          borderRadius:6,
          display:'flex',
          flexDirection:'row',
          
         
        }}>
          <View style={{
            flex:1,
            justifyContent:'center',
            margin:12
          
            
          }}>
            <Text style={{
              fontSize:20,
              color:'white'
            }}>$ {user.finanaces.blance}.00</Text>
            <Text style={{
              fontSize:12,
              color:'#39ff12'
            }}>Current Blance</Text>

          </View>
          <View style={{
            flex:0.5,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
           
          }}> 
          <TouchableOpacity>
          <Image style={{
            tintColor:'white',
          }} source={addicon} alt='addicon'/>
          </TouchableOpacity>
         

          </View>
        
      
        </View>
     
      </View>

      <View style={styles.middle}>
      <Text style={{
        
        fontSize:15,
        fontWeight:'bold',
        letterSpacing:3
      }}>Features</Text>
      <Divider style={{
        width:40,
        marginTop:6
      }}/>
      <View style={{
        width:300,
        height:130,
        backgroundColor:'white',
        borderRadius:6,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:10
        
        

      }}>
   {features.map(feature=>(
     <TouchableOpacity onPress={()=>{
navigate.navigate(feature.route)
     }} key={feature.id}>
        <View  style={{
          width:80,
          height:80,
          backgroundColor:'white',
          borderRadius:6,
          margin:5,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
 
       }}>
   <View style={{
           width:50,
           height:50,
           backgroundColor:'#F1F3F6',
           borderRadius:6,
           margin:5,
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
         }}>
           <View style={{
            
           }}>
           <Image  alt={feature.name} source={feature.icon} style={{
            
             width:30,
             height:30
             
 
           }}/>
           </View>
          
           
 
       
        
         </View>
         <Text style={{
           fontSize:8,
           fontWeight:'bold'
         }}>{feature.name}</Text>
       </View>
     </TouchableOpacity>
   ))}

      </View>

</View>

<View style={styles.bottom}>
<View style={{
  width:300,
  height:125,
  backgroundColor:'#F1F3F6',
  borderRadius:6,
  margin:5,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  marginBottom:90,
 

}}>
  <Image alt='diu' source={diupic} style={{
 width:'100%',
 height:'100%',
 borderRadius:8
  }}/>

</View>

</View>
      
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

wrapper:{
  flex:1,
  marginTop:10,
  backgroundColor:'white',
  padding:15

 

},
front:{
  flex:0.4,
 marginTop:15,
  justifyContent:'center',
  alignItems:'center',

 
  

},
middle:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  
},
bottom:{
  flex:1,
 
  justifyContent:'center',
  alignItems:'center',


  
}

})
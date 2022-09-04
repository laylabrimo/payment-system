import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import authrequired from '../../auth.js/auth'
import Pamentconfirm from './Paymentconfirm';
import { useNavigation, useRoute } from '@react-navigation/native';
import qrplaceholder from '../../assets/qrplaceholder.png'
import { Image } from 'native-base';
import Loading from '../Loading';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  let [paymentid,setpaymentid]=useState('')
  let navigate=useNavigation()


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    let dataa=data
    // navigate to Pamentconfirm screen
    navigate.navigate('confirmpayment',{data:dataa})
  };

  if (hasPermission === null) {
    return <Loading/>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
 

  return (

    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={ handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
   <Image alt='qrcode place holder' style={{
    marginTop:450,

   }} width={300} height={300} source={qrplaceholder}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
  
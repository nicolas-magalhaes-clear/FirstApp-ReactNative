import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';



export default function App() {

  const [slideValue, setSlideValue] = useState(0)

  

  return (
    <View style={styles.container}>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        onValueChange={(value) => setSlideValue(parseInt(value))}
      />
      <Text>Valor: {slideValue}</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  picker: {
    width: '100%',
    
  },
  menu_logo: {
    fontSize: 50,
    fontWeight: '500'
  },
  pizza: {
    fontSize: 30
  },
  valor: {
    fontSize: 20
  }



});

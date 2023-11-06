import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useState } from 'react';




export default function App() {


  const [status, setStatus] = useState(false)
  

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={(valorSwitch) => setStatus(valorSwitch)}
        />
      <Text>Valor do switch: {status ? 'true' : 'false'}</Text>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  let nome = 'nicolas'

  const [texto, setTexto] = useState("")

  return (
    <View style={styles.container}>      
      <TextInput style={styles.input} value={texto} onChangeText={(e) => setTexto(e)}/>

      {texto.length > 0 ? <Text style={styles.texto}>Bem vindo! {texto}</Text> : null}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 30
    
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto:{
    color: 'green'
  }
});

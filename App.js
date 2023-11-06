import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [texto, setTexto] = useState("")

  function entrar(){
    if(texto.length === 0){
      alert('Digite seu nome para entrar!')
      return
    }
    alert(`Olá ${texto}`)
    
  }

  return (
    <View style={styles.container}>      
      <TextInput style={styles.input} value={texto} onChangeText={(e) => setTexto(e)}/>
      <Button title='Entrar' onPress={()=> entrar()}></Button>
      {texto.length > 0 ? <Text style={styles.texto}>Bem vindo! {texto}</Text> : null}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginTop: 30
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

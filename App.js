import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const frases = [
  "Frase1",
  "Frase2",
  "Frase3",
  "Frase4",
  "Frase5",
]

export default function App() {

  const [textoFrase, setTextoFrase] = useState("Frase aleatoria inicial")
  const [image, setImage] = useState(require('./src/biscoito.png'))

  function quebraBiscoito(){    
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(`"${frases[numeroAleatorio]}"`)
  }

  return (
    <View style={styles.container}>      
     
      <Image source={image} style={styles.img}/>

      <Text style={styles.textoFrase}>{textoFrase}</Text>
      
      <TouchableOpacity style={styles.botao} onPress={()=> quebraBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Abrir biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

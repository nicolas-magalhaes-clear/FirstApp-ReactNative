import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

let intervalTimer;

export default function App() {

  const [time, setTime] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const [buttonTimer, setButtonTimer] = useState('INICIAR')

  


  function iniciarTimer() {
    
    if(!timerActive){
      setTimerActive(true)
      setButtonTimer('PAUSAR')
      intervalTimer = setInterval(() => {    
        setTime((prev) => (prev+1))
      }, 1000);      
    }
    else if (timerActive){
      clearInterval(intervalTimer)
      setTimerActive(false)
      setButtonTimer('INICIAR')
    }


  }
  function limparTimer() {
    clearInterval(intervalTimer)
    setTime((prev) => prev*0)
    setTimerActive(false)
    setButtonTimer('INICIAR')
  }


  return (
    <View style={styles.container}>
      <Image source={require('./src/cronometro.png')} style={styles.cronometro} />
      <Text style={styles.timer}>{time}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={() => iniciarTimer()} >
          <Text style={styles.btnTexto}>{buttonTimer} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => limparTimer()}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  cronometro: {
    width: 250,
    height: 250
  },
  timer: {
    fontSize: 30,
    marginTop: 20
  },
  btnArea: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10
  },
  btnTexto: {
    fontSize: 20,
    color: '#00aeef',
    letterSpacing: 2,
    fontWeight: '500'
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  }
});

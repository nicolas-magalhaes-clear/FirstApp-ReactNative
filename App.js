import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  let nome = 'nicolas'

  return (
    <View style={styles.container}>
      <Text>Feito por {nome}</Text>
      <Text>
        Sujeito programador filho
      </Text>
      
      <Jobs nome="Ciclano"/>
    </View>
  );
}


function Jobs(props){
  return(
    <View>
    <Image source={{uri: 'https://sujeitoprogramador.com/steve.png'}} style={{width: 300, height: 300 }}/>
    <Text>Nome do fulano {props.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 0,
    backgroundColor: 'red',

  },
});

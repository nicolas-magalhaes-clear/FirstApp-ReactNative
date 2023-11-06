import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Pessoa from './src/Pessoa';


export default function App() {

  const [feed, setFeed] = useState([
    { id: 1, nome: 'Beltrano', idade: 22, email: 'beltrano@teste.com' },
    { id: 2, nome: 'Fulano', idade: 22, email: 'fulano@teste.com' },
    { id: 3, nome: 'Ciclano', idade: 22, email: 'ciclano@teste.com' }
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(item)=> item.id}
        renderItem={({ item }) => <Pessoa data={item} />}
      />

    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30

  },
  containerPessoa: {
    flexDirection: 'row',
    gap: 10
  }

});

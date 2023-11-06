import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';


export default function App() {

  const pizzas = [
    {
      sabor: 'Calabresa',
      valor: 49.90
    },
    {
      sabor: 'Frango com catupiry',
      valor: 39.90
    },
    {
      sabor: 'Portuguesa',
      valor: 45.90
    }
  ];

  const [selectedPizza, setSelectedPizza] = useState()

  return (
    <View style={styles.container}>
      <Text style={styles.menu_logo}>Menu Pizza</Text>


      <Picker style={styles.picker} selectedValue={selectedPizza} onValueChange={(ItemValue, ItemIndex) => setSelectedPizza(ItemValue)}>
        {pizzas.map((pizza,index)=> (
          <Picker.Item key={index}  value={`${pizza.valor}`} label={pizza.sabor}/>
        ))}
      </Picker>
      
      <Text style={styles.valor}>Valor: R$: {selectedPizza}</Text>


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

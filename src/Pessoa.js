import {StyleSheet, View, Text} from 'react-native'

export default function Pessoa(props) {
    return (
      <View style={styles.container}>
  
        <Text>{props.data.nome}</Text>
        <Text>{props.data.idade}</Text>
        <Text>{props.data.email}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    
    container: {
      flexDirection: 'row',
      gap: 10
    }
  
  });
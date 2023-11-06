import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

let intervalTimer;

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef'
  },
  box1: {
    backgroundColor: 'red',
    height: 400,
    width: '100%'
  },
  box2: {
    backgroundColor: 'green',
    height: 400,
    width: '100%'
  },
  box3: {
    backgroundColor: 'yellow',
    height: 400,
    width: '100%'
  },
  box4: {
    backgroundColor: 'orange',
    height: 400,
    width: '100%'
  }
});

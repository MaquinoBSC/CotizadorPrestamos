import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


export default function App(){

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text>Formulario header</Text>
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </>
  )
}


const styles= StyleSheet.create({
  safeArea: {
    backgroundColor: '#f00',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  }
});
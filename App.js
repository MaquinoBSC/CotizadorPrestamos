import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Button } from 'react-native';
import Form from './src/components/Form';
import color from './src/utils/colors';


export default function App(){
  const [capital, setCapital]= React.useState(null);
  const [interest, setInterest]= React.useState(null);
  const [months, setMonths]= React.useState(null);

  const onSubmit= ()=> {
    console.log("Capital -> ", capital);
    console.log("Interest -> ", interest);
    console.log("Months -> ", months);
}

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths} months={months} />
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Button title="Enviar" onPress={()=> onSubmit()} />
        <Text>Footer</Text>
      </View>
    </>
  )
}


const styles= StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  background: {
    backgroundColor: color.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  }
});
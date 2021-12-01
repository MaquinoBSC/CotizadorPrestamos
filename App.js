import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Button } from 'react-native';
import Form from './src/components/Form';
import ResultsCalculation from './src/components/ResultsCalculation';
import Footer from './src/components/Footer';
import color from './src/utils/colors';


export default function App(){
  const [capital, setCapital]= React.useState(null);
  const [interest, setInterest]= React.useState(null);
  const [months, setMonths]= React.useState("");
  const [total, setTotal]= React.useState({});
  const [errorMessage, setErrorMessage]= React.useState(null);


  const calculate= ()=> {
    setErrorMessage("");
    setTotal(null);

    if(!capital){
      setErrorMessage("Ingresa capital");
    }
    else if(!interest){
      setErrorMessage("Ingresa el interes");
    }
    else if(!months){
      setErrorMessage("Seleccion un mes");
    }
    else{
      const i= interest / 100;
      const fee= capital / ((1- Math.pow(i + 1, -months))/ i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * months).toFixed(2)
      })
    }
}

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths} months={months} />
      </SafeAreaView>
      <ResultsCalculation 
        errorMessage={errorMessage} 
        capital={capital} 
        interest={interest} 
        months={months} 
        total={total} 
      />
      <Footer calculate={calculate} />
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
import React from "react";
import { StyleSheet, View, Text} from 'react-native';


export default function ResultsCalculation(props){
    const { errorMessage, capital, interest, months, total }= props;

    return (
        <View style={styles.container}>
            {
                total && (
                    <View style={styles.boxResults}>
                        <Text style={styles.title}>Resumen</Text>
                        <DataResult titulo={"Cantidad solicitada"} value={`$ ${capital}`} />
                        <DataResult titulo={"Interes"} value={`${interest} %`} />
                        <DataResult titulo={"Plazos"} value={`${months} meses`} />
                        <DataResult titulo={"Pago mensual"} value={`$ ${total.monthlyFee}`} />
                        <DataResult titulo={"Pago total"} value={`$ ${total.totalPayable}`} />
                    </View>
                )
            }
            <View>
                <Text style={styles.error}>{ errorMessage }</Text>
            </View>
        </View>
    )
}


const DataResult= (props)=> {
    const {titulo, value}= props;

    return (
        <View style={styles.value}>
            <Text> { titulo }: </Text>
            <Text> { value } </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginHorizontal: 40,
    },  
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 100,
    },
    boxResults: {
        padding: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    }
});
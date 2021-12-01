import React from "react";
import { StyleSheet, View, Text} from 'react-native';


export default function ResultsCalculation(props){
    const { errorMessage, capital, interes, mounths, total }= props;

    return (
        <View style={styles.container}>
            {
                total && (
                    <Text>Resut total</Text>
                )
            }
            <View>
                <Text style={styles.error}>{ errorMessage }</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 40,
    },  
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
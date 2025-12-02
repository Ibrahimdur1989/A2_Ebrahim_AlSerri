import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";


function MainScreen() {
    const navigation = useNavigation();

    const [baseCurrency, setBaseCurrency] = useState('CAD');
    const [targeCurrency, setTargetCurrency] = useState('USD');
    const [anount, setAmount] = useState('1');
    const [result, setResult] = useState('');
    const [rate, setRate] = useState('');

    const handleConvert = () => {
        console.log('Convert pressed', baseCurrency, targetCurrency, amount);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Convert</Text>

            <Text style={styles.label}>Base currency (CAD)</Text>
            <TextInput 
                style={styles.input} 
                value="baseCurrency" 
                onChangeText={setBaseCurrency} 
                autoCapitalize="characters"/>

            <Text style={styles.label}>Target currency (USD)</Text>
            <TextInput 
                style={styles.input} 
                value="targetCurrency" 
                onChangeText={setTargetCurrency} 
                autoCapitalize="characters"/>

            <Text style={styles.label}>Amount</Text>
            <TextInput 
                style={styles.input} 
                value="amount" 
                onChangeText={setAmount} 
                autoCapitalize="numeric"/>

            <Button title="Convert" onPress={handleConvert} />

            {result !== '' && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Converted amount: {result}</Text>
                    <Text style={styles.resultText}>Rate used: {rate}</Text>
                </View>
            )}

            <View style={styles.aboutButton}>
                <Button title="About this app" onPress={() => navigation.navigate('About')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'flex-start'
    },

    title: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: 'bold'
    },

    label: {
        marginTop: 12,
        marginBottom: 4
    },

    input: {
        borderWidth: 1,
        borderColor: '#888',
        padding: 8,
        borderRadius: 4
    },

    resultContainer: {
        marginTop: 20
    },

    resultText: {
        fontSize: 16,
        marginBottom: 4
    },

    aboutButton: {
        marginTop: 24
    }
});

export default MainScreen; 
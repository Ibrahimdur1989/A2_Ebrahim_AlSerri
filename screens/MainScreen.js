import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const API_KEY = "fca_live_7RDNcPsdq5F62a3LR8K1FMCJPmaqpe18DMlz75KG";

function MainScreen() {
    const navigation = useNavigation();

    const [baseCurrency, setBaseCurrency] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('');
    const [rate, setRate] = useState('');

    const handleConvert = async () => {

        try {
            if (!baseCurrency || !targetCurrency || !amount) {
                Alert.alert("Error", "Please fill in all fields.");
                return;
            }

            const amountNumber = parseFloat(amount);
            if (isNaN(amountNumber)) {
                Alert.alert("Error", "Amount must be a number.");
                return;
            }

            const base = baseCurrency.trim().toUpperCase();
            const target = targetCurrency.trim().toUpperCase();

            if (base.length !== 3 || target.length !== 3) {
                Alert.alert(
                    "Error", "Currency codes must be 3 letters: CAD, USD, EUR, etc."
                );
                return;
            }

            console.log("Convert pressed", base, target, amountNumber);

            

            const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=${target}&base_currency=${base}`;

            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok || data.error) {
                console.log("API error:", data);
                Alert.alert(
                    "Error", data.error?.message || "Currency not found or API error."
                );
                return;
            }

            const rates = data.data || {};
            console.log("Rate from API:", rates);

            
            const rateTarget = rates[target];
            

            if (typeof rateTarget !== "number") {
                console.log("Invalid rate:", rates)
                Alert.alert("Error", `Currency "${target}" not found in API response.`);
                return;
            }

            
            const converted = amountNumber * rateTarget;

            setRate(rateTarget.toFixed(4));
            setResult(converted.toFixed(2));
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong while converting.");
        }        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Convert</Text>

            <Text style={styles.label}>Base currency</Text>
            <TextInput 
                style={styles.input}
                placeholder="CAD, USD, EUR, etc." 
                value={baseCurrency}
                onChangeText={setBaseCurrency} 
                autoCapitalize="characters"/>

            <Text style={styles.label}>Target currency</Text>
            <TextInput 
                style={styles.input}
                placeholder="USD, CAD, EUR, etc." 
                value={targetCurrency} 
                onChangeText={setTargetCurrency} 
                autoCapitalize="characters"/>

            <Text style={styles.label}>Amount</Text>
            <TextInput 
                style={styles.input}
                placeholder="Amount" 
                value={amount} 
                onChangeText={setAmount} 
                keyboardType="numeric"/>

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
        justifyContent: 'flex-start',
    },

    title: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: 'bold',
    },

    label: {
        marginTop: 12,
        marginBottom: 4,
    },

    input: {
        borderWidth: 1,
        borderColor: '#888',
        padding: 8,
        borderRadius: 4,
    },

    resultContainer: {
        marginTop: 20,
    },

    resultText: {
        fontSize: 16,
        marginBottom: 4,
    },

    aboutButton: {
        marginTop: 24,
    }
});

export default MainScreen; 
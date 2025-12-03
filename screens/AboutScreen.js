import React from "react";
import { View, Text, StyleSheet } from "react-native";


function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About This App</Text>

            <Text style={styles.text}>Student Name: Ebrahim Al-Serri</Text>
            <Text style={styles.text}>Student ID: 101085527</Text>

            <Text style={[styles.text, styles.description]}>
                This application converts an amount from a base currency to 
                a destination currency using live exchange rates from FreeCurrencyAPI.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c4e9bdff'
    },

    title: {
        fontSize: 24,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    
    text: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        marginTop: 4,
    },

    description: {
        marginTop: 80
    }
});

export default AboutScreen;
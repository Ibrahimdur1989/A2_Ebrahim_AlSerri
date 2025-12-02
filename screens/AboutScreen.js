import React from "react";
import { View, Text, StyleSheet } from "react-native";


function AboutScreen() {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>About This App</Text>

            <Text style={StyleSheet.text}>Student Name: Ebrahim Al-Serri</Text>
            <Text style={StyleSheet.text}>Student ID: 101085527</Text>

            <Text style={[StyleSheet.text, StyleSheet.description]}>
                This application converts an amount from a base currency to 
                a destination currency using live exchange rates from FreeCurrencyAPI.
            </Text>
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
    
    text: {
        fontSize: 16,
        marginBottom: 8
    },

    description: {
        marginTop: 12
    }
});

export default AboutScreen;
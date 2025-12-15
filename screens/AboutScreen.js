// React
import React from "react";

// React Native
import { View, Text, StyleSheet } from "react-native";


function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About This App</Text>

            <Text style={styles.text}>Currency Converter Mobile Application</Text>


            <Text style={[styles.text, styles.description]}>
                This application allows users to convert an amount from a base currency to
                a destination currency using live exchange rates provided by FreeCurrencyAPI.
            </Text>

            <Text style={styles.footer}>
                Developed by Ebrahim Al-Serri
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
    },

    footer: {
        fontSize: 14,
        color: "#555",
        textAlign: "center",
        marginTop: "auto",
        paddingBottom: 10,
    }
});

export default AboutScreen;
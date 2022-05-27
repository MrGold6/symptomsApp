import React from "react";
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {globalStyle} from "../styles/style";
import {SafeAreaView} from "react-native-web";


export default function FullInfo({item}) {
    return (
        <View style={globalStyle.main}>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Дата:</Text>
                <Text> {item.date}</Text>
            </Text>

            <Text style={styles.full}>
                <Text style={styles.labelText}>Симптоми:</Text>
                <Text> {item.symptoms}</Text>
            </Text>

            <Text style={styles.full}>
                <Text style={styles.labelText}>Нотатки:</Text>
                <Text> {item.note}</Text>
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    full:{
        fontFamily:'mt-light',
        fontSize: 20,
        margin: 5,
        color:'#474747'
    },
    labelText: {
        fontFamily:'mt-bold',

    }

});


import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "../styles/style";

export default function FullInfo({route}) {
    return (
        <View style={globalStyle.main}>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Дата:</Text>
                <Text>{route.params.date}</Text>
            </Text>

            <Text style={styles.full}>
                <Text style={styles.labelText}>Симптоми:</Text>
                <Text> {route.params.symptoms}</Text>
            </Text>

            <Text style={styles.full}>
                <Text style={styles.labelText}>Нотатки:</Text>
                <Text> {route.params.notes ? route.params.notes : "-"}</Text>
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-light',
        fontSize: 20,
        margin: 5,
        color: '#474747'
    },
    labelText: {
        fontFamily: 'mt-bold',

    }

});


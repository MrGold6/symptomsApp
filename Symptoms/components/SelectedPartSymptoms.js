import React, {useState} from "react";
import {Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../styles/style";
import {Row, Rows, Table} from "react-native-table-component";
import {DataTable} from 'react-native-paper';
import SelectMultiple from "react-native-select-multiple";

export default function SelectedPartSymptoms({symptoms, selectedSymptoms, onSelectionsChange}) {


    return (
        <View style={globalStyle.main}>
            <SelectMultiple
                items={symptoms}
                selectedItems={selectedSymptoms}
                onSelectionsChange={onSelectionsChange}
                keyExtractor={symptoms.forEach((item) => item.id)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-light',
        fontSize: 16,
        marginTop: 5,
        color: '#474747'
    },
 

});


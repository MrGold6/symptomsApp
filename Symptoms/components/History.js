import React, {useState, useEffect} from "react";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "../styles/style";
import FullInfo from "./FullInfo";
import {FontAwesome} from '@expo/vector-icons';
import {additionalLinks} from "./shared/links";

export default function History({navigation}) {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        console.log();
        fetch(additionalLinks.PATIENT_INFO, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                setRecords(data.symptomsHistories)
                sortRecords();
            })
    }, []);

    //TODO: sort dont work

    // sort data
    const sortRecords = () => {
        setRecords(records.sort(function (b, a) {
            console.log("hi")
            return a.date - b.date;
        }))
    };

    return (
        <View style={globalStyle.main}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Дата</Text>
                <Text style={styles.tableHeaderText}>Симптоми</Text>
                <Text style={styles.tableHeaderText}>Нотатки</Text>
                <Text style={styles.tableHeaderText}>Дії</Text>
            </View>

            <FlatList data={records} renderItem={({item}) => (
                <View style={styles.table}>
                    <Text style={{marginRight: 10,}}>{item.date}</Text>
                    <Text style={{
                        position: 'absolute',
                        left: 85
                    }}>{item.symptoms.length < 12 ? item.symptoms : item.symptoms.slice(0, 12) + '...'}</Text>
                    <Text style={{
                        position: 'absolute',
                        left: 220
                    }}>{item.notes ? item.notes.slice(0, 7) + '...' : "-"}</Text>
                    <FontAwesome style={{position: 'absolute', right: 2}} name="eye" size={24} color="black"
                                 onPress={() => navigation.navigate('FullInfo', item)}/>
                </View>
            )}/>
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
    header: {
        fontSize: 25,
        marginTop: 25
    },
    image: {
        width: '100%',
        height: 200,
    },
    table:
        {
            flexDirection: 'row',
            alignItems: "center",
            marginBottom: 20,
        },
    tableHeader:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            fontSize: 30,
            borderBottomColor: 'black',
            borderBottomWidth: 2,
        },
    tableHeaderText:
        {
            fontSize: 20,
        },


});


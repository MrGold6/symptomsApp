import React, {useState} from "react";
import {Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../styles/style";
import {Row, Rows, Table} from "react-native-table-component";
import {DataTable} from 'react-native-paper';
import {Ionicons} from "@expo/vector-icons";
import SelectedPartSymptoms from "./SelectedPartSymptoms";
import FullInfo from "./FullInfo";
import { FontAwesome } from '@expo/vector-icons';

//как передать елемент модальному окну???
export default function History({news}) {

    const [modalWindow, setModalWindow] = useState(false);

    return (
        <View style={globalStyle.main}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Дата</Text>
                <Text style={styles.tableHeaderText}>Симптоми</Text>
                <Text style={styles.tableHeaderText}>Нотатки</Text>
                <Text style={styles.tableHeaderText}>Дії</Text>
            </View>

            <FlatList data={news} renderItem={({item})=> (
                    <View style={styles.table}>
                        <Text style={{marginRight:10,}}>{item.date}</Text>
                        <Text  style={{position: 'absolute', left: 85}}>{item.symptoms.slice(0, 12) + '...'}</Text>
                        <Text  style={{position: 'absolute', left: 220}}>{item.note.slice(0, 7) + '...'}</Text>
                        <FontAwesome style={{position: 'absolute', right: 2}} name="eye" size={24} color="black" onPress={()=>setModalWindow(true)}/>

                        <Modal visible={modalWindow}>
                            <View style={globalStyle.main}>
                                <Ionicons name="close-circle" size={26} color="red" onPress={()=>setModalWindow(false)}/>
                                <FullInfo item={item}/>
                            </View>
                        </Modal>
                    </View>
            )} />
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


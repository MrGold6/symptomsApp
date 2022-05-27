import React from "react";
import {Button, Image, StyleSheet, TextInput, View} from 'react-native';
import {globalStyle} from "../styles/style";
import {Formik} from "formik";
import {SafeAreaView} from "react-native-web";


export default function Form({addSymptoms, selectedSymptoms}) {
    const names = selectedSymptoms.map(function(item) {
        return item['value'];
    });

    const formatDate = (d) => {
        var mm = d.getMonth() + 1; // getMonth() is zero-based
        var dd = d.getDate();
        return [
            (dd>9 ? '' : '0') + dd,
            (mm>9 ? '' : '0') + mm,
            d.getFullYear()
        ].join('.');
    }

    const date1 = formatDate(new Date());


    return (
        <View>
            <Formik initialValues={{symptoms: names.join(', '), date: date1, note: ''}} onSubmit={(values, action) => {
                addSymptoms(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.symptoms}
                            placeholder={'Симптоми'}
                            placeholderTextColor={'silver'}
                            editable = {false}
                            onChangeText={props.handleChange('symptoms')}/>
                        <TextInput
                            style={styles.input}
                            value={props.values.date}
                            placeholder={'Дата'}
                            placeholderTextColor={'silver'}
                            editable = {false}
                            onChangeText={props.handleChange('date')}/>
                        <TextInput
                            style={styles.forNotes}
                            value={props.values.note}
                            multiline
                            placeholder={'Нотатки'}
                            placeholderTextColor={'silver'}
                            onChangeText={props.handleChange('note')}/>


                        <Button title={'Add'} onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input:
        {
            borderWidth: 2,
            marginTop: 15,
            padding: 10,
            borderColor: 'silver',
            borderRadius: 5,

        },

    forNotes:
        {
            borderWidth: 2,
            marginTop: 15,
            padding: 10,
            borderColor: 'silver',
            borderRadius: 5,
            paddingBottom:150

        }
});


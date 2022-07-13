import React from "react";
import {Button, Image, StyleSheet, TextInput, View} from 'react-native';
import {Formik} from "formik";


export default function Form({addSymptoms, selectedSymptoms}) {
    const names = selectedSymptoms.map(function(item) {
        return item['value'];
    });

    const formatDate = (d) => {
        var mm = d.getMonth() + 1;
        var dd = d.getDate();
        return [
            d.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
        ].join('-');
    }

    const date1 = formatDate(new Date());

    return (
        <View>

            <Formik initialValues={{symptoms: names.join(', '), date: date1, notes: ''}} onSubmit={(values, action) => {
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
                            value={props.values.notes}
                            multiline
                            placeholder={'Нотатки'}
                            placeholderTextColor={'silver'}
                            onChangeText={props.handleChange('notes')}/>


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


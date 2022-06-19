import React from "react";
import {Button, Image, StyleSheet, TextInput, View} from 'react-native';
import {globalStyle} from "../styles/style";
import {Formik} from "formik";
import { AntDesign } from '@expo/vector-icons';
import {ApiLinks} from "./shared/links";

export default function Login({navigation}) {
    const loginL =  (values) => {
        const formData = new FormData();
        formData.append('username', values.login);
        formData.append('password', values.password);
        fetch(ApiLinks.LOGIN, {
            method: 'POST',
            body: formData,
            credentials: 'include',
            cache: 'no-cache',
        }).then(response => {
            if (response.status === 200) {
                console.log("cool");
            } else {
                console.log("error");
            }
        });
    }


    return (
        <View>
            <Formik initialValues={{login: '', password: ''}} onSubmit={(values, action) => {
                loginL(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.login}
                            placeholder={'Введіть логін'}
                            placeholderTextColor={'silver'}
                            onChangeText={props.handleChange('login')}/>
                        <TextInput
                            style={styles.input}
                            value={props.values.password}
                            placeholder={'Введіть пароль'}
                            placeholderTextColor={'silver'}
                            onChangeText={props.handleChange('password')}
                            secureTextEntry={true}/>

                        <AntDesign name="login" style={{alignSelf:'center', margin:10}} size={30} color="#1847c7" onPress={props.handleSubmit}/>
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
            marginLeft: 5,
            marginRight: 5,
        }
});




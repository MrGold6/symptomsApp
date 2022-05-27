import React, {useState} from "react";
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "../styles/style";
import { FontAwesome } from '@expo/vector-icons';

export default function Profile({navigation}) {

    const [user, setUser] = useState([]);


    const getUser = () => {
        fetch('http://localhost:8080/user/getUserInfo', {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                setUser(data)
            })


    }

    return (
        <View style={globalStyle.main}>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Ім'я:</Text>
                <Text>{user.username}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Прізвище:</Text>
                <Text> Кос</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Пошта:</Text>
                <Text> v@gmail.com</Text>
            </Text>

            <FontAwesome style={{alignSelf:'center', margin:5}} name="sign-out" size={30} color="#1847c7" onPress={()=> navigation.navigate('Login')}/>

        </View>
    );
}

const styles = StyleSheet.create({
    full:{
        fontFamily:'mt-light',
        fontSize: 18,
        margin: 5,
        color:'#474747'
    },
    labelText: {
        fontFamily:'mt-bold',

    },

});


import React, {useState, useEffect} from "react";
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "../styles/style";
import {EvilIcons, FontAwesome} from '@expo/vector-icons';
import {additionalLinks} from "./shared/links";

export default function Profile({navigation}) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        console.log();
        fetch(additionalLinks.PATIENT_INFO, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                setUser(data)
            })
    }, []);


    return (
        <View style={globalStyle.main}>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Ім'я: </Text>
                <Text>{user.name}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Прізвище: </Text>
                <Text> {user.surname}</Text>
            </Text>

            <Text style={styles.full}>
                <Text style={styles.labelText}>Номер телефону: </Text>
                <Text> {user.telephone_number}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Пошта: </Text>
                <Text>{user.email}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Номер медичної карти: </Text>
                <Text>{user.rntrc}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Алергія на: </Text>
                <Text>{user.allergic_history ? user.allergic_history : "-"}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Група крові: </Text>
                <Text>{user.blood_type}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Резус фактор: </Text>
                <Text>{user.rh}</Text>
            </Text>
            <Text style={styles.full}>
                <Text style={styles.labelText}>Хронічні захворювання: </Text>
                <Text>{user.chronic_disease ? user.chronic_disease : "-"}</Text>
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


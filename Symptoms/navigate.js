import React, {useEffect, useState} from 'react';
import Main from "./components/Main";
import Profile from "./components/Profile";
import History from "./components/History";
import Login from "./components/Login";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import FullInfo from "./components/FullInfo";
import Form from "./components/Form";
import {additionalLinks, ApiLinks} from "./components/shared/links";

const Stack = createStackNavigator();

export default function Navigate()
{
    //TODO: check if user token is valid

    /*  const [signIn, setSignIn] = useState(false);

     useEffect(async () => {

         console.log();
         fetch(ApiLinks.PATIENT, {
             method: 'GET',
             credentials: 'include',
             cache: 'no-cache',
         })
             .then(response => response.json())
             .then(data => {
                 setBodyParts(data)
             })

     }, []);*/



    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name={'Main'}
                component={Main}
                options={
                    {
                        title: 'Головна сторінка',
                        headerStyle: {backgroundColor: '#9dc8e0', height: 55},
                        headerTitleStyle:{fontWeight: '400'}
                    }
                }
            />

            <Stack.Screen
                name={'Profile'}
                component={Profile}
                options={
                    {
                        title: 'Профіль',
                        headerStyle: {backgroundColor: '#9dc8e0', height: 70},
                    }
                }
            />
            <Stack.Screen
                name={'History'}
                component={History}
                options={
                    {
                        title: 'Історія',
                        headerStyle: {backgroundColor: '#9dc8e0', height: 70},
                    }
                }
            />
            <Stack.Screen
                name={'FullInfo'}
                component={FullInfo}
                options={
                    {
                        title: 'Повна інформація',
                        headerStyle: {backgroundColor: '#9dc8e0', height: 70},
                    }
                }
            />
            <Stack.Screen
                name={'Login'}
                component={Login}
                options={
                    {
                        title: 'Вхід',
                        headerStyle: {backgroundColor: '#9dc8e0', height: 70},
                    }
                }
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
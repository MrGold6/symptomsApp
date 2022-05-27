import React from 'react';
import Main from "./components/Main";
import Profile from "./components/Profile";
import History from "./components/History";
import Login from "./components/Login";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import FullInfo from "./components/FullInfo";
import Form from "./components/Form";

const Stack = createStackNavigator();

export default function Navigate()
{
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
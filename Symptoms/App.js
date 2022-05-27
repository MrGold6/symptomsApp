import React from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {globalStyle} from "./styles/style";
import  * as Font from 'expo-font';
import {useState} from "react";
import AppLoading from 'expo-app-loading';
import MainStack from "./navigate";


const  fonts = () =>Font.loadAsync({
      'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
      'mt-ital': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
    });

export default function App() {
  const [font, setFont] = useState(false);
  if(font) {
    return (
            <MainStack />
    );
  }
  else{
    return (
        <AppLoading startAsync={fonts}
                    onFinish={()=>setFont(true)}
                    onError={console.warn}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});

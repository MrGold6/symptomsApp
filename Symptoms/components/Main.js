import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, FlatList, Image, Modal, Button,} from 'react-native';
import {globalStyle} from "../styles/style";
import { StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Form from "./Form";
import SelectedPartSymptoms from "./SelectedPartSymptoms";
import History from "./History";
import SvgComponent from "./Svg";
import {additionalLinks} from "./shared/links";


export default function Main({navigation}) {
 const loadScene = ()=> {
        navigation.navigate('Contact');
    }
    const [news, setNews] = useState([]);

    useEffect(() => {
        console.log();
        fetch(additionalLinks.PATIENT_INFO, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                setNews(data.symptomsHistories)
            })
    }, []);


    const [modalWindow, setModalWindow] = useState(false);
    const [modalWindow2, setModalWindow2] = useState(false);
    const [modalWindow3, setModalWindow3] = useState(false);

    const addSymptoms = (article) => {
        article.key=Math.random().toString();
        setNews((list)=>{
            return[
                article,
                ...list
            ]
        });
        setModalWindow2(false);
        clearSymptoms();


    }



    const [symptoms, setSymptoms]  = [
        { label: 'Головний біль', value: 'Головний біль'},
        { label: 'Запаморочення', value: 'Запаморочення'},
        { label: 'Тошнота', value: 'Тошнота'},
        { label: "Порушення пам'яті", value: "Порушення пам'яті" },
        { label: 'Підвищення температури тіла', value: 'Підвищення температури тіла' },
        { label: 'Випадіння волосся', value: 'Випадіння волосся'},
        { label: 'Лицьовий біль', value: 'Лицьовий біль'},
        { label: 'Слабкість лицьових м\'яз', value: 'Слабкість лицьових м\'яз' },
        { label: 'Зміна шкіри лиця', value: 'Зміна шкіри лиця'},
        { label: 'Оніміння лиця', value: 'Оніміння лиця'},
        { label: 'Набряклість лиця', value: 'Набряклість лиця'},
    ]

    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const onSelectionsChange = newSelections => {
        setSelectedSymptoms(newSelections);
    }

    const clearSymptoms = () => {
        setSelectedSymptoms(() => {
            return []
        });
        setModalWindow2(false);
    }


    return (
        <View style={globalStyle.main}>
            <Modal visible={modalWindow}>
                <View style={globalStyle.main}>
                    <Ionicons name="close-circle" size={26} color="red" onPress={()=>setModalWindow(false)}/>
                    <Text style={styles.title}>Симптоми для голови</Text>
                    <SelectedPartSymptoms  symptoms={symptoms} selectedSymptoms={selectedSymptoms} onSelectionsChange={onSelectionsChange}/>
                </View>
            </Modal>

            <Modal visible={modalWindow2}>
                <View style={globalStyle.main}>
                    <Ionicons name="close-circle" size={26} color="red" onPress={()=>setModalWindow2(false)}/>
                    <Text style={styles.title}>Збереження симптомів</Text>
                    <Form addSymptoms={addSymptoms} selectedSymptoms={selectedSymptoms}/>
                </View>
            </Modal>

            <Modal visible={modalWindow3}>
                <View style={globalStyle.main}>
                    <Ionicons name="close-circle" size={26} color="red" onPress={()=>setModalWindow3(false)}/>
                    <History news={news}/>
                </View>
            </Modal>


            <View style={styles.icons}>
                <Ionicons name="time-sharp" size={34} color="#2b59d6" style={styles.div}  onPress={()=>setModalWindow3(true)}/>
                <EvilIcons name="user" size={40} color="black" style={styles.div} onPress={()=> navigation.navigate('Profile')}/>
            </View>

            <View style={styles.body}>
                <SvgComponent  onPress={()=>setModalWindow(true)}/>
            </View>



            <View>
                <FlatList data={selectedSymptoms} style={styles.flatList} renderItem={({item})=> (
                    <View>
                        <Text  style={styles.flatListText}>{item.label}, </Text>
                    </View>

                )}
                 horizontal
                />
                <Ionicons name="add-circle-sharp" size={30} color="green" style={{ alignSelf:'center'}}  onPress={()=>setModalWindow2(true)}/>

            </View>

        </View>
    );

}
const styles = StyleSheet.create({
    icons:
        {
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    body:
        {
            flex: 1,
            alignSelf: 'center',
            width: '90%',
            justifyContent: "center",
            alignItems: "center",

        },


    header: {
        marginBottom: 5
    },
    flatList: {
        height: 30,
        backgroundColor: '#c3d3e0',
        flexGrow: 0,
        borderRadius:4

    },
    flatListText:
        {
            fontFamily:'mt-light',
            fontSize: 18,

        },
    title:
        {
            alignSelf: 'center',
            fontFamily: 'mt-bold',
            fontSize:20
        }

});


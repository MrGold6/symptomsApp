import React, {useState, useEffect} from "react";
import {Text, View, FlatList, Modal,} from 'react-native';
import {globalStyle} from "../styles/style";
import {StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {EvilIcons} from '@expo/vector-icons';
import Form from "./Form";
import SelectedPartSymptoms from "./SelectedPartSymptoms";
import History from "./History";
import SvgComponent from "./Svg";
import {ApiLinks} from "./shared/links";

export default function Main({navigation}) {

    const [modalWindow, setModalWindow] = useState(false);
    const [modalWindow2, setModalWindow2] = useState(false);


    const addSymptoms = async (article) => {
        console.log(article);

        fetch(ApiLinks.PATIENT, {
            method: 'POST',
            body: JSON.stringify(article),
            credentials: 'include',
            cache: 'no-cache',
            headers:new Headers({
                'Content-Type':  'application/json'
            })
        }).then(response => {
            if (response.status === 200) {
                console.log("cool");
            } else {
                console.log("error");
            }
        });
        setModalWindow2(false);
        clearSymptoms();
    }

    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        console.log();
        fetch(ApiLinks.BODY_PART, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                setBodyParts(data)
            })
    }, []);

    const [bodyPartsName, setBodyPartsName] = useState([]);
    const [symptoms, setSymptoms] = useState([]);

    const symptomsByBodyPart = (id) => {
        let bodyPartsById = bodyParts.find(x => x.id == id);
        const allSymptoms = bodyPartsById.symptoms;

        allSymptoms.forEach(element => {
            element.value = element.name;
            element.label = element.name;
        });

        setSymptoms(allSymptoms);
        setBodyPartsName(bodyPartsById.name);

        setModalWindow(true);

    }

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
                    <Ionicons name="close-circle" size={26} color="red" onPress={() => setModalWindow(false)}/>
                    <Text style={styles.title}>Симптоми для {bodyPartsName}</Text>
                    <SelectedPartSymptoms symptoms={symptoms} selectedSymptoms={selectedSymptoms}
                                          onSelectionsChange={onSelectionsChange}/>
                </View>
            </Modal>

            <Modal visible={modalWindow2}>
                <View style={globalStyle.main}>
                    <Ionicons name="close-circle" size={26} color="red" onPress={() => setModalWindow2(false)}/>
                    <Text style={styles.title}>Збереження симптомів</Text>
                    <Form addSymptoms={addSymptoms} selectedSymptoms={selectedSymptoms}/>
                </View>
            </Modal>

            <View style={styles.icons}>
                <Ionicons name="time-sharp" size={34} color="#2b59d6" style={styles.div}
                          onPress={() => navigation.navigate('History')}/>
                <EvilIcons name="user" size={40} color="black" style={styles.div}
                           onPress={() => navigation.navigate('Profile')}/>
            </View>

            <View style={styles.body}>
                <SvgComponent onPress={() => symptomsByBodyPart(1)}/>
            </View>

            <View>
                <FlatList data={selectedSymptoms} style={styles.flatList} renderItem={({item}) => (
                    <View>
                        <Text
                            style={styles.flatListText}>{selectedSymptoms.at(-1).label === item.label ? item.label : item.label + ", "}  </Text>
                    </View>

                )}
                          horizontal
                />
                <Ionicons name="add-circle-sharp" size={30} color="green" style={{alignSelf: 'center'}}
                          onPress={() => setModalWindow2(true)}/>

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
        borderRadius: 4

    },
    flatListText:
        {
            fontFamily: 'mt-light',
            fontSize: 18,

        },
    title:
        {
            alignSelf: 'center',
            fontFamily: 'mt-bold',
            fontSize: 20
        }

});


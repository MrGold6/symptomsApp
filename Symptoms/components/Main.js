import React, {useState, useEffect} from "react";
import {Text, View, FlatList, Modal,} from 'react-native';
import {globalStyle} from "../styles/style";
import {StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {EvilIcons} from '@expo/vector-icons';
import Form from "./Form";
import SelectedPartSymptoms from "./SelectedPartSymptoms";
import History from "./History";
import {ApiLinks} from "./shared/links";
import {additionalLinks} from "./shared/links";
import ImageMapper from 'react-native-image-mapper';


export default function Main({navigation}) {

    const [modalWindow, setModalWindow] = useState(false);
    const [modalWindow2, setModalWindow2] = useState(false);
    const [revert, setRevert] = useState(false);
    const [sex, setSex] = useState(1);


    const addSymptoms = async (article) => {
        console.log(article);

        fetch(ApiLinks.PATIENT, {
            method: 'POST',
            body: JSON.stringify(article),
            credentials: 'include',
            cache: 'no-cache',
            headers: new Headers({
                'Content-Type': 'application/json'
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

    useEffect(async () => {
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

        fetch(additionalLinks.PATIENT_SEX, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                console.log()
                setSex(data)
            })
    }, []);

    const [bodyPartsName, setBodyPartsName] = useState([]);
    const [symptoms, setSymptoms] = useState([]);

    const symptomsByBodyPart = (item) => {
        let id = item.name;
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

//img
    const womanFrontBackground = require('../assets/images/woman-front.jpg');
    const woman_front = [
        {
            id: 'head',
            name: '1',
            shape: 'rectangle',
            width: 50,
            height: 25,
            x1: 103,
            y1: 5,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'eyes',
            name: '2',
            shape: 'rectangle',
            width: 35,
            height: 15,
            x1: 110,
            y1: 32,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'nose',
            name: '3',
            shape: 'rectangle',
            width: 17,
            height: 10,
            x1: 119,
            y1: 48,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'mouth',
            name: '4',
            shape: 'rectangle',
            width: 20,
            height: 14,
            x1: 117,
            y1: 59,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'ear-left',
            name: '5',
            shape: 'rectangle',
            width: 10,
            height: 17,
            x1: 99,
            y1: 39,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'ear-right',
            name: '5',
            shape: 'rectangle',
            width: 10,
            height: 17,
            x1: 147,
            y1: 39,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'neck',
            name: '6',
            shape: 'rectangle',
            width: 28,
            height: 15,
            x1: 113,
            y1: 74,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'breast',
            name: '7',
            shape: 'rectangle',
            width: 95,
            height: 27,
            x1: 81,
            y1: 92,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'boobs',
            name: '8',
            shape: 'rectangle',
            width: 85,
            height: 31,
            x1: 85,
            y1: 122,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'upper-abdomen',
            name: '9',
            shape: 'rectangle',
            width: 65,
            height: 35,
            x1: 95,
            y1: 155,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'middle-abdomen',
            name: '10',
            shape: 'rectangle',
            width: 77,
            height: 25,
            x1: 89,
            y1: 191,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'down-abdomen',
            name: '11',
            shape: 'rectangle',
            width: 90,
            height: 40,
            x1: 83,
            y1: 217,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'crotch',
            name: '12',
            shape: 'rectangle',
            width: 28,
            height: 20,
            x1: 113,
            y1: 238,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'thighs',
            name: '13',
            shape: 'rectangle',
            width: 95,
            height: 90,
            x1: 80,
            y1: 259,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'marrow-bones',
            name: '14',
            shape: 'rectangle',
            width: 63,
            height: 33,
            x1: 95,
            y1: 350,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'ankle',
            name: '15',
            shape: 'rectangle',
            width: 70,
            height: 100,
            x1: 92,
            y1: 385,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'feet',
            name: '16',
            shape: 'rectangle',
            width: 70,
            height: 43,
            x1: 92,
            y1: 487,
            //prefill: 'blue',
            fill: 'blue'
        },
        //hands
        {
            id: 'left-hand',
            name: '17',
            shape: 'rectangle',
            width: 40,
            height: 50,
            x1: 7,
            y1: 240,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'right-hand',
            name: '17',
            shape: 'rectangle',
            width: 40,
            height: 50,
            x1: 210,
            y1: 240,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 80,
            x1: 50,
            y1: 100,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'right-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 80,
            x1: 170,
            y1: 100,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'right-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 55,
            x1: 185,
            y1: 184,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 55,
            x1: 35,
            y1: 184,
            //prefill: 'red',
            fill: 'blue'
        },

    ]
    const womanBackBackground = require('../assets/images/woman-back1.jpg');
    const woman_back = [
        {
            id: 'back-head',
            name: '20',
            shape: 'rectangle',
            width: 51,
            height: 67,
            x1: 99,
            y1: 4,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'neck',
            name: '6',
            shape: 'rectangle',
            width: 28,
            height: 15,
            x1: 111,
            y1: 74,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'back',
            name: '21',
            shape: 'rectangle',
            width: 80,
            height: 120,
            x1: 87,
            y1: 92,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'buttocks',
            name: '22',
            shape: 'rectangle',
            width: 95,
            height: 57,
            x1: 80,
            y1: 217,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'anus',
            name: '23',
            shape: 'rectangle',
            width: 28,
            height: 25,
            x1: 113,
            y1: 253,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'thighs',
            name: '13',
            shape: 'rectangle',
            width: 95,
            height: 68,
            x1: 80,
            y1: 280,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'marrow-bones',
            name: '14',
            shape: 'rectangle',
            width: 63,
            height: 33,
            x1: 95,
            y1: 350,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'ankle',
            name: '15',
            shape: 'rectangle',
            width: 70,
            height: 100,
            x1: 92,
            y1: 385,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'feet',
            name: '16',
            shape: 'rectangle',
            width: 70,
            height: 43,
            x1: 92,
            y1: 487,
            //prefill: 'blue',
            fill: 'blue'
        },
        //hands
        {
            id: 'left-hand',
            name: '17',
            shape: 'rectangle',
            width: 40,
            height: 50,
            x1: 7,
            y1: 240,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'right-hand',
            name: '17',
            shape: 'rectangle',
            width: 40,
            height: 50,
            x1: 210,
            y1: 240,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 80,
            x1: 52,
            y1: 100,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'right-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 80,
            x1: 167,
            y1: 100,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'right-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 55,
            x1: 185,
            y1: 184,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 55,
            x1: 35,
            y1: 184,
            //prefill: 'red',
           fill: 'blue'
        },

    ]

    const manFrontBackground = require('../assets/images/man-front.jpg');
    const man_front=[
        {
            id: 'head',
            name: '1',
            shape: 'rectangle',
            width: 50,
            height: 25,
            x1: 103,
            y1: 10,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'eyes',
            name: '2',
            shape: 'rectangle',
            width: 35,
            height: 15,
            x1: 110,
            y1: 37,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'nose',
            name: '3',
            shape: 'rectangle',
            width: 17,
            height: 10,
            x1: 119,
            y1: 53,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'mouth',
            name: '4',
            shape: 'rectangle',
            width: 25,
            height: 14,
            x1: 115,
            y1: 64,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'ear-left',
            name: '5',
            shape: 'rectangle',
            width: 10,
            height: 17,
            x1: 99,
            y1: 37,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'ear-right',
            name: '5',
            shape: 'rectangle',
            width: 10,
            height: 17,
            x1: 147,
            y1: 37,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'neck',
            name: '6',
            shape: 'rectangle',
            width: 32,
            height: 15,
            x1: 112,
            y1: 80,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'breast',
            name: '7',
            shape: 'rectangle',
            width: 95,
            height: 35,
            x1: 81,
            y1: 95,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'boobs',
            name: '8',
            shape: 'rectangle',
            width: 85,
            height: 39,
            x1: 85,
            y1: 132,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'upper-abdomen',
            name: '9',
            shape: 'rectangle',
            width: 83,
            height: 50,
            x1: 85,
            y1: 172,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'middle-abdomen',
            name: '10',
            shape: 'rectangle',
            width: 83,
            height: 25,
            x1: 85,
            y1: 223,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'down-abdomen',
            name: '11',
            shape: 'rectangle',
            width: 90,
            height: 35,
            x1: 82,
            y1: 249,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'crotch',
            name: '12',
            shape: 'rectangle',
            width: 28,
            height: 20,
            x1: 113,
            y1: 264,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'thighs',
            name: '13',
            shape: 'rectangle',
            width: 95,
            height: 63,
            x1: 80,
            y1: 285,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'marrow-bones',
            name: '14',
            shape: 'rectangle',
            width: 63,
            height: 33,
            x1: 95,
            y1: 350,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'ankle',
            name: '15',
            shape: 'rectangle',
            width: 80,
            height: 100,
            x1: 87,
            y1: 385,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'feet',
            name: '16',
            shape: 'rectangle',
            width: 70,
            height: 43,
            x1: 92,
            y1: 487,
            //prefill: 'blue',
            fill: 'blue'
        },
        //hands
        {
            id: 'left-hand',
            name: '17',
            shape: 'rectangle',
            width: 43,
            height: 50,
            x1: 1,
            y1: 255,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'right-hand',
            name: '17',
            shape: 'rectangle',
            width: 43,
            height: 50,
            x1: 210,
            y1: 255,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 85,
            x1: 50,
            y1: 100,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'right-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 85,
            x1: 170,
            y1: 100,
            //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'right-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 62,
            x1: 190,
            y1: 190,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 62,
            x1: 30,
            y1: 190,
            //prefill: 'red',
            fill: 'blue'
        },

    ]
    const manBackBackground = require('../assets/images/man-back.jpg');
    const man_back=[
        {
            id: 'back-head',
            name: '20',
            shape: 'rectangle',
            width: 51,
            height: 59,
            x1: 99,
            y1: 4,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'neck',
            name: '6',
            shape: 'rectangle',
            width: 34,
            height: 20,
            x1: 107,
            y1: 63,
            //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'back',
            name: '21',
            shape: 'rectangle',
            width: 80,
            height: 143,
            x1: 87,
            y1: 84,
            //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'buttocks',
            name: '22',
            shape: 'rectangle',
            width: 95,
            height: 51,
            x1: 80,
            y1: 230,
            //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'anus',
            name: '23',
            shape: 'rectangle',
            width: 28,
            height: 20,
            x1: 113,
            y1: 259,
           // //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'thighs',
            name: '13',
            shape: 'rectangle',
            width: 95,
            height: 68,
            x1: 80,
            y1: 282,
           // //prefill: 'red',
            fill: 'blue'
        },
        {
            id: 'marrow-bones',
            name: '14',
            shape: 'rectangle',
            width: 63,
            height: 33,
            x1: 95,
            y1: 350,
           // //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'ankle',
            name: '15',
            shape: 'rectangle',
            width: 75,
            height: 100,
            x1: 90,
            y1: 385,
            ////prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'feet',
            name: '16',
            shape: 'rectangle',
            width: 70,
            height: 43,
            x1: 92,
            y1: 487,
           // //prefill: 'blue',
            fill: 'blue'
        },
        //hands
        {
            id: 'left-hand',
            name: '17',
            shape: 'rectangle',
            width: 43,
            height: 50,
            x1: 1,
            y1: 253,
           // //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'right-hand',
            name: '17',
            shape: 'rectangle',
            width: 43,
            height: 50,
            x1: 210,
            y1: 253,
          //  //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 95,
            x1: 50,
            y1: 90,
          //  //prefill: 'blue',
            fill: 'blue'
        },
        {
            id: 'right-shoulder',
            name: '18',
            shape: 'rectangle',
            width: 35,
            height: 95,
            x1: 170,
            y1: 90,
          //  //prefill: 'blue',
            fill: 'blue'
        },

        {
            id: 'right-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 62,
            x1: 190,
            y1: 187,
          //  //prefill: 'red',
            fill: 'blue'
        },

        {
            id: 'left-forearm',
            name: '19',
            shape: 'rectangle',
            width: 35,
            height: 62,
            x1: 30,
            y1: 187,
           // //prefill: 'red',
            fill: 'blue'
        },

    ]

    return (
        <View style={globalStyle.main}>
            <Modal visible={modalWindow}>
                <View style={globalStyle.main}>
                    <Ionicons name="close-circle" size={26} color="red" onPress={() => setModalWindow(false)}/>
                    <Text style={styles.title}>{bodyPartsName}</Text>
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

            <View style={styles.flatListView}>
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
            {sex == 1 ?
                <View style={styles.body}>
                    {revert == false ?
                        <ImageMapper
                            id="1"
                            imgHeight={540}
                            imgWidth={255}
                            imgSource={womanFrontBackground}
                            imgMap={woman_front}
                            onPress={(item, idx, event) => symptomsByBodyPart(item, idx, event)}

                            selectedAreaId="my_area_id"
                        />
                        :
                        <ImageMapper
                            id="2"
                            imgHeight={536}
                            imgWidth={255}
                            imgSource={womanBackBackground}
                            imgMap={woman_back}
                            onPress={(item, idx, event) => symptomsByBodyPart(item, idx, event)}

                            selectedAreaId="my_area_id"
                        />
                    }

                    <AntDesign name="retweet" size={30} color="#559de5" style={{alignSelf: 'flex-end'}}
                               onPress={() => setRevert(revert == false ? true : false)}/>

                </View>
                :
                <View style={styles.body}>
                    {revert == false ?
                        <ImageMapper
                            id="3"
                            imgHeight={533}
                            imgWidth={255}
                            imgSource={manFrontBackground}
                            imgMap={man_front}
                            onPress={(item, idx, event) => symptomsByBodyPart(item, idx, event)}
                            selectedAreaId="my_area_id"
                        />
                        :
                        <ImageMapper
                            id="4"
                            imgHeight={533}
                            imgWidth={255}
                            imgSource={manBackBackground}
                            imgMap={man_back}
                            onPress={(item, idx, event) => symptomsByBodyPart(item, idx, event)}
                            selectedAreaId="my_area_id"
                        />
                    }

                    <AntDesign name="retweet" size={30} color="#559de5" style={{alignSelf: 'flex-end'}}
                               onPress={() => setRevert(revert == false ? true : false)}/>

                </View>
            }


        </View>
    );

}

const styles = StyleSheet.create({
    icons:
        {
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

    img:
        {
            flex: 1,
            aspectRatio: 0.9,
            resizeMode: 'contain',

        },


    header: {
        marginBottom: 5
    },
    flatList: {
        height: 30,
        backgroundColor: '#c3d3e0',
        //flexGrow: 0,
        borderRadius: 4

    },
    flatListText:
        {
            fontFamily: 'mt-light',
            fontSize: 18,

        },
    flatListView:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    title:
        {
            alignSelf: 'center',
            fontFamily: 'mt-bold',
            fontSize: 20
        }

});


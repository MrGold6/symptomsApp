import React from "react";
import {View} from 'react-native';
import {globalStyle} from "../styles/style";
import SelectMultiple from "react-native-select-multiple";

export default function SelectedPartSymptoms({symptoms, selectedSymptoms, onSelectionsChange}) {


    return (
        <View style={globalStyle.main}>
            <SelectMultiple
                items={symptoms}
                selectedItems={selectedSymptoms}
                onSelectionsChange={onSelectionsChange}
                keyExtractor={symptoms.forEach((item) => item.id)}/>
        </View>
    );
}


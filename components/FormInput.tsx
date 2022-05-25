import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {AntDesign} from '@expo/vector-icons';

function FormInput(Prop: {placeholder: string, iconName: any,onChangeText:any,onBlur:any,value:any}){
    return (
        <View style={styles.formContainer}>
            <TextInput placeholder={Prop.placeholder} style={{textAlign: 'left', alignSelf: 'center', height: 50,}}
                       onChangeText={Prop.onChangeText} onBlur={Prop.onBlur}/>
            <AntDesign name={Prop.iconName} size={24} color="grey" style={styles.iconStyle}/>

        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 100,
        textAlign: 'right',
        marginTop: 15,
    },
    iconStyle: {
        position: 'absolute',
        left: 20,
        top: 12,

    }

});
export default FormInput;
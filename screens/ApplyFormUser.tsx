import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import FormInput from "../components/FormInput";
import CircleIcon from "../components/CircleIcon";
import {RootTabScreenProps} from "../types";
import { Formik } from 'formik';

function ApplyFormUser({route, navigation}:RootTabScreenProps<'Map'>) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>

            <FormInput placeholder={'Your Full name '} iconName={"user"} />
            <FormInput placeholder={'Enter your Email'} iconName={"mail"}/>


            <CircleIcon onPress={()=> navigation.navigate('payment')}/>
        </View>
    );
}

export default ApplyFormUser;
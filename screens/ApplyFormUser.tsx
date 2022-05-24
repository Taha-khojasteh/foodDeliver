import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import FormInput from "../components/FormInput";
import CircleIcon from "../components/CircleIcon";

function ApplyFormUser() {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>

            <FormInput placeholder={'Your Full name '} iconName={"user"}/>
            <FormInput placeholder={'Enter your Email'} iconName={"mail"}/>

            <CircleIcon/>
        </View>
    );
}

export default ApplyFormUser;
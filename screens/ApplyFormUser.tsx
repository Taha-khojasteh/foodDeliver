import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import FormInput from "../components/FormInput";

function ApplyFormUser() {
    return (
        <View>

            <FormInput placeholder={'Your Full name '} iconName={"user"}/>
            <FormInput placeholder={'Enter your Email'} iconName={"mail"}/>
        </View>
    );
}

export default ApplyFormUser;
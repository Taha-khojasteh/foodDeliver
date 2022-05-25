import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {FontAwesome, FontAwesome5, Ionicons} from "@expo/vector-icons";
import DetailRestaurant from "../screens/DetailRestaurant";


function AvailableTables(Props: {time: number,period: number, fee: number, onPress:any}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", flex: 1, justifyContent: 'space-between',}}>

                <View style={styles.iconContainer}>
                    <FontAwesome name="clock-o" size={24} color="white"/>
                    <Text style={styles.text}>{Props.time}:00</Text>
                </View>

                <View style={styles.iconContainer}>
                    <Ionicons name="people-circle" size={24} color="white"/>
                    <Text style={styles.text}>{Props.period}</Text>
                </View>

                <View style={styles.iconContainer}>
                    <FontAwesome5 name="pound-sign" size={20} color="white"/>
                    <Text style={styles.text}>{Props.fee}</Text>
                </View>

                <Button title={'Order'} color={'#fec208'} onPress={Props.onPress}/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        width: "20%", justifyContent: 'center',
        alignItems: 'center', flexDirection: 'row', marginHorizontal: 10
    },
    container: {
        width: '100%', height: 60, borderRadius: 5, backgroundColor: '#DA291C', marginTop: 10
    },
    text: {marginHorizontal: 5, color: 'white', fontWeight: 'bold'},


});

export default AvailableTables;
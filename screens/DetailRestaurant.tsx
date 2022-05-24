import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import AvailableTables from "../components/AvailableTables";

function DetailRestaurant() {
    return (

        <View style={{width: '90%', alignSelf: 'center', paddingTop: 33,}}>
            <Image source={{uri: 'https://www.hot-dinners.com/images/stories/features/2020/setlunches/aquashard.jpg'}}
                   style={{width: '100%', height: 250, borderRadius: 5}}/>

            <View style={styles.titleContainer}>
                <Text style={{fontSize: 20, padding: 10, fontWeight: 'bold'}}>
                    The clove clob
                </Text>

                <FontAwesome name="star-half-empty" size={24} color="gold"
                style={{ right: 20, position: 'absolute', top: 10}}/>

                <Text style={{right: 50, position: 'absolute',
                    top: 15,fontWeight: 'bold', color: 'gray'}}>
                    2/5
                </Text>

            </View>


            <AvailableTables time={22} period={15} fee={30}/>
            <AvailableTables time={15} period={20} fee={15}/>
            <AvailableTables time={12} period={10} fee={45}/>

        </View>


    );
}

const styles = StyleSheet.create({
    iconContainer: {
        width: "20%", justifyContent: 'center',
        alignItems: 'center', flexDirection: 'row'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {marginHorizontal: 5, color: 'white', fontWeight: 'bold'},
    titleContainer: {
        width: '100%',
        height: 50,
        alignSelf: 'center', backgroundColor: 'whitesmoke', borderRadius: 10, marginTop: 10,
        position: 'relative'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});


export default DetailRestaurant;
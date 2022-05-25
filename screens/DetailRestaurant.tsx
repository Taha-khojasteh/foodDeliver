import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import AvailableTables from "../components/AvailableTables";
import {RootTabScreenProps} from "../types";

function DetailRestaurant({route, navigation}: RootTabScreenProps<'Map'>) {
    const items = route.params;

    return (

        <View style={{width: '90%', alignSelf: 'center', paddingTop: 33,}}>
            <Image source={{uri: items.imageRestaurant}}
                   style={{width: '100%', height: 250, borderRadius: 5}}/>

            <View style={styles.titleContainer}>
                <Text style={{fontSize: 20, padding: 10, fontWeight: 'bold'}}>
                    {items.restaurantName}
                </Text>

                <FontAwesome name="star-half-empty" size={24} color="gold"
                style={{ right: 20, position: 'absolute', top: 10}}/>

                <Text style={{right: 50, position: 'absolute',
                    top: 15,fontWeight: 'bold', color: 'gray'}}>
                    {items.stars}
                </Text>

            </View>
            {items.availableTimes.map(({time,_id,fee,period})=> (<AvailableTables key={_id} time={time} period={period}
                                                                                  fee={fee} onPress={()=> navigation.navigate('formUser')}/>
            ))}
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
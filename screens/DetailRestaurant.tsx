import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import { FontAwesome,FontAwesome5 ,Ionicons} from '@expo/vector-icons';
function DetailRestaurant() {
    return (

        <View style={{width: '90%', alignSelf: 'center', paddingTop: 33,}}>
            <Image source={{uri: 'https://www.hot-dinners.com/images/stories/features/2020/setlunches/aquashard.jpg'}}
                   style={{width: '100%', height: 250, borderRadius: 5}}
            />
            <View style={{
                width: '100%',
                height: 50,
                alignSelf: 'center', backgroundColor: 'whitesmoke', borderRadius: 10, marginTop: 10,
                position: 'relative'
            }}>
                <Text style={{fontSize: 20, padding: 10, fontWeight: 'bold'}}>
                    The clove clob
                </Text>



                <FontAwesome name="star-half-empty" size={24} color="gold"
                style={{ right: 20, position: 'absolute', top: 10}}
                />
                <Text style={{right: 50, position: 'absolute', top: 15,fontWeight: 'bold',
                color: 'gray'}}>
                    2/5
                </Text>
            </View>

            <View style={{ width: '100%', height: 60, borderRadius: 5, backgroundColor: '#DA291C',marginTop: 10}}>
                <View style={{flexDirection: "row", flex: 1 , justifyContent: 'space-between',}}>
                    <View style={{ width: "20%",
                        justifyContent:'center',alignItems: 'center', flexDirection:'row', marginHorizontal: 10}}>
                        <FontAwesome name="clock-o" size={24} color="white"/>
                        <Text style={{ marginHorizontal: 5, color: 'white', fontWeight: 'bold'}}>17:00</Text>
                    </View>
                    <View style={{ width: "20%",justifyContent:'center',
                        alignItems: 'center', flexDirection:'row',}}>
                        <Ionicons name="people-circle" size={24} color="white" />
                        <Text style={{ marginHorizontal: 5, color: 'white', fontWeight: 'bold'}}>30</Text>
                    </View>
                    <View style={{ width: "20%",justifyContent:'center',
                        alignItems: 'center', flexDirection:'row',}}>
                        <FontAwesome5 name="pound-sign" size={20} color="white" />
                        <Text style={{ marginHorizontal: 5, color: 'white', fontWeight: 'bold'}}>22</Text>

                    </View>

                    <Button title={'Order'} color={'#fec208'} />
                </View>
            </View>



        </View>


    );
}

export default DetailRestaurant;
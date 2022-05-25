import axios from 'axios';
import { useEffect, useState } from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {RootTabScreenProps} from '../types';


export default function Maps({navigation}: RootTabScreenProps<'Maps'>) {
  const [Listing, setListing] = useState([])
  useEffect(()=> {
    callListResturants()
    return () =>console.log('sample')
  },[])

  const callListResturants = async() => {
    const url = 'http://192.168.1.103:4242/restaurant'
    await axios.get(url).then((res)=> setListing(res.data))


  }
  const tokyoRegion = {
    latitude: 51.512909,
    longitude: -0.118581,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={tokyoRegion}>

          {Listing.map((item)=> (<Marker key={item._id} coordinate={{ latitude: item.location[0], longitude: item.location[1]}}>
            <Callout onPress={() => {
              navigation.navigate('Modal', (item))
            }}>
              <View style={{width: 100, height: 100, borderRadius: 5, alignItems: 'center',
                flex: 1, justifyContent: 'center'}}>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold'}}>{item.restaurantName}</Text>
                {item.availableTimes.map(({time,_id})=> (<Text key={_id}>{time}:00</Text>))}
                </View>
            </Callout>



          </Marker>))}


        </MapView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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

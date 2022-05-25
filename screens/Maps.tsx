import {Dimensions, StyleSheet,Text,View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {RootTabScreenProps} from '../types';


export default function Maps({navigation}: RootTabScreenProps<'Maps'>) {

  const tokyoRegion = {
    latitude: 51.512909,
    longitude: -0.118581,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const london = {
    latitude: 51.493518,
    longitude: -0.151712,
  };
  const bahar = {
    latitude: 51.501750,
    longitude: -0.095064,
  };

  return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={tokyoRegion}>
          <Marker coordinate={tokyoRegion} >

            <Callout onPress={() => {
              navigation.navigate('Modal', {placeName: 'playStore', fee: 20})
            }}>
              <View style={{width: 100, height: 100, borderRadius: 5}}>
                <Text>Text</Text>
              </View>
            </Callout>

          </Marker>


          <Marker coordinate={london}/>
          <Marker coordinate={bahar}/>
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

import {View, StyleSheet, TouchableOpacity} from "react-native";
import {AntDesign,} from "@expo/vector-icons";


function CircleIcon(Props: {onPress:any}) {
    return (
        <TouchableOpacity  style={{marginTop: 150, alignSelf: 'center'}} onPress={Props.onPress}>
            <View style={styles.circle} >
                <AntDesign name={'arrowright'} size={24} color="grey" style={styles.iconStyle}/>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        backgroundColor: 'gold',
        borderRadius: 100,
        alignSelf: 'center',
    },
    iconStyle: {
        alignSelf: 'center',
        top: 35,
    }


});

export default CircleIcon;
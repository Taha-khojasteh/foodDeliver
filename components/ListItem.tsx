import React from 'react';
import {Image,View, StyleSheet, TouchableHighlight,Text} from "react-native";
import Colors from "../constants/Colors";

function ListItem({title, subtitle, image,ImageComponent, onPress, renderRightActions}) {

    return (

            <TouchableHighlight  onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subtitle && <Text style={styles.subTitle}>{subtitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    detailContainer:{
        marginLeft: 10,
        justifyContent:"center",

    },
    container: {
        flexDirection: "row",
        padding: 13,
        backgroundColor: Colors.white,
        marginTop: 50
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        color: Colors.black,

        fontSize: 14,
        fontWeight: "bold"
    },
    subTitle: {
        color: Colors.medium
    }
})
export default ListItem;
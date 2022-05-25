import React, {useEffect, useState} from 'react';
import ListItem from "../components/ListItem";
import {FlatList} from "react-native";
import axios from "axios";

function HistoryPayments() {
    const [data, setData] = useState([])
    useEffect(()=> {
        callListResturants()
    },[])

    const callListResturants = async() => {
        const url = 'http://192.168.1.123:4242/user/paymentIntent'
        await axios.get(url).then((res)=> setData(res.data))

    }

    return (
        <>
            <ListItem title={"purchased"} subtitle={'18:00'}/>
            <ListItem title={"purchased"} subtitle={'20:00'}/>

        </>


    );
}

export default HistoryPayments;
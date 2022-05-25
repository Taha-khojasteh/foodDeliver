import React, {useEffect, useState} from 'react';
import ListItem from "../components/ListItem";
import {FlatList} from "react-native";
import axios from "axios";

function HistoryPayments() {
    const [data, setData] = useState([])
    useEffect(() => {
        const url = 'http://192.168.1.123:4242/user/paymentIntent'
        axios.get(url).then((res) => setData(res));
        console.log(data[2])

    }, [])

    return (
        <>
            <FlatList data={data} renderItem={(item) =>
                <ListItem title={item} subtitle={'18:00'}/>
            }/>
        </>


    );
}

export default HistoryPayments;
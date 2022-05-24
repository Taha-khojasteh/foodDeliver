import React from 'react';
import {CardForm,GooglePayButton} from "@stripe/stripe-react-native";
import {Button} from "react-native";
import axios from "axios";

function Payment() {

    const handlePayPress = async ()=>{
        //api call check

        const url = 'https://jsonplaceholder.typicode.com/posts'
        const data = {
            a: 10,
            b: 20,
        };
        const response = await axios.post(url,data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        }).then((data)=> console.log(data))
    }


    return (
    <>

        <CardForm
            onFormComplete={(cardDetails) => {
                console.log('card details', cardDetails);
                // setCard(cardDetails);
            }}
            style={{height: 280,marginTop: 150}}
        />

        <Button title={"Pay"} onPress={handlePayPress}/>
    </>
    );

}

export default Payment;
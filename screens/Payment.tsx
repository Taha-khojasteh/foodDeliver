import React, {useEffect, useState} from 'react';
import {CardForm, StripeProvider, useConfirmPayment,} from "@stripe/stripe-react-native";
import {Alert, Button} from "react-native";
import {showMessage} from "react-native-flash-message";

function Payment() {
    const [key, setKey] = useState('')
    const {confirmPayment, loading} = useConfirmPayment()


    useEffect(() => {
        const url = 'http://192.168.1.123:4242/create-checkout-intent'
        fetch(url, {method: 'POST', })
            .then((res) => res.json())
            .then((res) => {
                const intent = res as { clientSecret: string }
                setKey(intent.clientSecret)
                console.log('Done')
                console.log(key)
            }).catch(err => console.log(err))


    }, [])
    const handlePayPress = async () => {

        const {error, paymentIntent} = await confirmPayment(key, {
            type: 'Card',
            billingDetails: {
                email: "joe@doe.com"
            },

        })


        if (error) {
            Alert.alert('Error', error.message)
        } else {
            Alert.alert('Successful', 'Thanks for your purchase.')
            showMessage({
                type: "success",
                message: 'Thanks for your purchase.'
            })
        }
    }


    return (
        <>
            <StripeProvider
                publishableKey={'pk_test_51L2sEqBeMsITHK2aBBnpm44QiKM6ZEbydfe6pQuBHcioVdJ2cFbuvKNIJR4T1p47ylXsqoj2mNmKF9QJ0KJVgkN000y7u10No2'}>

                <CardForm

                    style={{height: 280, marginTop: 150}}
                />

                <Button title={"Pay"} onPress={handlePayPress} disabled={loading}/>
            </StripeProvider>

        </>
    );

}

export default Payment;
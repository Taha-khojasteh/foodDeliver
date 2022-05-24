import React, {useState} from 'react';
import {
    CardForm,
    GooglePayButton,
    StripeProviderProps,
    useConfirmPayment,
    useStripe
} from "@stripe/stripe-react-native";
import {Alert, Button} from "react-native";
import {StripeProvider} from '@stripe/stripe-react-native';
import axios from "axios";

function Payment() {
    const [cardData, setCardData] = useState('')
    const [key, setKey] = useState('')
    const {confirmPayment, loading} = useConfirmPayment()
    const handlePayPress = async () => {
        //api call check
        const url = 'http://192.168.1.103:4242/create-checkout-intent'
        const response = await axios.post(url).then((res) => {
            const intent = res as { clientSecret: string }
            setKey(intent.clientSecret)
        }).catch(err => console.log(err))
1
        const {error, paymentIntent} = await confirmPayment(key, {
            type: 'Card',
            billingDetails: {
                email: "joe@doe.com"
            },

        })
        if (error) {
            Alert.alert('Error', error.message)
        } else {
            Alert.alert('Payment Successful ')
        }
    }


    return (
        <>
            <StripeProvider
                publishableKey={'pk_test_51L2sEqBeMsITHK2aBBnpm44QiKM6ZEbydfe6pQuBHcioVdJ2cFbuvKNIJR4T1p47ylXsqoj2mNmKF9QJ0KJVgkN000y7u10No2'}>

                <CardForm
                    onFormComplete={(cardDetails) => {
                        console.log('card details', cardDetails);
                        setCardData(cardDetails);
                    }}

                    style={{height: 280, marginTop: 150}}
                />

                <Button title={"Pay"} onPress={handlePayPress} disabled={loading}/>
            </StripeProvider>

        </>
    );

}

export default Payment;
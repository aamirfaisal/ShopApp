import { Image, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assests/images'
import { Button, Label } from '../../components'
import { styles } from './style'

const PlaceOrder = () => {
    return (
        <View style={styles.container}>

            <Image source={IMAGES.PlaceOrder} style={styles.PlacePic} />

            <Label style={styles.OrderPlaceLabel}>Order Placed!!</Label>
            <Label style={styles.OrderSuccessfullyLabel}>Your order has been placed successfully!</Label>
            <Button title='Back' style={styles.ButtonStyle} textStyle={styles.ButtonLabelStyle} />

        </View>
    )
}

export default PlaceOrder
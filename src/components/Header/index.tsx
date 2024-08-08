import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Label } from '../reuseables'
import { IMAGES } from '../../assests/images'
import { COLOR, FONT } from '../../enums/StyleGuide'

const Header = (props: any) => {
    const {  title, style, textStyle, onPress } = props
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={onPress}>
                <Image source={IMAGES.BackArrow} style={styles.IconStyle} />
            </TouchableOpacity>
            <Label style={[styles.Label, textStyle]}>{title}</Label>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
        marginTop: '5%',
        alignItems: 'center'
    },
    IconStyle: {
        height: 31,
        width: 31
    },
    Label: {
        fontSize: 24,
        fontFamily: FONT.bold,
        color: COLOR.dark,
        flex: 1,
        textAlign: 'center',
        paddingRight: '3%'
    },
})
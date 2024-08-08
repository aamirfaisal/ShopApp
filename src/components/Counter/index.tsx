import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AnyIcon, Label } from '../reuseables'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { ICONS } from '../../assests/icons'
import { counterProps } from '../../enums/Types'

const Counter = (props: counterProps) => {
    const { onIncrement, onDecrement, value } = props
    return (
        <View style={styles.CounterContainer}>
            <AnyIcon
                name={'minus'}
                color={COLOR.dark}
                size={15}
                type={ICONS.Entypo}
                onPress={onDecrement}
            />
            <Label style={styles.Counter}>{value}</Label>
            <AnyIcon
                name={'plus'}
                color={COLOR.dark}
                size={20}
                type={ICONS.Entypo}
                onPress={onIncrement}
            />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    CounterContainer: {
        width: wp(35),
        height: hp(5.5),
        borderRadius: hp(10),
        ...commonStyles.justifyView,
        ...commonStyles.shadow_2,
        backgroundColor: COLOR.green_01,
        paddingHorizontal: wp(3)
    },
    Counter: {
        ...TEXT_STYLE.smallTitleMedium,
        color: COLOR.dark,
    }
})
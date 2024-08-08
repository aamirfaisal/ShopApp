import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from '../../../enums/StyleGuide'

const Indicator = () => {
    return (
        <ActivityIndicator size={'small'} color={COLOR.primary} />
    )
}

export default Indicator

const styles = StyleSheet.create({})
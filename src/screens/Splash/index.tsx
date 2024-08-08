import { View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './style'
import { SCREEN } from '../../enums/AppEnums'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Spalsh = (props: any) => {
  const { navigation } = props

  useEffect(() => {
    setTimeout(() => {
      CheckAsync()
    }, 2000)
  }, [])

  async function CheckAsync() {
    const value = await AsyncStorage.getItem('Boarding');
    const token = await AsyncStorage.getItem('Token');

    if (value && !token) {
      navigation.replace(SCREEN.LOGIN);
    } else if (value && token) {
      navigation.replace(SCREEN.DrawerNavigation)
    } else {
      navigation.replace(SCREEN.BOARDING)
    }
  }
  return (
    <View style={styles.container}>

    </View>
  )
}

export default Spalsh
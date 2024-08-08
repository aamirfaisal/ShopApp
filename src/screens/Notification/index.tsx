import { View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Label } from '../../components'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

const Notification = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <Header title='Notification' onPress={() => navigation.goBack()} />

      <View style={styles.NotificationContainer}>
        <Label style={styles.OrderLabel}>Your order is placed</Label>
        <Label style={styles.OrderDescription}>is simply dummy text of the printing and typesetting industry.</Label>
      </View>

    </View>
  )
}

export default Notification
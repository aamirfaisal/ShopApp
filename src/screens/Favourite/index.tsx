import { FlatList, View } from 'react-native'
import React from 'react'
import { Label } from '../../components'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import CartList from '../../components/CartList'
import { CartListData } from '../../data/Local'
import { styles } from './style'

const Favourite = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Header title='Favourite' textStyle={styles.HeaderText} onPress={() => navigation.goBack()} />

      <Label style={styles.TotalLabel}>3 Items</Label>
      <View style={styles.ListStyle}>
        <FlatList
          data={CartListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CartList item={item} index={index} />
          )}
        />
      </View>

    </View>
  )
}

export default Favourite
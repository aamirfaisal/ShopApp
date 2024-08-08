import { FlatList, Image, Modal, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { AnyIcon, Button, CartModal, Input, Label, Pressable } from '../../components'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import CartList from '../../components/CartList'
import { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { errorToast, successToast } from '../../utils/Toast'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from '../../api/urls'
import { api } from '../../api'
import { COLOR } from '../../enums/StyleGuide'
import { ICONS } from '../../assests/icons'
import { clearCart } from '../../redux/reducer/CartSlice'

const Cart = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [userData, setUser] = useState<any>({});
  const [token, setToken] = useState<any>('');
  const [loading, setLoading] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const totalPrice = cartItems?.reduce((sum, item) => {
    const price = parseFloat(item?.price?.replace('$', ''));
    return sum + (price * item?.quantity);
  }, 0)

  const getUserData = async () => {
    try {
      const user: any = await AsyncStorage.getItem('UserData');
      const userToken: any = await AsyncStorage.getItem('Token');
      if (user) {
        setUser(JSON.parse(user))
        setToken(JSON.parse(userToken))
      }
    } catch (error) {
      console.log('error', error);
    }
  }


  const handleOrderSubmit = async () => {
    if (cartItems.length === 0) {
      errorToast('Please add items to the cart first');
      return;
    }

    if (!deliveryAddress) {
      errorToast('Please enter a delivery address')
      return
    }
    const orderData = {
      first_name: userData?.name,
      last_name: "s",
      city: "RYK",
      email_address: userData?.email,
      contact_no: userData?.phone,
      delivery_address: deliveryAddress,
      tax: 0,
      delivery_fee: 0,
      user_id: userData?.id,
      currency_id: 5,
      cart_items: cartItems.map(item => ({
        id: item.id,
        quantity: item.quantity,
      })),
    }

    setLoading(true)
    try {
      const response = await api.post(url.SubmitOrder, orderData)
      if (response?.data?.status == true) {
        dispatch(clearCart())
        successToast(response?.data?.message)
      } else {
        errorToast(response?.data?.message)
      }
      setLoading(false)
    } catch (error) {
      console.error('Order submission error:', error);
      errorToast('Failed to submit the order')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <View style={styles.container}>
      <Header title='Cart' textStyle={styles.HeaderText} onPress={() => navigation.goBack()} />

      <View style={styles.itemContainer}>
        <Label style={styles.TotalLabel}>{cartItems?.length} Items</Label>
        <Pressable onPress={() => setModalVisible(true)}>
          <Label style={styles.AddressLabel}>Add Address</Label>
        </Pressable>
      </View>
      <View style={styles.ListStyle}>
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CartList item={item} index={index} />
          )}
        />
      </View>

      <View style={styles.CartBox}>

        <View style={styles.CartSection}>
          <Label style={styles.CartTile}>{cartItems?.length} items</Label>
          <Label style={styles.CartTile}>$ {totalPrice.toFixed(2)}</Label>
        </View>
        <View style={[styles.CartSection, { marginTop: '4%' }]}>
          <Label style={styles.CartTile}>Tax</Label>
          <Label style={styles.CartTile}>$0</Label>
        </View>
        <View style={[styles.CartSection, { marginTop: '4%' }]}>
          <Label style={styles.CartTotalLabel}>Total</Label>
          <Label style={styles.CartTotalLabel}>$ {totalPrice.toFixed(2)}</Label>
        </View>

        <Button title='Order'
          onPress={() => handleOrderSubmit()}
          style={styles.ButtonStyle}
          isLoading={loading}
          textStyle={styles.ButtonLabelStyle} />
      </View>

      {/* Address Modal */}
      <CartModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        addressValue={deliveryAddress}
        onAddressChange={setDeliveryAddress}
      />


    </View>
  )
}

export default Cart
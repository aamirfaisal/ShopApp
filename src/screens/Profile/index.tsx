import { Image, ImageBackground, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { IMAGES } from '../../assests/images'
import { Label, Pressable } from '../../components'
import { ProfileButton } from '../../data/Local'
import { SCREEN } from '../../enums/AppEnums'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { errorToast } from '../../utils/Toast'
import { api } from '../../api'
import { url } from '../../api/urls'
import { ActivityIndicator } from 'react-native-paper'
import { COLOR } from '../../enums/StyleGuide'
import { ImageUrl } from '../../utils/Helper'

const Profile = (props: any) => {
  const { navigation } = props
  const [userData, setUserData] = useState<any>({})
  const [loading, setLoading] = useState(false)

  const getUserData = async () => {
    setLoading(true)
    const userId: any = await AsyncStorage.getItem('UserId')

    const userData = {
      id: userId,
    }

    try {
      const response = await api.post(url.GetUser, userData)
      if (response?.data?.status == true) {
        setUserData(response?.data?.user)
      } else {
        errorToast('unable to fetch user data')
      }
      setLoading(false)
      console.log('line 32 ::: ', response.data)
    } catch (error) {
      console.error('error', error);
    }
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem('UserData');
    await AsyncStorage.removeItem('Token');
    await AsyncStorage.removeItem('UserId');
    navigation.replace(SCREEN.LOGIN);
  }

  const handleNavigate = (item: any) => {
    if (item?.title === 'Log out') {
      handleLogout()
    } else {
      navigation.navigate(item?.route)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <View style={styles.Container}>
      {loading ? (
        <View style={styles.Loader}>
          <ActivityIndicator size={'large'} color={COLOR.primary} />
        </View>
      ) : (
        <>
          <Header
            title='Profile'
            textStyle={styles.HeaderText}
            onPress={() => navigation.goBack()} />

          <View style={styles.TopCard}>
            <ImageBackground source={IMAGES.ImageFrame} style={styles.ImageContainer} >
              <Image source={userData?.image ? { uri: `${ImageUrl}${userData?.image}` } : IMAGES.Profile} style={styles.ProfileImage} />
            </ImageBackground>
            <Label style={styles.UserName}>{userData?.name}</Label>
            <Label style={styles.Address}>{userData?.email}  {userData?.phone}</Label>
          </View>

          <View style={styles.ContentStyle}>
            {ProfileButton.map((item, index) => (
              <Pressable style={styles.ButtonCard} onPress={() => handleNavigate(item)}>
                <Label style={styles.ButtonLabel}>{item?.title}</Label>
                <Image source={IMAGES.ArrowRightIcon} style={styles.ArrowIcon} />
              </Pressable>
            ))}
          </View>

        </>
      )}
    </View>
  )
}

export default Profile

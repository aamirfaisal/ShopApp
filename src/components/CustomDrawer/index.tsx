import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { COLOR, FONT, wp } from '../../enums/StyleGuide';
import { IMAGES } from '../../assests/images';
import { Label, Pressable } from '../reuseables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREEN } from '../../enums/AppEnums';
import { api } from '../../api';
import { url } from '../../api/urls';
import { errorToast } from '../../utils/Toast';
import { ImageUrl } from '../../utils/Helper';

const CustomDrawer = (props: any) => {
    const { navigation } = props
    const [userData, setUserData] = useState<any>({})

    const getUserData = async () => {
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

    useEffect(() => {
        getUserData()
      }, [])
    return (
        <ImageBackground source={IMAGES.DrawerBg} style={styles.container}>

            <View style={styles.DrawerHeader}>
                <Image source={IMAGES.Logo} style={styles.LogoStyle} />
                <Pressable onPress={() => navigation.closeDrawer()} style={{ top: '8%' }}>
                    <Image source={IMAGES.DrawerBack} style={styles.DrawerBackStyle} />
                </Pressable>
            </View>

            <Image source={userData?.image ? { uri: `${ImageUrl}${userData?.image}` } : IMAGES.Profile} style={styles.ProfileStyle} />
            <DrawerContentScrollView
                showsVerticalScrollIndicator={false} {...props}
                contentContainerStyle={{ paddingTop: 0 }}>

                <View style={styles.itemList}>
                    <DrawerItemList {...props} />
                    <Pressable onPress={() => handleLogout()}>
                        <Label style={styles.LogoutStyle}>Logout</Label>
                    </Pressable>
                    {/* <DrawerItem
                        label="Logout"
                        labelStyle={{
                            fontSize: 15,
                            fontFamily: Fonts.SF_Bold,
                            color: Colors.greyText
                        }}
                        icon={({ focused, size }) => (
                            <Image source={require('../../../Assets/Icons/logout.png')}
                                style={[focused ? Colors.primary : Colors.grey, { height: 18, width: 18, marginTop: '3%' }]}
                            />

                        )}
                        onPress={() => navigation.navigate('Login')}

                    /> */}
                </View>
            </DrawerContentScrollView>
        </ImageBackground>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgContainer: {
        // flex: 1,
        alignItems: 'center',
        marginTop: '15%'
    },
    DrawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%',
        justifyContent: 'space-between',
        paddingLeft: '15%',
        paddingRight: '10%'
    },
    LogoStyle: {
        height: 70,
        width: 70
    },
    DrawerBackStyle: {
        height: 33,
        width: 33
    },
    ProfileStyle: {
        width: 71,
        height: 71,
        marginLeft: '10%',
        marginTop: '25%'
    },
    img: {
        height: 98,
        width: 98,
        borderRadius: 98,
    },
    name: {
        fontFamily: FONT.semiBold,
        fontSize: 20,
        color: COLOR.grey_1
    },
    email: {
        fontFamily: FONT.semiBold,
        fontSize: 11,
        lineHeight: 10,
        color: COLOR.grey_1
    },
    itemList: {
        marginTop: '10%'
    },
    LogoutStyle: {
        fontSize: 16,
        color: COLOR.dark,
        fontFamily: FONT.semiBold,
        paddingLeft: wp(5.3),
        marginTop: '6%'
    }
})
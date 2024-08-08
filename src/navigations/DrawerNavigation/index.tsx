import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { COLOR, FONT } from '../../enums/StyleGuide'
import { CustomDrawer } from '../../components'
import TabNavigation from '../BottomTabNavigation'
import * as ui from '../../screens'
import { SCREEN } from '../../enums/AppEnums'

const Drawer = createDrawerNavigator()
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: COLOR.white,
                drawerActiveTintColor: COLOR.dark,
                drawerLabelStyle: {
                    fontFamily: FONT.semiBold,
                    fontSize: 16,
                    color: COLOR.dark,
                    marginBottom: '-6%',
                }
            }}>

            <Drawer.Screen name="Home" component={TabNavigation} />
            <Drawer.Screen name={SCREEN.Profile} component={ui.Profile} />
            <Drawer.Screen name={SCREEN.Favourite} component={ui.Favourite} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
import * as ui from '../../screens'
import { SCREEN } from '../../enums/AppEnums';
import TabNavigation from '../BottomTabNavigation';
import DrawerNavigation from '../DrawerNavigation';

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREEN.SPLASH}>
                <Stack.Screen name={SCREEN.SPLASH} component={ui.Spalsh} />
                <Stack.Screen name={SCREEN.BOARDING} component={ui.OnBoarding} />
                <Stack.Screen name={SCREEN.LOGIN} component={ui.Login} />
                <Stack.Screen name={SCREEN.SIGNUP} component={ui.Signup} />
                <Stack.Screen name={SCREEN.FORGETPASSWORD} component={ui.ForgetPassword} />
                <Stack.Screen name={SCREEN.OTPVERIFICATION} component={ui.OTPVerification} />
                <Stack.Screen name={SCREEN.PASSWORDCHANGE} component={ui.PasswordChange} />
                <Stack.Screen name={SCREEN.TERMSCONDITION} component={ui.TermsCondition} />
                <Stack.Screen name={SCREEN.TabNavigation} component={TabNavigation} />
                <Stack.Screen name={SCREEN.DrawerNavigation} component={DrawerNavigation} />
                <Stack.Screen name={SCREEN.ProductDetail} component={ui.ProductDetail} />
                <Stack.Screen name={SCREEN.Profile} component={ui.Profile} />
                <Stack.Screen name={SCREEN.Chat} component={ui.ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
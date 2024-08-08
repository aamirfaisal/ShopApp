import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart, Home, Notification, Search } from "../../screens";
import { IMAGES } from "../../assests/images";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { display: "none" },
        tabBarStyle: { display: "flex", height: 59, backgroundColor: '#EEF3F4', borderTopLeftRadius: 35, borderTopRightRadius: 35, },
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignContent: "center", alignItems: "center", }}>
              <Image
                source={IMAGES.Home}
                style={ styles.imageStyle}
              />

            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignContent: "center", alignItems: "center", }}>
              <Image
                source={IMAGES.Search}
                style={ styles.imageStyle}
              />

            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignContent: "center", alignItems: "center", }}>
              <Image
                source={IMAGES.Cart}
                style={ styles.imageStyle}
              />

            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Notification'
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignContent: "center", alignItems: "center", }}>
              <Image
                source={IMAGES.Notification}
                style={ styles.imageStyle}
              />

            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  imageStyle: { 
    width: 23, 
    height: 23, 
    resizeMode: "contain" 
  },
});

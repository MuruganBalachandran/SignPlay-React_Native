import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../../Screens/ProfileScreens/ProfileScreen'
import SettingScreen from '../../Screens/ProfileScreens/SettingScreen'

const Stack = createStackNavigator()
export default function ProfileNavigation() {
  return (
  <Stack.Navigator
  initialRouteName='profileScreen'
  screenOptions={{
    headerShown:false
  }}
  >
<Stack.Screen name='profileScreen' component={ProfileScreen}/>
<Stack.Screen name='SettingScreen' component={SettingScreen}/>
  </Stack.Navigator>
  )
}
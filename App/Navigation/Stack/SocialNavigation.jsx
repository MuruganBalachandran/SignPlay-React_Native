import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CallScreen from '../../Screens/SocialScreens/CallScreen'
import SocialScreen from '../../Screens/SocialScreens/SocialScreen'
import ViewUser from '../../Screens/SocialScreens/ViewUser'

const Stack = createStackNavigator()
export default function SocialNavigation() {
  return (
  <Stack.Navigator
  initialRouteName='SocialScreen'
  screenOptions={{
    headerShown:false
  }}
  >
<Stack.Screen name='SocialScreen' component={SocialScreen}/>
<Stack.Screen name='CallScreen' component={CallScreen}/>
<Stack.Screen name='ViewUser' component={ViewUser}/>

  </Stack.Navigator>
  )
}
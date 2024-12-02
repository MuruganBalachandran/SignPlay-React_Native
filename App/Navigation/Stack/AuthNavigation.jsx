import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../Screens/AuthScreens/LoginScreen'
import SignUpScreen from '../../Screens/AuthScreens/SignUpScreen'



const Stack = createStackNavigator()
export default function AuthNavigation() {
    return (
        <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={{
          headerShown:false
        }}
        >
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        </Stack.Navigator>
        )
      }
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LessonScreen from '../../Screens/LessonScreens/LessonScreen'
import LessonView from '../../Screens/LessonScreens/LessonView'
import HomeScreen from '../../Screens/HomeScreens/HomeScreen'
import NotificationScreen from '../../Screens/HomeScreens/NotificationScreen'



const Stack = createStackNavigator()
export default function HomeNavigation() {
    return (
        <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          headerShown:false
        }}
        >
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='NotificationScreen' component={NotificationScreen}/>
        </Stack.Navigator>
        )
      }
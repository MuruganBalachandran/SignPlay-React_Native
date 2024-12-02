import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import {GestureHandlerRootView} from'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';
import Colors from './App/Utils/Colors';
export default function App() {
  return (
    <GestureHandlerRootView
    style={{
      flex:1,
      backgroundColor:Colors.white,
    }}
    >
      <StatusBar
      barStyle={"light-content"}
      backgroundColor={Colors.primary}
      />
      <NavigationContainer>
     <TabNavigation/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileNavigation from './Stack/ProfileNavigation';
import LessonNavigation from './Stack/LessonNavigation';
import SocialNavigation from './Stack/SocialNavigation';
import HomeNavigation from './Stack/HomeNavigation';
import DetectionScreen from '../Screens/DetectionScreens/DetectionScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0', 
          height: 70, 
          paddingBottom: 10,
          paddingTop: 10, 
          elevation: 5,
          borderRadius: 20,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let scale = focused ? 1.2 : 1; 
          let translateY = focused ? -5 : 0; 

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Lessons') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Detection') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Social') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={color}
              style={{
                transform: [{ scale }, { translateY }],
              }}
            />
          );
        },
        tabBarActiveTintColor: '#3d52c6',
        tabBarInactiveTintColor: '#c9cad1',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          paddingBottom: 5, 
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Lessons" component={LessonNavigation} />
      <Tab.Screen name="Detection" component={DetectionScreen} />
      <Tab.Screen name="Social" component={SocialNavigation} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
}

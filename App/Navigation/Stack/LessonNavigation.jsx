import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LessonScreen from '../../Screens/LessonScreens/LessonScreen';
import LessonView from '../../Screens/LessonScreens/LessonView';
import LessonContent from '../../Screens/LessonScreens/LessonContent';

const Stack = createStackNavigator();

export default function LessonNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="lessonScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="lessonScreen" component={LessonScreen} />
      <Stack.Screen name="LessonView" component={LessonView} />
      <Stack.Screen name="LessonContent" component={LessonContent} />
    </Stack.Navigator>
  );
}

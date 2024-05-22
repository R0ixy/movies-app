import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

export { HomeStack };

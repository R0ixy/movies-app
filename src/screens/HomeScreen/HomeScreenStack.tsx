import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './HomeScreen';
import { VideoPlayerScreen } from "../VideoPlayerScreen/VideoPlayerScreen.tsx";

export type HomeStackParamList = {
  HomeScreen: undefined;
  VideoPlayer: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
  </Stack.Navigator>
);

export { HomeStack };

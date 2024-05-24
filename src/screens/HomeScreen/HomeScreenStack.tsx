import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MovieType } from '../../types';
import { VideoPlayerScreen } from '../VideoPlayerScreen/VideoPlayerScreen.tsx';
import { HomeScreen } from './HomeScreen';

export type HomeStackParamList = {
  HomeScreen: undefined,
  VideoPlayer: { movie: MovieType },
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
  </Stack.Navigator>
);

export { HomeStack };

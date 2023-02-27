import React from 'react';
import SCREEN_NAMES from './screenNmaes';
import Home from '@socialmedia/modules/home';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import YouTubePlayer from '@socialmedia/modules/youtubePlayer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function NavigatorScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN_NAMES.home} component={Home} />
        <Stack.Screen
          name={SCREEN_NAMES.youTubePlayer}
          component={YouTubePlayer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

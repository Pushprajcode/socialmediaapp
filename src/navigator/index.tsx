import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SCREEN_NAMES} from './screenNmaes';
import {NavigationContainer} from '@react-navigation/native';
import YouTubePlayer from '@socialmedia/modules/youtubePlayer';
import HeaderComponent from '@socialmedia/components/headerComponent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullScreen from '@socialmedia/modules/youtubePlayer/fullScreen';
import Home from '@socialmedia/modules/home';
import Test from '@socialmedia/test';

export default function NavigatorScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <StatusBar hidden /> */}
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen
          name={SCREEN_NAMES.youTubePlayer}
          component={YouTubePlayer}
        />
        <Stack.Screen
          name={SCREEN_NAMES.FullScreen}
          component={FullScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

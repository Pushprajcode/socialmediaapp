import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_NAMES} from './screenNmaes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ToptabNavigator} from './toptabNavigator';
import HeaderComponent from '@socialmedia/components/headerComponent';
import YouTubePlayer from '@socialmedia/youtubePlayer';
import {local_string} from '@socialmedia/utils/strings';

export default function NavigatorScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.ToptabNavigator}
        screenOptions={{}}>
        <Stack.Screen
          options={{
            header: () => <HeaderComponent title={local_string.Favorits} />,
          }}
          name={SCREEN_NAMES.ToptabNavigator}
          component={ToptabNavigator}
        />
        <Stack.Screen
          name={SCREEN_NAMES.youTubePlayer}
          component={YouTubePlayer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_NAMES} from './screenNmaes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ToptabNavigator} from './toptabNavigator';

export default function NavigatorScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar
        // translucent
        backgroundColor={'#5E8D48'}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.ToptabNavigator}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={SCREEN_NAMES.ToptabNavigator}
          component={ToptabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Articles from '@socialmedia/articles';
import Channels from '@socialmedia/channels';
import {vh} from '@socialmedia/utils/dimensions';
import Video from '@socialmedia/videolist';
import React from 'react';
import {View} from 'react-native';
import {SCREEN_NAMES} from './screenNmaes';

const Tab = createMaterialTopTabNavigator();

export function ToptabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {marginTop: vh(10)},
        // tabBarStyle: {backgroundColor: 'olive'},
      }}>
      <Tab.Screen
        name={SCREEN_NAMES.channels}
        component={Channels}
        options={{
          // tabBarLabel: {backgroundColor: 'white'},
          // tabBarStyle:{{}}
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: 'white',
                  // flex: 1,
                  marginTop: 20,
                }}></View>
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.Videos}
        component={Video}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{backgroundColor: 'red', flex: 1, marginTop: 20}}></View>
              // <Image
              //   source={LocalImages.burgerIcon}
              //   resizeMode="contain"
              //   style={
              //     focused
              //       ? [{width: 21.18, height: 21.18}]
              //       : {width: 21.18, height: 21.18, tintColor: 'grey'}
              //   }
              // />
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.Articles}
        component={Articles}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{backgroundColor: 'red', flex: 1, marginTop: 20}}></View>
              // <Image
              //   source={LocalImages.locationIcon}
              //   resizeMode="contain"
              //   style={
              //     focused
              //       ? [{width: 21.18, height: 21.18}]
              //       : {width: 21.18, height: 21.18, tintColor: 'grey'}
              //   }
              // />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

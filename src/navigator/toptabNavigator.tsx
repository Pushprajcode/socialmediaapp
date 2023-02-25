import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Articles from '@socialmedia/modules/articles';
// import Channels from '@socialmedia/modules/channels';
import Channels from '@socialmedia/modules/channels';
import Articles from '@socialmedia/modules/articles';
import Videos from '@socialmedia/modules/videolist';
import {COLORS} from '@socialmedia/utils/colors';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SCREEN_NAMES} from './screenNmaes';

const Tab = createMaterialTopTabNavigator();

export function ToptabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          paddingTop: normalize(14),
          marginHorizontal: normalize(20),
        },
        tabBarIndicatorStyle: {
          width: 0,
        },
        tabBarLabel: ({focused}) => {
          return (
            <View
              style={{
                backgroundColor: focused ? COLORS.tabbarColor : COLORS.white,
                width: vw(100),
                alignItems: 'center',
                justifyContent: 'center',
                padding: vw(10),
                borderRadius: vw(20),
              }}>
              <Text
                style={
                  focused
                    ? {
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      }
                    : {fontSize: 18, color: 'black'}
                }>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name={SCREEN_NAMES.channels} component={Channels} />
      <Tab.Screen name={SCREEN_NAMES.Videos} component={Videos} />
      <Tab.Screen name={SCREEN_NAMES.Articles} component={Articles} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});

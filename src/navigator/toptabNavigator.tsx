import React from 'react';
import SCREEN_NAMES from './screenNmaes';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '@socialmedia/utils/colors';
import Articles from '@socialmedia/modules/articles';
import Videos from '@socialmedia/modules/videolist';
import Channels from '@socialmedia/modules/channels';
import {normalize, vw} from '@socialmedia/utils/dimensions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function ToptabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarPressColor: COLORS.white,
        tabBarStyle: {
          paddingTop: normalize(14),
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

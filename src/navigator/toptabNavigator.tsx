import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Articles from '@socialmedia/articles';
import Channels from '@socialmedia/channels';
import {COLORS} from '@socialmedia/utils/colors';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';
import Video from '@socialmedia/videolist';
import YouTubePlayer from '@socialmedia/youtubePlayer';
import React from 'react';
import {Text, View} from 'react-native';
import {SCREEN_NAMES} from './screenNmaes';

const Tab = createMaterialTopTabNavigator();

export function ToptabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: 'transparent'},
        tabBarIndicatorStyle: {
          width: 0,
        },
        tabBarLabel: ({focused}) => {
          return (
            <View
              style={{
                backgroundColor: focused ? COLORS.tabbarColor : COLORS.white,
                width: vw(100),
                // alignItems: 'center',
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
      <Tab.Screen name={SCREEN_NAMES.Videos} component={Video} />
      <Tab.Screen name={SCREEN_NAMES.Articles} component={Articles} />
    </Tab.Navigator>
  );
}

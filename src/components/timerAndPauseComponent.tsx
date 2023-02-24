import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {LocalImages} from '@socialmedia/utils/localImages';
import {vh, vw} from '@socialmedia/utils/dimensions';

interface timerAndPauseComponentType {
  //   pause: boolean;
  callback: Function;
}
export default function TimerAndPauseComponent(
  props: timerAndPauseComponentType,
) {
  console.log('callback ------>', props.callback);
  const pause = props;
  return (
    <View style={styles.containerStyle}>
      {/* <Text>timerAndPauseComponent</Text> */}
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          source={LocalImages.decrTime}
          resizeMode="contain"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={props.callback}>
        <Image
          source={LocalImages.playIcon}
          resizeMode="contain"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          source={LocalImages.incrTime}
          resizeMode="contain"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    flexDirection: 'row',
    width: vw(200),
    justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: vh(90),
    // borderWidth: 1,
    marginHorizontal: vw(30),
    marginTop: vh(90),
    marginLeft: vh(90),
  },
  iconStyle: {
    height: vw(30),
    width: vw(30),
    alignItems: 'flex-end',
  },
});

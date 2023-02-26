import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LocalImages} from '@socialmedia/utils/localImages';
import {vw} from '@socialmedia/utils/dimensions';
interface CustomTouchableBtnType {
  Icon: string;
  IconStyle?: object;
  onPress: Function;
}

export default function CustomTouchableBtn(props: CustomTouchableBtnType) {
  const {Icon, onPress} = props;
  console.log('---->');
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={Icon} resizeMode="contain" style={styles.iconStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    height: vw(30),
    width: vw(30),
  },
});

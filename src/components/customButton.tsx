import React from 'react';
import COLORS from '@socialmedia/utils/colors';
import {vh, vw} from '@socialmedia/utils/dimensions';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface customButtonType {
  title?: any;
  buttonContainerStyle?: any;
}

export default function CustomButton(props: customButtonType) {
  const {title, buttonContainerStyle} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.ContentContainerStyle, buttonContainerStyle]}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  ContentContainerStyle: {
    marginHorizontal: vw(7),
    height: vh(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tabbarColor,
    borderRadius: vw(20),
    width: vw(150),
  },
  textStyle: {
    color: COLORS.white,
    textAlign: 'center',
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {vh, vw} from '@socialmedia/utils/dimensions';
import {COLORS} from '@socialmedia/utils/colors';
interface customButtonType {
  title: any;
  buttonContainerStyle: any;
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
    height: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    borderRadius: vw(10),
  },
  textStyle: {
    color: COLORS.white,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import COLORS from '@socialmedia/utils/colors';
import local_string from '@socialmedia/utils/strings';
import HeaderComponent from '@socialmedia/components/headerComponent';
import {ToptabNavigator} from '@socialmedia/navigator/toptabNavigator';

export default function Home() {
  return (
    <View style={styles.containerStyle}>
      <HeaderComponent title={local_string.Favorits} />
      <View style={styles.containerStyle}>
        <ToptabNavigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

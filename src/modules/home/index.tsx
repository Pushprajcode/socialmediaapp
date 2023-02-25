import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '@socialmedia/components/headerComponent';
import {local_string} from '@socialmedia/utils/strings';
import {ToptabNavigator} from '@socialmedia/navigator/toptabNavigator';
import {COLORS} from '@socialmedia/utils/colors';

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

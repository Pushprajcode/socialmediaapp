import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTouchableBtn from './customTouchableBtn';
import {LocalImages} from '@socialmedia/utils/localImages';
import {SCREEN_HEIGHT, SCREEN_WIDTH, vh} from '@socialmedia/utils/dimensions';

export default function PlayerControl({videoFn, currentTime, pause, callBack}) {
  console.log('nkj36254758967');
  return (
    <View style={styles.containerStyle}>
      <CustomTouchableBtn
        Icon={LocalImages.decrTime}
        onPress={() => {
          videoFn?.seek(currentTime > 0 ? currentTime - 10 : currentTime);
        }}
      />
      <CustomTouchableBtn
        Icon={LocalImages.playIcon}
        onPress={() => callBack()}
      />
      <CustomTouchableBtn Icon={LocalImages.incrTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    width: SCREEN_WIDTH / 2,
    alignSelf: 'center',
    zIndex: 10,
    position: 'absolute',
    top: SCREEN_WIDTH / 4,
  },
});

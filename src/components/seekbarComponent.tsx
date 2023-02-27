import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Slider from '@react-native-community/slider';
import React from 'react';
import {normalize, vw} from '@socialmedia/utils/dimensions';
import COLORS from '@socialmedia/utils/colors';
import {LocalImages} from '@socialmedia/utils/localImages';
import SCREEN_NAMES from '@socialmedia/navigator/screenNmaes';
import {useNavigation} from '@react-navigation/native';

export default function seekbarComponent() {
  const navigation = useNavigation<any>();
  const [currentTime, setcurrentTime] = useState();
  return (
    <View style={styles.SliderContainerView}>
      <Slider
        style={styles.sliderContainerStyle}
        minimumTrackTintColor={COLORS.tabbarColor}
        maximumTrackTintColor={COLORS.white}
        minimumValue={0}
        maximumValue={videotime}
        value={currentTime}
        onValueChange={value => {
          setcurrentTime(value);
          refVideo?.seek(value);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: normalize(10),
        }}>
        <Text style={styles.timeText}>
          {OnProgressData}
          {'/'}
          {progressTime}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          // style={{flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.FullScreen, {
              uri,
            });
          }}>
          <Image
            source={LocalImages.fullScreen}
            style={styles.fullScreenIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainerStyle: {},
  SliderContainerView: {
    paddingVertical: normalize(12),
  },
  timeText: {
    color: COLORS.white,
    // left: normalize(10)
  },
  fullScreenIcon: {
    height: vw(22),
    width: vw(22),
    // left: vw(10),
    // top: vh(30),
  },
});

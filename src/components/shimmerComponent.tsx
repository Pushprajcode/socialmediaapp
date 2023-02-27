import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import {normalize, SCREEN_HEIGHT} from '@socialmedia/utils/dimensions';
import COLORS from '@socialmedia/utils/colors';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

/**
 *
 * @returns
 */
const VideoShimmer = () => {
  const videoContainerRef = React.createRef<any>();
  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      Animated.parallel([videoContainerRef.current.getAnimated()]),
    ]);
    Animated.loop(facebookAnimated).start();
  }, []);

  return (
    <View style={styles.videoPlayerShimmerContainer}>
      <ShimmerPlaceholder
        style={styles.shimmerVideoStyle}
        ref={videoContainerRef}
        stopAutoRun
      />
      <ActivityIndicator size={40} style={styles.loaderStyle} />
    </View>
  );
};

/**
 *
 * @returns
 */
const CustomShimmer = () => {
  // Handle animation
  const videoContainerRef = React.createRef<any>();
  const textRef = React.createRef<any>();

  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      Animated.parallel([
        videoContainerRef.current.getAnimated(),
        textRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(facebookAnimated).start();
  }, []);

  return (
    <View style={styles.customShimmerContainer}>
      <ShimmerPlaceholder
        style={styles.videoImageStyle}
        ref={videoContainerRef}
        stopAutoRun
      />
      <ShimmerPlaceholder
        style={styles.titleShimmer}
        ref={textRef}
        stopAutoRun
      />
      <View style={styles.numberViewContainer}>
        <ShimmerPlaceholder
          style={styles.viewShimmer}
          ref={textRef}
          stopAutoRun
        />
        <ShimmerPlaceholder
          style={styles.channelShimmer}
          ref={textRef}
          stopAutoRun
        />
      </View>
    </View>
  );
};

export {CustomShimmer, VideoShimmer};

const styles = StyleSheet.create({
  videoPlayerShimmerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerVideoStyle: {
    width: '100%',
    height: SCREEN_HEIGHT / 3.4,
  },
  loaderStyle: {
    alignItems: 'center',
    position: 'absolute',
  },
  videoImageStyle: {
    width: windowWidth - 40,
    height: windowHeight / 5,
    marginHorizontal: normalize(20),
  },
  numberViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleShimmer: {
    width: windowWidth - 80,
    height: 20,
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
  viewShimmer: {
    width: 40,
    height: 40,
    marginRight: normalize(20),
    marginTop: normalize(20),
    borderRadius: normalize(60),
  },
  customShimmerContainer: {
    width: windowWidth - windowWidth * 0.1,
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    paddingBottom: normalize(10),
    alignSelf: 'center',
  },
  channelShimmer: {
    width: windowWidth - windowWidth * 0.37,
    height: 20,
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
});

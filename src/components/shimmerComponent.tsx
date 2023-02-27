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
import COLORS from '@socialmedia/utils/colors';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
import {normalize, SCREEN_HEIGHT, vh} from '@socialmedia/utils/dimensions';
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
 * shimmer animation handled
 */
const CustomShimmer = () => {
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
    <View style={styles.shimmerContainer}>
      <ShimmerPlaceholder
        style={styles.videoImgStyle}
        ref={videoContainerRef}
        stopAutoRun
      />
      <ShimmerPlaceholder
        style={styles.shimmerTitle}
        ref={textRef}
        stopAutoRun
      />
      <View style={styles.numberViewContainer}>
        <ShimmerPlaceholder
          style={styles.shimmerView}
          ref={textRef}
          stopAutoRun
        />
        <ShimmerPlaceholder
          style={styles.shimmercircular}
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
  videoImgStyle: {
    width: windowWidth - 40,
    height: windowHeight / 5,
    marginHorizontal: normalize(20),
  },
  numberViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shimmerTitle: {
    width: windowWidth - 80,
    height: 20,
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
  shimmerView: {
    width: 40,
    height: 40,
    marginRight: normalize(20),
    marginTop: normalize(20),
    borderRadius: normalize(60),
  },
  shimmerContainer: {
    width: windowWidth - windowWidth * 0.1,
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    paddingBottom: normalize(10),
    alignSelf: 'center',
  },
  shimmercircular: {
    width: windowWidth - windowWidth * 0.37,
    height: vh(20),
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
});

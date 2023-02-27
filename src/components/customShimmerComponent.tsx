import COLORS from '@socialmedia/utils/colors';
import {vh, vw} from '@socialmedia/utils/dimensions';
import React, {useState, useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ShimmeringType {
  colors?: Array<string>;
  gradientStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle> & {width: number; height: number};
}
const GREY = 'rgb(234, 234, 234)';
const Shimmering = ({colors, gradientStyle, wrapperStyle}: ShimmeringType) => {
  const shimmeringAnimatedValue = useRef(new Animated.Value(0)).current;
  const [viewWidth, setViewWidth] = useState(-1);
  const gradientColors = [GREY, '#fff', GREY];

  const ShimmringAnimation = Animated.loop(
    Animated.timing(shimmeringAnimatedValue, {
      useNativeDriver: false,
      delay: 1200,
      duration: 1000,
      toValue: 1,
    }),
  );
  const animation = ShimmringAnimation;
  const startAnimation = () => {
    animation.start();
  };

  const getLeftValue = () => {
    return shimmeringAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-viewWidth, viewWidth],
    });
  };
  useEffect(() => {
    startAnimation();
  }, []);

  const width = Dimensions.get('screen').width;
  const loadingStyle = {backgroundColor: GREY};
  const left = getLeftValue();
  return (
    <View
      style={{
        width: wrapperStyle?.width ?? width,
        height: wrapperStyle?.height ?? 200,
      }}>
      <Text>{'DJKJKDFJKFD'}</Text>
      <View
        style={[styles.container, loadingStyle, wrapperStyle]}
        onLayout={event => setViewWidth(event.nativeEvent.layout.width)}>
        <Animated.View
          style={[
            {
              flex: 1,
              left,
            },
            gradientStyle,
          ]}>
          <LinearGradient
            colors={colors || gradientColors}
            start={{x: 0.3, y: 0.2}}
            end={{x: 0.8, y: 0.5}}
            style={{flex: 1}}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: -20,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    marginVertical: vh(10),
    borderRadius: vw(15),
  },
});

export default Shimmering;

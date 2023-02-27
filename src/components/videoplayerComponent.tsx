import Video from 'react-native-video';
import React, {useEffect, useState} from 'react';
import {
  normalize,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  vh,
  vw,
} from '@socialmedia/utils/dimensions';
import COLORS from '@socialmedia/utils/colors';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import LocalImages from '@socialmedia/utils/localImages';
import Orientation from 'react-native-orientation-locker';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {VideoShimmer} from './shimmerComponent';
interface VideoPlayerComponentType {
  sources: object;
}

export default function VideoPlayerComponent(props: VideoPlayerComponentType) {
  const {source} = props;
  const [shimmerLoader, setShimmerLoader] = useState<boolean>(true);
  const [pause, setPaused] = useState<boolean>(true);
  const [load, setLoad] = useState<boolean>(true);
  const [currentTime, setcurrentTime] = useState(0);
  const [videotime, setVideoTime] = useState(0);
  const [refVideo, setRefVideo] = useState<any>('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [presentOrientation, setPresentOrientation] = useState('PORTRAIT');
  const videoRef = React.useRef<any>();
  const navigation = useNavigation<any>();
  const [fullScreenStyle, setfullScreenStyle] = useState<any>({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3.6,
  });
  /**
   * @ fn for shimmer state toggle
   */

  useEffect(() => {
    setTimeout(() => {
      setShimmerLoader(false);
    }, 2000);
  }, []);

  const onBuffer = ({isBuffer}: {isBuffer: boolean}) => {
    setLoad(isBuffer);
  };

  const handleDecr = () => {
    refVideo.seek(currentTime - 10);
  };
  const handleInc = () => {
    refVideo.seek(currentTime + 10);
  };
  const handlePausePlay = () => {
    setPaused(!pause);
  };

  React.useEffect(() => {
    Orientation.getOrientation(orientation => {
      if (orientation.includes('LANDSCAPE')) {
        Orientation.lockToPortrait();
      }
    });
    Orientation.addLockListener(orientation =>
      setPresentOrientation(orientation),
    );
    return () => {
      setPaused(true);
      Orientation.removeLockListener(onPressFullScreen);
    };
  }, []);
  const onPressFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (presentOrientation.includes('LANDSCAPE')) {
      Orientation.lockToPortrait();
      setfullScreenStyle({
        height: SCREEN_HEIGHT / 3,
        width: '100%',
      });
    } else {
      Orientation.lockToLandscape();
      setfullScreenStyle({
        top: normalize(0),
        height: SCREEN_WIDTH,
        width: SCREEN_HEIGHT,
      });
    }
  };

  const getMinutesFromSeconds = (videoduration: number) => {
    const minutes = videoduration >= 60 ? Math.floor(videoduration / 60) : 0;
    const seconds = Math.floor(videoduration - minutes * 60);
    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };
  const OnProgressData = getMinutesFromSeconds(videotime);
  const progressTime = getMinutesFromSeconds(currentTime);
  return (
    <>
      <View style={fullScreenStyle}>
        {shimmerLoader ? (
          <VideoShimmer />
        ) : (
          <Video
            source={{uri: source[0]}}
            muted={false}
            resizeMode="cover"
            style={styles.backgroundVideo}
            paused={!pause}
            ref={reference => setRefVideo(reference)}
            fullscreenOrientation={'all'}
            controls={false}
            onProgress={obj => setcurrentTime(obj.currentTime)}
            onLoad={obj => setVideoTime(obj.duration)}
            playInBackground={false}
            playWhenInactive={false}
            onBuffer={onBuffer}
          />
        )}

        <View style={styles.pausePlayView}>
          <View style={styles.backIconView}>
            <TouchableOpacity
              onPress={() => {
                if (fullScreenStyle.height === SCREEN_WIDTH) {
                  Orientation.lockToPortrait();
                  setfullScreenStyle({
                    height: SCREEN_HEIGHT / 3,
                    width: '100%',
                  });
                } else {
                  navigation.goBack();
                }
              }}>
              <Image
                style={styles.lefticonStyle}
                source={LocalImages.leftIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.doticonStyle} source={LocalImages.doticon} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            top:
              fullScreenStyle.height === SCREEN_WIDTH
                ? SCREEN_WIDTH / 2.5
                : '45%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            position: 'absolute',
          }}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleDecr}>
            <Image
              source={LocalImages.decrTime}
              resizeMode="contain"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.palyButtonView}
            activeOpacity={0.7}
            onPress={handlePausePlay}>
            {!pause ? (
              <Image
                source={LocalImages.playIcon}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            ) : (
              <Image
                source={LocalImages.pauseIcon}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={handleInc}>
            <Image
              source={LocalImages.incrTime}
              resizeMode="contain"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <Slider
          style={[
            styles.sliderContainerStyle,
            {
              top:
                fullScreenStyle.height === SCREEN_WIDTH
                  ? Platform.OS === 'android'
                    ? normalize(SCREEN_WIDTH - SCREEN_WIDTH * 0.34)
                    : normalize(SCREEN_WIDTH - SCREEN_WIDTH * 0.28)
                  : normalize(fullScreenStyle.height - 70),
            },
          ]}
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
            position: 'absolute',
            height: vh(20),
            top:
              fullScreenStyle.height === SCREEN_WIDTH
                ? Platform.OS == 'android'
                  ? normalize(SCREEN_WIDTH - SCREEN_WIDTH * 0.28)
                  : normalize(SCREEN_WIDTH - SCREEN_WIDTH * 0.18)
                : Platform.OS == 'android'
                ? normalize(fullScreenStyle.height - 55)
                : normalize(fullScreenStyle.height - 40),
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text style={styles.timeText}>
            {progressTime}
            {'/'}
            {OnProgressData}
          </Text>
          <TouchableOpacity style={{}} onPress={onPressFullScreen}>
            <Image style={[styles.iconStyle]} source={LocalImages.fullScreen} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
  iconStyle: {
    height: vw(25),
    width: vw(25),
    tintColor: COLORS.white,
    marginHorizontal: 10,
  },
  sliderContainerStyle: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
  },
  timeText: {
    color: COLORS.white,
    marginLeft: Platform.OS === 'android' ? vw(20) : vw(5),
  },
  backIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: vh(14),
  },
  pausePlayView: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    padding: vw(20),
  },
  palyButtonView: {marginHorizontal: normalize(30)},
  doticonStyle: {
    height: vw(25),
    width: vw(25),
    tintColor: COLORS.white,
  },
  lefticonStyle: {
    height: vw(25),
    width: vw(25),
    tintColor: COLORS.white,
  },
});

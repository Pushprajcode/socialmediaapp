import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
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
import SCREEN_NAMES from '@socialmedia/navigator/screenNmaes';
import LocalImages from '@socialmedia/utils/localImages';
import Orientation from 'react-native-orientation-locker';
interface VideoPlayerComponentType {
  sources: any;
}

export default function VideoPlayerComponent(props: VideoPlayerComponentType) {
  console.log('source', props);
  const {sources} = props;
  const [pause, setPaused] = useState<boolean>(true);
  const [load, setLoad] = useState<boolean>(true);
  const [currentTime, setcurrentTime] = useState(0);
  const [videotime, setVideoTime] = useState(0);
  const [refVideo, setRefVideo] = useState<any>('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [presentOrientation, setPresentOrientation] = useState('PORTRAIT');
  const videoRef = React.useRef<any>();
  const navigation = useNavigation<any>();
  const uri = refVideo?.props?.source?.uri;
  const [fullScreenStyle, setfullScreenStyle] = useState<any>({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3.6,
  });
  const handleDecr = () => {
    refVideo.seek(currentTime - 10);
  };
  const handleInc = () => {
    refVideo.seek(currentTime + 10);
  };
  const handlePausePlay = () => {
    setPaused(!pause);
  };

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
        paddingTop: normalize(20),
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
    <View style={fullScreenStyle}>
      <Video
        source={{
          uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        muted={false}
        controls={false}
        // paused={!play}
        resizeMode="stretch"
        ref={videoRef}
        // onLoad={onLoadEnd}
        // onProgress={onProgress}
        // onEnd={onEnd}
        style={styles.backgroundVideo}
        // resizeMode="cover"
        paused={pause}
        // fullscreenAutorotate={false}
        ref={reference => setRefVideo(reference)}
        // fullscreen={isFullScreen}
        fullscreenOrientation={'all'}
        // controls
        // ref={ref => setVideoRef(ref)}
        onProgress={obj => setcurrentTime(obj.currentTime)}
        onLoad={obj => setVideoTime(obj.duration)}
      />

      <View
        style={{
          height: vh(200),
          width: '100%',
          position: 'absolute',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
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
            <Image style={styles.iconStyle} source={LocalImages.leftIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Image style={styles.iconStyle} source={LocalImages.doticon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            top:
              fullScreenStyle.height === SCREEN_WIDTH
                ? SCREEN_WIDTH / 1.9
                : '50%',
            flexDirection: 'row',
            justifyContent: 'space-around',
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
            style={{marginHorizontal: normalize(30)}}
            activeOpacity={0.7}
            onPress={handlePausePlay}>
            {pause ? (
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
                  ? normalize(SCREEN_WIDTH - SCREEN_WIDTH * 0.28)
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

        <TouchableOpacity activeOpacity={0.7}></TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
            position: 'absolute',
            top:
              fullScreenStyle.height === SCREEN_WIDTH
                ? normalize(SCREEN_WIDTH - SCREEN_WIDTH * 0.2)
                : normalize(fullScreenStyle.height - 40),
            width: '100%',
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
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
  containerStyle: {
    flexDirection: 'row',
    width: vw(200),
    justifyContent: 'space-between',
    marginHorizontal: vw(30),
    marginTop: vh(90),
    marginLeft: vh(90),
  },
  iconStyle: {
    height: vw(30),
    width: vw(30),
    alignItems: 'flex-end',
    tintColor: COLORS.white,
  },
  sliderContainerStyle: {
    width: '90%',
    position: 'absolute',
    marginHorizontal: '5%',
  },
  timeText: {
    color: COLORS.white,
  },
});

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

import {LocalImages} from '@socialmedia/utils/localImages';

import {COLORS} from '@socialmedia/utils/colors';

import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '@socialmedia/navigator/screenNmaes';
import Orientation from 'react-native-orientation-locker';

export default function VideoPlayerComponent() {
  const [pause, setPaused] = useState<boolean>(true);
  const [currentTime, setcurrentTime] = useState(0);
  const [videotime, setVideoTime] = useState(0);
  const [refVideo, setRefVideo] = useState<any>('');
  const [presentOrientation, setPresentOrientation] = useState('PORTRAIT');
  const videoRef = React.useRef<any>();
  const navigation = useNavigation<any>();
  const uri = refVideo?.props?.source?.uri;
  const [fullScreenStyle, setfullScreenStyle] = useState<any>({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3.6,
  });
  console.log('567890', refVideo?.props?.source?.uri);
  const handleDecr = () => {
    console.log('------->63478', refVideo.seek);

    refVideo.seek(currentTime - 10);
    // setcurrentTime(currentTime - 10);
  };
  const handleInc = () => {
    console.log('------->63478', refVideo.seek);

    refVideo.seek(currentTime + 10);
    // setcurrentTime(currentTime - 10);
  };
  const handlePausePlay = () => {
    setPaused(!pause);
  };

  const onPressFullScreen = () => {
    console.log('curreOtnsdf-->', presentOrientation);
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

    console.log('currrrr', presentOrientation);
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
        }} // Can be a URL or a local file.
        //  ref={(ref) => {
        //    this.player = ref
        //  }}                                      // Store reference
        //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //  onError={this.videoError}               // Callback when video cannot be loaded
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
        fullscreenAutorotate={false}
        ref={reference => setRefVideo(reference)}
        // fullscreen={isFullScreen}
        fullscreenOrientation={'all'}
        // controls
        // ref={ref => setVideoRef(ref)}
        onProgress={obj => setcurrentTime(obj.currentTime)}
        onLoad={obj => setVideoTime(obj.duration)}
      />

      <TouchableOpacity
        style={{
          height: vh(200),
          width: '100%',
          //   backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          //   flex: 1,
          position: 'absolute',
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 10, top: 10}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.iconStyle} source={LocalImages.leftIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
          <Image style={styles.iconStyle} source={LocalImages.doticon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={handleDecr}>
          <Image
            source={LocalImages.decrTime}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          //    onPress={props.callback}
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

        <TouchableOpacity
          activeOpacity={0.7}
          // style={{flexDirection: 'row'}}
        ></TouchableOpacity>
        <Text style={styles.timeText}>
          {progressTime}
          {'/'}
          {OnProgressData}
        </Text>
        <TouchableOpacity style={{}} onPress={onPressFullScreen}>
          <Image
            style={[
              styles.iconStyle,
              {
                bottom:
                  fullScreenStyle.height === SCREEN_WIDTH
                    ? normalize(-60)
                    : normalize(-30),
              },
            ]}
            source={LocalImages.fullScreen}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
  containerStyle: {
    // flex: 1,
    flexDirection: 'row',
    width: vw(200),
    justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: vh(90),
    // borderWidth: 1,
    marginHorizontal: vw(30),
    marginTop: vh(90),
    marginLeft: vh(90),
  },
  iconStyle: {
    height: vw(30),
    width: vw(30),
    alignItems: 'flex-end',
  },
  sliderContainerStyle: {
    width: '90%',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: vw(20),
  },
  timeText: {
    color: COLORS.white,
  },
});

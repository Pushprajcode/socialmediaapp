import React, {useState} from 'react';
import Video from 'react-native-video';
import {vh, vw} from '@socialmedia/utils/dimensions';
import {LocalImages} from '@socialmedia/utils/localImages';
import TimerAndPauseComponent from './timerAndPauseComponent';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {COLORS} from '@socialmedia/utils/colors';

export default function VideoPlayerComponent() {
  const [pause, setPaused] = useState<boolean>(true);
  const [currentTime, setcurrentTime] = useState(0);
  const [videotime, setVideoTime] = useState(0);
  const [refVideo, setRefVideo] = useState<any>('');

  const getMinutesFromSeconds = (videoduration: number) => {
    const minutes = videoduration >= 60 ? Math.floor(videoduration / 60) : 0;
    const seconds = Math.floor(videoduration - minutes * 60);
    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };
  const OnProgressData = getMinutesFromSeconds(videotime);
  const progressTime = getMinutesFromSeconds(currentTime);
  console.log('23564758967089', refVideo);
  // console.log('jdfjkdfjnksjh', OnProgressData);
  return (
    <View style={{flex: 1}}>
      <Video
        source={{
          uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file.
        //  ref={(ref) => {
        //    this.player = ref
        //  }}                                      // Store reference
        //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //  onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        resizeMode="cover"
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
      <TimerAndPauseComponent
        // pause={pause}
        callback={() => {
          setPaused(!pause);
        }}
      />

      <Slider
        style={{width: 250, height: 40, marginLeft: 30}}
        minimumTrackTintColor={COLORS.tabbarColor}
        maximumTrackTintColor={COLORS.white}
        minimumValue={0}
        maximumValue={videotime}
        value={currentTime}
        onValueChange={value => {
          setcurrentTime(value);
          // console.log('---345678->', value);
          refVideo?.seek(value);
        }}
      />
      <Text style={{color: COLORS.white}}>
        {OnProgressData}
        {'/'}
        {progressTime}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{flexDirection: 'row-reverse'}}>
        <Image
          source={LocalImages.fullScreen}
          style={styles.fullScreenIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'grey',
  },
  fullScreenIcon: {
    height: vw(22),
    width: vw(22),
    // left: vw(10),
    // top: vh(30),
  },
});

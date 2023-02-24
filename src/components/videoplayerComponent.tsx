import React, {useState} from 'react';
import Video from 'react-native-video';
import {vh, vw} from '@socialmedia/utils/dimensions';
import {LocalImages} from '@socialmedia/utils/localImages';
import TimerAndPauseComponent from './timerAndPauseComponent';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default function VideoPlayerComponent() {
  const [pause, setPaused] = useState<boolean>(true);
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
        // fullscreen={isFullScreen}
        fullscreenOrientation={'all'}
      />
      <TimerAndPauseComponent
        // pause={pause}
        callback={() => {
          setPaused(!pause);
        }}
      />
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
    height: vw(25),
    width: vw(25),
    left: vw(10),
    top: vh(15),
  },
});

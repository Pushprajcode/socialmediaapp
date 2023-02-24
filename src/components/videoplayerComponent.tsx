import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import TimerAndPauseComponent from './timerAndPauseComponent';

export default function VideoPlayerComponent() {
  console.log('vidoe fdnkdf');
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
      />
      <TimerAndPauseComponent
        pause={pause}
        callback={() => {
          setPaused(!pause);
        }}
      />
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
});

import React, {useState} from 'react';
//@ts-ignore
import Video from 'react-native-video';
// import COLORS from '../../../utils/colors';

import {LocalImages} from '@socialmedia/utils/localImages';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '@socialmedia/utils/colors';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';

const {height, width} = Dimensions.get('window');

export default function FullScreeVideo({route}: any) {
  const [play, setPlay] = useState(true);
  const {uri} = route?.params;
  //   const {callbackFn, index} = route.params;

  React.useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  const navigation = useNavigation<any>();
  //   const isFocused = useIsFocused();
  let playerRef: any = React.useRef(null);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={LocalImages.leftIcon} />
      </TouchableOpacity> */}
      <Image source={LocalImages.likeIcon} style={styles.logo} />
      <Video
        source={{
          uri,
        }}
        style={[styles.video]}
        // controls
        fullscreen={false}
        ref={(ref: any) => {
          playerRef = ref;
        }}
        // startOnLoad={true}
        // paused={isFocused ? false : true}
        // toggleResizeModeOnFullscreen={false}
        repeat={true}
        resizeMode={'contain'}
        // rotation={90}
      />

      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => {
          Orientation.lockToPortrait();
          //   callbackFn(index);
          setPlay(false);
          navigation.goBack();
        }}>
        <Image source={LocalImages.leftIcon} style={styles.backButton} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Image source={LocalImages.shareIcon} style={styles.button} />
        <Image source={LocalImages.moneyIcon} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.darkGrey,
    // height: 300,
    // width: height,
    overflow: 'hidden',
    // left: vw(-42),

    // transform: [
    //   {
    //     rotate: '90deg',
    //   },
    // ],
  },
  buttonContainer: {
    top: vh(80),
    right: vw(-60),
    height: vh(200),
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  button: {
    right: vw(100),
    width: vw(70),
    height: vh(70),
    resizeMode: 'contain',
  },
  button1: {
    left: vw(-20),
    width: vw(40),
    bottom: vh(40),
    height: vh(40),
    position: 'absolute',
    resizeMode: 'contain',
  },
  logo: {
    top: vh(40),
    width: vw(100),
    height: vh(100),
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'contain',
  },
  backButton: {
    width: vw(20),
    height: vh(20),
    resizeMode: 'contain',
  },
  backButtonContainer: {
    top: vh(30),
    left: vw(30),
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  video: {
    width: '100%',
    height: '100%',
    // height: width,
    // position: 'absolute',
    // top: 0,
    // right: 0,
  },
});

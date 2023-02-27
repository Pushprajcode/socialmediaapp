import React from 'react';
import COLORS from '@socialmedia/utils/colors';
import local_string from '@socialmedia/utils/strings';
import {useNavigation} from '@react-navigation/native';
import LocalImages from '@socialmedia/utils/localImages';
import SCREEN_NAMES from '@socialmedia/navigator/screenNmaes';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {normalize, SCREEN_WIDTH, vh, vw} from '@socialmedia/utils/dimensions';

interface CustomCardType {
  numColumns?: Number;
  title?: string;
  image: string;
  viewNumber: string;
  time: string;
  womenIcon: any;
  subName?: string;
  description?: string;
  sources?: any;
}

export default function CustomCard(props: CustomCardType) {
  const {
    title,
    image,
    viewNumber,
    time,
    subName,
    womenIcon,
    description,
    sources,
  } = props;
  const navigation = useNavigation<any>();

  const handleCardPress = () => {
    console.log('sourdes here ', sources);
    navigation.navigate(SCREEN_NAMES.youTubePlayer, {
      title: title,
      time: time,
      viewNumber: viewNumber,
      description: description,
      sources: sources,
    });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleCardPress}
      style={styles.cardContainer}>
      <View style={styles.imageContainerStyle}>
        <Image
          resizeMode="contain"
          source={{uri: image}}
          style={styles.imageStyle}
        />

        <Image
          style={styles.playIconStyle}
          source={LocalImages.playIcon}
          resizeMode={'contain'}
        />
        <Text style={styles.timerStyle}>{local_string.time}</Text>
      </View>
      <View style={styles.titleContainerView}>
        <Text style={styles.titleTextStyle}>{title}</Text>
        <View style={styles.viewNumber}>
          <Text style={styles.viewNumberText}>{viewNumber}</Text>
          <Text style={styles.dotText}>{'.'}</Text>
          <Text style={styles.viewNumberText}>{time}</Text>
        </View>
        <View style={styles.womenContainerView}>
          <Image
            style={styles.womenImgStyle}
            source={womenIcon}
            resizeMode="contain"
          />
          <Text style={styles.subNameText}>{subName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    marginVertical: vh(10),
    borderRadius: vw(15),
  },
  viewNumber: {
    flexDirection: 'row',
    marginVertical: vh(8),
    width: 145,
    aspectRatio: 140 / 20,
    justifyContent: 'space-between',
  },
  titleTextStyle: {
    fontSize: vw(20),
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  imageContainerStyle: {
    height: SCREEN_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'cover',
    height: '100%',
    borderTopLeftRadius: normalize(15),
    borderTopRightRadius: normalize(15),
    width: '100%',
  },
  womenImgStyle: {
    height: vw(30),
    width: vw(30),
    borderRadius: vw(20),
  },
  subNameText: {
    marginLeft: vh(10),
    textAlign: 'center',
    color: COLORS.subText,
  },
  viewNumberText: {
    textAlign: 'center',
    color: COLORS.lightGrey,
  },
  dotText: {
    color: COLORS.lightGrey,
    fontSize: vw(10),
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  playIconStyle: {
    height: normalize(30),
    width: normalize(30),
    position: 'absolute',
  },
  timerStyle: {
    position: 'absolute',
    right: vh(10),
    padding: vh(7),
    backgroundColor: COLORS.cardColor,
    color: COLORS.white,
    fontSize: normalize(16),
    borderRadius: normalize(10),
    bottom: normalize(10),
    opacity: 0.9,
  },
  titleContainerView: {
    padding: vh(19),
  },
  womenContainerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

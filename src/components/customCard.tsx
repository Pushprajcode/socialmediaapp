import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH, vh, vw} from '@socialmedia/utils/dimensions';
import {COLORS} from '@socialmedia/utils/colors';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '@socialmedia/navigator/screenNmaes';

interface customcardType {
  numColumns?: any;
  title?: any;
  image: any;
  viewNumber: string;
  time: string;
  womenIcon: any;
  subName?: string;
  description?: string;
}

export default function CustomCard(props: customcardType) {
  const {title, image, viewNumber, time, subName, womenIcon, description} =
    props;
  const navigation = useNavigation<any>();
  console.log('--2364758690', title);
  const onpressNavigator = () => {
    navigation.navigate(SCREEN_NAMES.youTubePlayer, {
      title: title,
      time: time,
      viewNumber: viewNumber,
      description: description,
    });
  };
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity activeOpacity={0.7} onPress={onpressNavigator}>
        <Image source={{uri: image}} style={styles.imagestyle} />
        <View
          style={{
            padding: vh(19),
          }}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <View style={styles.viewNumber}>
            <Text style={styles.viewNumberText}>{viewNumber}</Text>
            <Text style={styles.dotText}>{'.'}</Text>
            <Text style={styles.viewNumberText}>{time}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image style={styles.womenImgStyle} source={womenIcon} />
            <Text style={styles.subNameText}>{subName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    marginVertical: vh(10),
    borderRadius: vw(17),
  },
  viewNumber: {
    flexDirection: 'row',
    marginVertical: vh(8),
    // backgroundColor: 'red',
    width: vw(150),
    justifyContent: 'space-between',
  },
  titleTextStyle: {
    fontSize: vw(20),
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  imagestyle: {
    height: SCREEN_WIDTH / 2,
    resizeMode: 'cover',
    borderRadius: vh(15),
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
    // borderWidth: 1,
    color: COLORS.lightGrey,
  },
  dotText: {
    color: COLORS.lightGrey,
    fontSize: vw(10),
    // borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});

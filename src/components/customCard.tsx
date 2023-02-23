import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vh, vw} from '@socialmedia/utils/dimensions';
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
            padding: 10,
          }}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <View style={styles.viewNumber}>
            <Text>{viewNumber}</Text>
            <Text>{time}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.womenImgStyle} source={womenIcon} />
            <Text>{subName}</Text>
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
    marginVertical: 10,
    borderRadius: vw(10),
  },
  viewNumber: {
    flexDirection: 'row',
    marginVertical: vh(10),
  },
  titleTextStyle: {
    fontSize: vw(20),
  },
  imagestyle: {
    height: vh(205),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: vh(15),
  },
  womenImgStyle: {
    height: vw(30),
    width: vw(30),
    borderRadius: vw(20),
  },
});

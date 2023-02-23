import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LocalImages} from '@socialmedia/utils/localImages';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';
import {COLORS} from '@socialmedia/utils/colors';
import ProfileComponent from './profileComponent';

interface customcardType {
  numColumns?: any;
  title?: any;
  image: any;
  viewNumber: string;
  time: string;
}

export default function CustomCard(props: customcardType) {
  const {title, image, viewNumber, time} = props;
  console.log('--2364758690', title);
  return (
    // <FlatList data={item} renderItem={onrender} />
    // <View style={styles.cardContainer}>
    //   <Image source={LocalImages.splash} style={styles.videoList} />
    // </View>
    // return (<View style={styles.cardContainer}></View>)
    <View style={styles.cardContainer}>
      {/* <Image style={{height: 300}} source={{uri: video}} /> */}
      {/* <Text>{'djjkfdjkfjkdfs'}</Text> */}
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          source={{uri: image}}
          style={{height: vh(205), width: vw(335), resizeMode: 'contain'}}
        />
        <Text>{title}</Text>
        <View style={styles.viewNumber}>
          <Text>{viewNumber}</Text>
          <Text>{time}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    // height: '40%',
    // width: '100%',
    borderRadius: vw(10),
    padding: vh(10),
    // marginVertical: vh(10),
    // marginTop: 20,
    borderWidth: vh(1),
    borderColor: COLORS.white,
    flex: 1,
  },
  viewNumber: {
    flexDirection: 'row',
  },
});

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LocalImages} from '@socialmedia/utils/localImages';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';
import {COLORS} from '@socialmedia/utils/colors';
import ProfileComponent from './profileComponent';

interface customcardType {
  numColumns?: any;
  item?: any;
}

export default function CustomCard(props: customcardType) {
  const {item} = props;
  console.log('----', item);
  const onrender = ({item}: any) => {
    console.log('data9999', item.image);
    return <View style={styles.cardContainer}></View>;
  };

  return (
    <FlatList data={item} renderItem={onrender} />
    // <View style={styles.cardContainer}>
    //   <Image source={LocalImages.splash} style={styles.videoList} />
    // </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    height: '50%',
    width: '100%',
    borderRadius: vw(10),
  },
  gridImg: {
    height: '100%',
    width: '100%',
  },
  videoList: {width: '100%', height: '50%', borderRadius: 10},
});

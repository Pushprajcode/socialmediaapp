import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlayerTitleComponent from '@socialmedia/components/playerTitleComponent';
import {LocalImages} from '@socialmedia/utils/localImages';
import {iconsData} from '@socialmedia/utils/dummyData';
import {vw} from '@socialmedia/utils/dimensions';

export default function YouTubePlayer({route}: any) {
  const {title, time, viewNumber, description} = route.params;
  const renderImageData = ({item}: any) => {
    console.log('item 23t4y789506-7', item);
    return (
      <View style={styles.iconrenderView}>
        <Image style={styles.iconsStyle} source={item.icon} />
        <Text>{item.labels}</Text>
      </View>
    );
  };

  const listHeader = () => {
    return (
      <View>
        <Text>{title}</Text>
        <Text>{viewNumber}</Text>
        <Text>{time}</Text>
        <Text numberOfLines={3} style={styles.discriptionStyle}>
          {description}
        </Text>
        <FlatList
          data={iconsData}
          renderItem={renderImageData}
          horizontal
          // ItemSeparatorComponent={()=>{

          // }}
        />
      </View>
    );
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.videoContainerView}></View>
      {listHeader()}

      {/* <PlayerTitleComponent /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  videoContainerView: {
    height: 200,
    backgroundColor: 'red',
    width: '100%',
  },
  discriptionStyle: {},
  shareView: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  iconrenderView: {
    borderWidth: 2,
    backgroundColor: 'red',
  },
  iconsStyle: {
    height: vw(30),
    width: vw(30),
  },
});

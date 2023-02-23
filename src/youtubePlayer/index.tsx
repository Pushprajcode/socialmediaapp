import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {iconsData} from '@socialmedia/utils/dummyData';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';
import {LocalImages} from '@socialmedia/utils/localImages';
import {local_string} from '@socialmedia/utils/strings';
import CustomButton from '@socialmedia/components/customButton';
import {COLORS} from '@socialmedia/utils/colors';

export default function YouTubePlayer({route}: any) {
  const {title, time, viewNumber, description} = route.params;
  const renderImageData = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.iconrenderView} activeOpacity={0.7}>
        <Image
          resizeMode="contain"
          style={styles.iconsStyle}
          source={item.icon}
        />
        <Text>{item.labels}</Text>
      </TouchableOpacity>
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
          contentContainerStyle={styles.contentContainerStyle}
          horizontal
        />
        <View
          style={{
            flexDirection: 'row',
            // borderWidth: 1,
            alignItems: 'center',
            paddingHorizontal: normalize(10),
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.iconImage} source={LocalImages.womenIcon} />
            <View style={{marginLeft: vh(19)}}>
              <Text style={styles.gurujiText}>
                {local_string.Technicalguruji}
              </Text>
              <Text>{local_string.subcriber}</Text>
            </View>
          </View>
          <CustomButton title={'JDJKDFJKjkdjkd'} />
        </View>
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
    height: vh(55),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconsStyle: {
    height: vw(30),
    width: vw(30),
  },
  contentContainerStyle: {justifyContent: 'space-evenly', flex: 1},
  iconImage: {
    height: vw(30),
    width: vw(30),
    borderRadius: vw(10),
  },
  subscribeButton: {
    height: vh(50),
    width: vw(90),
    backgroundColor: 'red',
    borderRadius: vh(10),
  },
  gurujiText: {
    color: COLORS.black,
  },
});

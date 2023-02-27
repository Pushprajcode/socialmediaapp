import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Share from 'react-native-share';
import COLORS from '@socialmedia/utils/colors';
import React, {useEffect, useState} from 'react';
import {vh, vw} from '@socialmedia/utils/dimensions';
import local_string from '@socialmedia/utils/strings';
import LocalImages from '@socialmedia/utils/localImages';
import Orientation from 'react-native-orientation-locker';
import CustomCard from '@socialmedia/components/customCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '@socialmedia/components/customButton';
import {iconsData, mediaJson} from '@socialmedia/utils/dummyData';
import VideoPlayerComponent from '@socialmedia/components/videoplayerComponent';

export default function YouTubePlayer({route}: any) {
  const insets = useSafeAreaInsets();
  const {title, time, viewNumber, description, sources} = route.params;
  const [switchSource, setswitchSource] = useState(sources[0]);
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {}
  };
  const renderImageData = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.iconrenderView}
        activeOpacity={0.7}
        onPress={item?.labels == 'Share' ? myCustomShare : null}>
        <Image
          resizeMode="contain"
          style={styles.iconsStyle}
          source={item?.icon}
        />
        <Text style={styles.labelsText}>{item?.labels}</Text>
      </TouchableOpacity>
    );
  };
  const comments = () => {
    return (
      <View style={styles.commentsContainerView}>
        <View style={styles.commentItemView}>
          <View style={styles.commentView}>
            <Text style={styles.commentText}>{local_string.Comments}</Text>
            <Text style={styles.numberText}>{'34'}</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={LocalImages.expandIcon}
              style={styles.expandIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.subcribenoView}>
          <Image source={LocalImages.womenIcon} style={styles.iconImage} />
          <Text style={styles.commentsdiscText}>
            {local_string.CommentsSection}
          </Text>
        </View>
      </View>
    );
  };

  const listHeader = () => {
    return (
      <View>
        <View style={[styles.headerContainerView]}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.viewnoTimeView}>
            <Text style={styles.viewNumberText}>{viewNumber}</Text>
            <Text style={styles.viewNumberText}>{time}</Text>
          </View>
          <Text numberOfLines={3} style={styles.discriptionStyle}>
            {description}
          </Text>
        </View>
        <FlatList
          data={iconsData}
          renderItem={renderImageData}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal
          scrollEnabled={false}
        />
        <View style={styles.subcribeContainerView}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.iconImage} source={LocalImages.womenIcon} />
            <View style={{marginLeft: vh(19)}}>
              <Text style={styles.gurujiText}>
                {local_string.Technicalguruji}
              </Text>
              <Text style={styles.gurujiText}>{local_string.subcriber}</Text>
            </View>
          </View>
          <CustomButton title={local_string.subcribe} />
        </View>
        {comments()}
      </View>
    );
  };
  const listRender = ({item}: any) => {
    console.log(item);
    return (
      <View style={styles.cardContainerView}>
        <CustomCard
          image={item?.thumb}
          title={item?.title}
          viewNumber={local_string.noView}
          time={local_string.days}
          womenIcon={LocalImages.womenIcon}
          subName={local_string.split}
          description={item?.description}
          sources={item?.sources}
        />
      </View>
    );
  };
  const handleExtractor = (item: any, index: any) => {
    return index.toString();
  };
  return (
    <View style={[styles.containerStyle, {paddingTop: insets.top}]}>
      <VideoPlayerComponent source={sources} />
      <FlatList
        ListHeaderComponent={listHeader}
        data={mediaJson
          .filter(item => item.sources[0] != switchSource)
          .splice(0, 6)}
        renderItem={listRender}
        showsVerticalScrollIndicator={false}
        keyExtractor={handleExtractor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  videoContainerView: {},
  discriptionStyle: {
    color: COLORS.grey,
  },
  shareView: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  iconrenderView: {
    height: vh(55),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(30),
  },
  iconsStyle: {
    height: vw(30),
    width: vw(30),
  },
  contentContainerStyle: {justifyContent: 'space-evenly', flex: 1},
  iconImage: {
    height: vw(40),
    width: vw(40),
    borderRadius: vw(20),
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
  subcribeContainerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(10),
    justifyContent: 'space-between',
    borderTopWidth: 1.5,
    borderTopColor: COLORS.darkGrey,
    borderBottomColor: COLORS.darkGrey,
    borderBottomWidth: 1.5,
    height: vh(90),
    marginTop: vh(20),
  },
  commentsContainerView: {
    borderBottomColor: COLORS.darkGrey,
    borderBottomWidth: 1.5,
    height: vh(110),
    justifyContent: 'center',
    padding: vh(20),
  },
  commentsdiscText: {
    color: COLORS.black,
    marginLeft: vh(10),
  },
  titleText: {
    color: COLORS.black,
    fontSize: vw(18),
    fontFamily: 'Poppins-Regular',
  },
  headerContainerView: {
    padding: vw(12),
  },
  viewNumberText: {
    textAlign: 'center',
    color: COLORS.lightGrey,
  },
  labelsText: {
    color: COLORS.black,
  },
  expandIconStyle: {
    height: vw(20),
    width: vw(20),
  },
  commentItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentText: {color: COLORS.black},
  numberText: {color: COLORS.black, marginLeft: vw(10)},
  cardContainerView: {marginHorizontal: vw(10)},
  subcribenoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(16),
  },
  commentView: {flexDirection: 'row'},
  viewnoTimeView: {flexDirection: 'row', marginVertical: 10},
});

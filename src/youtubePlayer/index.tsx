import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '@socialmedia/utils/colors';
import {local_string} from '@socialmedia/utils/strings';
import {LocalImages} from '@socialmedia/utils/localImages';
import CustomCard from '@socialmedia/components/customCard';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';
import CustomButton from '@socialmedia/components/customButton';
import {iconsData, mediaJson} from '@socialmedia/utils/dummyData';
import VideoPlayerComponent from '@socialmedia/components/videoplayerComponent';
import Share from 'react-native-share';

export default function YouTubePlayer({route}: any) {
  const {title, time, viewNumber, description} = route.params;

  // console.log('kjkdjk');
  const myCustomShare = async () => {
    console.log('kjkdjk');
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
      // url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  const renderImageData = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.iconrenderView}
        activeOpacity={0.7}
        onPress={myCustomShare}>
        <Image
          resizeMode="contain"
          style={styles.iconsStyle}
          source={item.icon}
        />
        <Text>{item.labels}</Text>
      </TouchableOpacity>
    );
  };
  const comments = () => {
    return (
      <View style={styles.commentsContainerView}>
        <View style={{flexDirection: 'row'}}>
          <Text>{'DKJKJDSKJ'}</Text>
          <Text>{'34'}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: vh(16),
          }}>
          <Image source={LocalImages.womenIcon} style={styles.iconImage} />
          <Text style={styles.commentsdiscText}>
            {'DIJKFDKFSDJKSFDJKFDSJKdkdfskjfdsjkdfhkfd'}
          </Text>
        </View>
      </View>
    );
  };

  const listHeader = () => {
    return (
      <View>
        <View style={styles.headerContainerView}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text>{viewNumber}</Text>
            <Text>{time}</Text>
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
        />
        <View style={styles.subcribeContainerView}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.iconImage} source={LocalImages.womenIcon} />
            <View style={{marginLeft: vh(19)}}>
              <Text style={styles.gurujiText}>
                {local_string.Technicalguruji}
              </Text>
              <Text>{local_string.subcriber}</Text>
            </View>
          </View>
          <CustomButton title={local_string.subcribe} />
        </View>
        {comments()}
      </View>
    );
  };
  const listRender = ({item}: any) => {
    console.log('-------', item);

    return (
      <CustomCard
        image={item?.thumb}
        title={item.title}
        viewNumber={'94k views '}
        time={'3 days ago'}
        womenIcon={LocalImages.womenIcon}
        subName={local_string.split}
        description={item?.description}
      />
    );
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.videoContainerView}>
        <VideoPlayerComponent />
      </View>
      {/* {listHeader()} */}
      {/* <PlayerTitleComponent /> */}

      <FlatList
        ListHeaderComponent={listHeader}
        data={mediaJson}
        renderItem={listRender}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  videoContainerView: {
    height: 200,
    backgroundColor: 'grey',
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
    paddingHorizontal: normalize(10),
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
  headerContainerView: {padding: 20},
});
function options(options: any) {
  throw new Error('Function not implemented.');
}

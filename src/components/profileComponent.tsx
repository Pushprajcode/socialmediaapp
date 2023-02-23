import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';
import {COLORS} from '@socialmedia/utils/colors';
import {LocalImages} from '@socialmedia/utils/localImages';
import {dummyData} from '@socialmedia/utils/dummyData';
dummyData;

interface profileType {
  image: any;
  name: string;
  rightIcon: any;
  touchableText: any;
}

export default function ProfileComponent(props: profileType) {
  // const {screen} = Dimensions.get("screen")
  const itemSeprator = () => {
    return (
      <View
        style={{
          borderWidth: 0.7,
          height: vh(50),
          marginVertical: vh(8),
          borderColor: COLORS.darkGrey,
        }}
      />
    );
  };
  const onRender = ({item, index}: any) => {
    console.log('----.', item);
    return (
      <View style={styles.itemContainer}>
        <Text style={{color: 'black', textAlign: 'center'}}>
          {item?.counts}
          {`\n`}
          {item?.labels}
        </Text>
      </View>
    );
  };

  const {image, name, rightIcon, touchableText} = props;
  return (
    <View style={styles.containerStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // alignItems: 'center',
          // borderWidth: 1,

          padding: normalize(16),
        }}>
        <Image source={image} style={styles.imageStyle} />
        <View
          style={
            {
              // height: vw(63),
              // marginHorizontal: vh(10),
              // marginTop: vh(14),
              // borderRadius: vw(10),
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // borderWidth: 4,
              // backgroundColor: 'red',
            }
          }>
          <View style={styles.profileContainer}>
            <Text style={styles.nameTextStyle}>{name}</Text>
            <Image source={rightIcon} />
          </View>
          <TouchableOpacity style={styles.editTextStyle}>
            <Text>{touchableText}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.7,
          borderColor: COLORS.darkGrey,
        }}
      />

      <FlatList
        data={dummyData.follower}
        renderItem={onRender}
        horizontal
        ItemSeparatorComponent={itemSeprator}
        scrollEnabled={false}
        // numColumns={3}
        // contentContainerStyle={{height: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: vw(10),
    borderColor: COLORS.darkGrey,
    borderWidth: vw(1),
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vh(6),
  },
  imageStyle: {
    // marginTop: vh(19),
  },
  editTextStyle: {
    height: vh(32),
    borderWidth: 1,
    borderRadius: vh(8),
    width: vw(220),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.blue,
    marginTop: vh(10),
  },
  nameTextStyle: {
    color: COLORS.black,
    fontSize: vw(16),
  },
  itemContainer: {
    width: normalize(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: vh(10),
    marginLeft: vh(4),
  },
});

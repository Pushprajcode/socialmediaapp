import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomCard from '@socialmedia/components/customCard';
import {vw} from '@socialmedia/utils/dimensions';
// import {mediaJSON} from '@socialmedia/utils/dummyData';
import {mediaJson} from '@socialmedia/utils/dummyData';
import HeaderComponent from '@socialmedia/components/headerComponent';
export default function Video() {
  const listRender = ({item}: any) => {
    console.log('-------', item);

    return (
      <CustomCard
        image={item?.thumb}
        title={item.title}
        viewNumber={'94k views '}
        time={'3 days ago'}
      />
    );
  };
  return (
    <View style={styles.containerStyle}>
      {/* <CustomCard item={mediaJSON} /> */}
      {/* <HeaderComponent title={'djkdffkjfk'} /> */}
      <FlatList data={mediaJson} renderItem={listRender} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#e7f2f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(18),
  },
});

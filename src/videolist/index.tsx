import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomCard from '@socialmedia/components/customCard';
import {vw} from '@socialmedia/utils/dimensions';
import {mediaJSON} from '@socialmedia/utils/dummyData';
export default function Video() {
  const data = mediaJSON.categories[0].videos;
  const listRender = ({item}: any) => {
    console.log('-------', item.sources);

    return <CustomCard />;
  };
  return (
    <View style={styles.containerStyle}>
      {/* <CustomCard item={mediaJSON} /> */}

      <FlatList data={data} renderItem={listRender} />
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

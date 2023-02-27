import {useEffect, useState} from 'react';
import COLORS from '@socialmedia/utils/colors';
import {vh, vw} from '@socialmedia/utils/dimensions';
import local_string from '@socialmedia/utils/strings';
import {mediaJson} from '@socialmedia/utils/dummyData';
import LocalImages from '@socialmedia/utils/localImages';
import CustomCard from '@socialmedia/components/customCard';
import {CustomShimmer} from '@socialmedia/components/shimmerComponent';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';

export default function Videos() {
  const [paginationData, setPaginationData] = useState(mediaJson.slice(0, 2));
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  /**
   * @description Video card render data
   * @param param0
   * @returns
   */

  const listRender = ({item}: any) => {
    return (
      <>
        {load ? (
          <CustomShimmer />
        ) : (
          <CustomCard
            image={item?.thumb}
            title={item?.title}
            viewNumber={local_string.noView}
            time={local_string?.days}
            womenIcon={LocalImages.womenIcon}
            subName={local_string.split}
            description={item?.description}
            sources={item?.sources}
          />
        )}
      </>
    );
  };

  const handlePagination = () => {
    if (mediaJson.length != paginationData.length) {
      [
        ...paginationData,
        ...mediaJson.slice(
          paginationData.length - 1,
          paginationData.length + 1,
        ),
      ];
      setTimeout(() => {
        setPaginationData(dataPre => {
          return [
            ...dataPre,
            ...mediaJson.slice(
              paginationData.length,
              paginationData.length + 1,
            ),
          ];
        });
      }, 1000);
    }
  };
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={paginationData}
        renderItem={listRender}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handlePagination}
        pagingEnabled={false}
        ListFooterComponent={() => {
          return mediaJson.length != paginationData.length ? (
            <ActivityIndicator />
          ) : null;
        }}
      />
    </View>
  );
}

/**
 * @styles
 */
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.videoBackgroudColor,
    padding: vh(20),
  },
});

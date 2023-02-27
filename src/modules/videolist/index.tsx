import {useEffect, useState} from 'react';
import {vh, vw} from '@socialmedia/utils/dimensions';
import local_string from '@socialmedia/utils/strings';
import {mediaJson} from '@socialmedia/utils/dummyData';
import {FlatList, StyleSheet, View} from 'react-native';
import LocalImages from '@socialmedia/utils/localImages';
import CustomCard from '@socialmedia/components/customCard';
import Shimmering from '@socialmedia/components/customShimmerComponent';
import COLORS from '@socialmedia/utils/colors';
export default function Videos() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  const listRender = ({item}: any) => {
    return (
      <>
        {load ? (
          <Shimmering />
        ) : (
          <CustomCard
            image={item?.thumb}
            title={item.title}
            viewNumber={'94k views '}
            time={'3 days ago'}
            womenIcon={LocalImages.womenIcon}
            subName={local_string.split}
            description={item?.description}
            sources={item?.sources}
          />
        )}
      </>
    );
  };
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={mediaJson}
        renderItem={listRender}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.videoBackgroudColor,
    padding: vh(20),
  },
});

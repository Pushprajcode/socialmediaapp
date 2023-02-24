import {FlatList, StyleSheet, Text, View} from 'react-native';
import CustomCard from '@socialmedia/components/customCard';
import {vh, vw} from '@socialmedia/utils/dimensions';
import {mediaJson} from '@socialmedia/utils/dummyData';
import {LocalImages} from '@socialmedia/utils/localImages';
import {local_string} from '@socialmedia/utils/strings';
export default function Videos() {
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
      <FlatList data={mediaJson} renderItem={listRender} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#e7f2f1',
    padding: vh(20),
  },
});

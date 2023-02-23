import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LocalImages} from '@socialmedia/utils/localImages';
import {vh, vw} from '@socialmedia/utils/dimensions';
import {useNavigation} from '@react-navigation/native';

interface propsheaderComponent {
  contentContainerstyle?: any;
  title?: any;
}
export default function HeaderComponent(props: propsheaderComponent) {
  const {title, contentContainerstyle} = props;
  const navigation = useNavigation<any>();
  return (
    <>
      {/* <StatusBar
        backgroundColor={'white'}
        translucent={true}
        // barStyle={{m}}
      /> */}
      <View style={[styles.containerStyle, contentContainerstyle]}>
        <TouchableOpacity onPress={() => navigation.goBack}>
          <Image
            style={styles.leftIconStyle}
            source={LocalImages.leftIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text>{''}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  leftIconStyle: {
    height: vh(20),
    width: vh(20),
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: vw(18),
    fontWeight: '800',
  },
});

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize, vh, vw} from '@socialmedia/utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import LocalImages from '@socialmedia/utils/localImages';
import COLORS from '@socialmedia/utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface propsheaderComponent {
  contentContainerstyle?: any;
  title?: any;
}
export default function HeaderComponent(props: propsheaderComponent) {
  const {title, contentContainerstyle} = props;
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.containerStyle,
        contentContainerstyle,
        {paddingTop: insets.top + normalize(20)},
      ]}>
      <TouchableOpacity onPress={handleBack} style={styles.iconContainer}>
        <Image
          style={styles.leftIconStyle}
          source={LocalImages.leftIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  leftIconStyle: {
    height: '100%',
    width: '100%',
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: normalize(18),
  },
  titleStyle: {
    fontSize: normalize(22),
    color: COLORS.black,
    alignSelf: 'center',
    marginLeft: normalize(90),
    fontFamily: 'Poppins-Bold',
  },
  iconContainer: {
    height: vh(24),
    width: vh(24),
  },
});

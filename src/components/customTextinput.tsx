import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {forwardRef} from 'react';
import {useState} from 'react';
import {normalize, vh, vw} from '../utils/dimensions';
import {COLORS} from '../utils/colors';

interface props {
  value?: string | undefined;
  inputStyle?: any;
  onchange?: any;
  placeholder: any;
  placeholdertextColor?: any;
  onBlur?: () => void;
  onFocus?: () => void;
  keyboardType?: KeyboardTypeOptions;
  onSubmitEditing?: any;
  multiline?: boolean;
  autoFocus?: boolean;
  maximumLength?: number;
  customInputStyle?: any;
  ContentContainerStyle?: any;
  onChangeText?: Function;
  autoCapitalize?: any;
  //   maxLength?: any;
  returnKeyType?: ReturnKeyTypeOptions;
  isSecure?: boolean;
  secureTextEntry?: boolean;
  dropDownIcon?: any;
}

const CustomTextInput = forwardRef((props: props, ref: any) => {
  const [toggle, setToggle] = useState(false);
  const {
    value,
    inputStyle,
    onchange,
    placeholder,
    placeholdertextColor,
    keyboardType,
    maximumLength,
    multiline,
    secureTextEntry,
    autoFocus,
    dropDownIcon,
    onSubmitEditing,
  } = props;
  console.log('dropdeown', dropDownIcon);
  return (
    <View style={styles.containerView}>
      <TextInput
        ref={ref}
        style={[styles.input, inputStyle]}
        onChangeText={onchange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholdertextColor}
        keyboardType={keyboardType}
        maxLength={maximumLength}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity>
        <Image
          style={styles.dropIconStyle}
          source={dropDownIcon}
          resizeMode={'contain'}
          resizeMethod={'resize'}
        />
      </TouchableOpacity>
    </View>
  );
});
export default CustomTextInput;
const styles = StyleSheet.create({
  containerView: {
    margin: normalize(8),
    paddingVertical: normalize(16),
    borderWidth: vw(1),
    borderRadius: normalize(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: normalize(10),
    borderColor: COLORS.black,
    color: COLORS.black,
    paddingLeft: normalize(6),
    paddingVertical: 0,
    width: '84%',
    // justifyContent: 'center',
  },
  dropIconStyle: {
    height: vh(10),
    width: vw(10),
    justifyContent: 'flex-end',
    // borderWidth: 2,
    // right: 10,
    // borderWidth: 1,
  },
});

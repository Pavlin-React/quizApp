import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constans/theme';

const FormButton = ({
  labelText = '',
  onHandlePress = null,
  style,
  isPrimary = true,
  ...more
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onHandlePress}
      style={{
        paddingVertical: 10,
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        borderColor: COLORS.primary,
        borderWidth: 1,
        ...style,
      }}
      {...more}  
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: isPrimary ? COLORS.white : COLORS.primary,
        }}>
        {labelText}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

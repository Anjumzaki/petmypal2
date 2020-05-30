/* eslint-disable react-native/no-inline-styles */
import {View, ActivityIndicator} from 'react-native';
import React from 'react';
export const Loader = ({visible, color}) => {
  if (visible) {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color={color ? color : '#04B7EB'} />
      </View>
    );
  } else {
    return <View />;
  }
};

import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default (props) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.Button, props.style]}
        onPress={props.onPress}
        activeOpacity={0.9}>
        <Text style={[styles.signin, props.style]}>{props.ButtonText}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  Button: {
    borderWidth: 1,
    borderColor: 'silver',
    width: 150,
    padding: 10,
    borderRadius: 24,
    marginVertical: 5,
  },
  signin: {
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 24,
  },
});

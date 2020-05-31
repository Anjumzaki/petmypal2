/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import StatusBar from '../Components/StatusBar';
import Comment from '../Components/Comment';
import CommentInput from '../Components/CommentInput';

import Icon from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar />
        <Comment source={require('../assets/images/commentProfile.png')} />
        <Comment source={require('../assets/images/commentProfile.png')} />
      </ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            borderWidth: 1,
            borderColor: '#04B7EB',
            borderRadius: 50,
            alignItems: 'center',
            alignContent: 'center',
            paddingTop: 0,
            marginHorizontal: 20,
            paddingHorizontal: 20,
            marginBottom: 10,
          }}>
          <TextInput
            style={{flex: 1, height: 30, height: 40}}
            placeholder="Click me!"
          />
          <Icon
            style={{marginLeft: 10, fontSize: 14}}
            name="camera"
            size={30}
          />
          <Icon
            style={{marginLeft: 10, fontSize: 14}}
            name="emoji-happy"
            size={30}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

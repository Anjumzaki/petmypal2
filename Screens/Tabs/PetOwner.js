import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import StatusBar from '../../Components/StatusBar';
import WhatsMind from '../../Components/WhatsMind';
import AddPet from '../../Components/AddPet';
import Colors from '../../Constants/Colors';
import SuggestFriends from '../../Components/SuggestFriends';
import WelcomePetMyPal from '../../Components/WelcomePetMyPal';
import PostFeed from '../../Components/PostFeed';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class PetOwner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      access_token:
        'c110c5c6427fef0c711a0ddf9f3ab79248f2b7130bcada811a1a8de385a2813a86445bba113024105637f327937ff2beb7d0a499a0b99d3c',
    };
  }
  async componentDidMount() {
    var session = await AsyncStorage.getItem('session');
    var formdata = new FormData();
    formdata.append('server_key', 'f28ce8096b13cfc4e385a1ef396dd94e');
    formdata.append('type', 'get_news_feed');
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://dev.petmypal.biz/api/posts?access_token=' + session,
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        this.setState(
          {posts: result, loading: false, access_token: session},
          console.log(result),
        ),
      )
      .catch((error) => console.log('error', error));
  }
  render() {
      console.log(this.state)
    return (
      <ScrollView style={styles.container}>
        <StatusBar />
        <WhatsMind
          source={require('../../assets/images/profilePicture.png')}
          onPress={() => navigation.navigate('WhatsOnMind')}
        />
        <AddPet
        // onPress= {() => navigation.navigate('CreateAccountCategory')}
        />
        <SuggestFriends />

        <WelcomePetMyPal />
        {this.state.loading ? (
          <ActivityIndicator color="black" />
        ) : (
          <PostFeed
            source={require('../../assets/images/profilePicture.png')}
            PostSource={require('../../assets/images/Post.png')}
            navigation={this.props.navigation}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  SuggestFriends: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: width,
    backgroundColor: Colors.white,
    marginTop: 5,
  },
  Suggest: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

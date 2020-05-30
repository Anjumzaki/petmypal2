import React from 'react';
import {Dimensions, View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Comment from './Comment';
import Icon from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class PostFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    };
  }
  render() {
    props = this.props;
    return (
      <View style={styles.Container}>
        <View style={styles.TopBar}>
          <View>
            <Image
              style={{height: 35, width: 35, marginLeft: 5, marginRight: 5}}
              source={props.source}
              resizeMode={'contain'}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text> Katherine John </Text>
            <Text> 5 min ago </Text>
          </View>
        </View>

        <View style={styles.Post}>
          <Text style={styles.Caption}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry ... <Text style={{fontWeight: 'bold'}}>See more</Text>
          </Text>
          <Image source={props.PostSource} style={styles.image} />

          <View style={styles.reactions}>
            {this.state.like ? (
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    like: false,
                  })
                }
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon color="#04B7EB" name="heart" />
                <Text style={{color: '#04B7EB', marginHorizontal: 2}}>
                  Like
                </Text>
                <Text style={{color: '#04B7EB', marginHorizontal: 2}}>234</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    like: true,
                  })
                }
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="heart-outlined" />
                <Text style={{color: '#424242', marginHorizontal: 2}}>
                  Like
                </Text>
                <Text style={{color: '#424242', marginHorizontal: 2}}>234</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Comment')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="chat" />
              <Text style={{color: '#424242', marginHorizontal: 2}}>
                comment
              </Text>
              <Text style={{color: '#424242', marginHorizontal: 2}}>234</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="share" />
              <Text style={{color: '#424242', marginHorizontal: 2}}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Comment source={require('../assets/images/commentProfile.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: width,
    backgroundColor: Colors.white,
    marginTop: 5,
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
  },
  TopBar: {
    width: width,
    flexDirection: 'row',
  },
  Post: {
    flexDirection: 'column',
    marginLeft: 50,
  },
  Caption: {
    paddingRight: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingTop: 10,
    borderTopColor: '#424242',
    borderTopWidth: 1,
  },
  reactionImgae: {
    height: 60,
    width: 60,
  },
});

import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StatusBar from '../Components/StatusBar';
import Button from '../Components/Button';
import Colors from '../Constants/Colors';
import CircleInput from '../Components/CircleInput';
import Footer from '../Components/Footer';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Category from '../Components/Category';
import Images from '../Constants/Images';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />
      <ImageBackground
        source={require('../assets/images/Pet.png')}
        style={styles.image}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.paltext}
          resizeMode={'contain'}
        />

        <View style={styles.textview}>
          <Text style={styles.welcome}>Tell us more about [PET NAME]</Text>
        </View>

        <View style={{flex: 1, marginTop: '25%'}}>
          <Input
            source={require('../assets/images/subtype.png')}
            placeholder="Sub type"
          />

          <View style={styles.category}>
            <Category source={Images.puppy} categoryName="Puppy" />

            <Category source={Images.smalldog} categoryName="Small Dog" />

            <Category source={Images.mediumdog} categoryName="Medium Dog" />
          </View>

          <View style={styles.category}>
            <Category source={Images.largedog} categoryName="Large Dog" />

            <Category source={Images.giantdog} categoryName="Giant Dog" />
          </View>

          <View style={{marginTop: 30}}>
            <Input
              source={Images.subtype}
              placeholder="Date of birth/Adaption Date*"
            />
            <Input source={Images.others} placeholder="Gender" />

            <FlatButton
              ButtonText="Next"
              onPress={() => navigation.navigate('Address')}
            />
          </View>
        </View>

        <Footer source={require('../assets/images/Footer4.png')} />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  paltext: {
    width: 80,
    height: 40,
    alignSelf: 'flex-end',
    marginTop: getStatusBarHeight(),
  },
  textview: {
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  logintext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    // marginTop:10
  },
  button: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

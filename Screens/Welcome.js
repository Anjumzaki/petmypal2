import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView
} from 'react-native';
import Button from '../Components/Button';
import StatusBar from '../Components/StatusBar';
import Colors from '../Constants/Colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { TouchableOpacity } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default ({navigation}) => {
  return (
    <View>
      <StatusBar />
      <ImageBackground
        source={require('../assets/images/Cat.png')}
        style={styles.image}>
        <View style={{justifyContent: 'space-between',flex:1}}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.paltext}
            resizeMode={'contain'}
          />

          <View style={styles.textview}>
            <Text style={styles.firsttext}>Share Your Pet life with Pals</Text>
            <Text style={styles.Secondtext}>
              Sharing Pet Stories was not easy.Just create an account and use it
              like other social media sites
            </Text>

            <View style={styles.button}>
              <Button
                style={{backgroundColor: Colors.primary, color: Colors.white}}
                ButtonText="Sign in"
                onPress={() => navigation.navigate('Signin')}
              />
              <Button
                style={{backgroundColor: Colors.white, color: Colors.black}}
                ButtonText="Sign up"
                onPress={() => navigation.navigate('VendorSignup')}
              />
            </View>

            <TouchableOpacity
              style={{marginTop:20}}
              onPress={() => navigation.navigate('VendorSignin')}
            >
              <Text style={styles.vendor}>Vendor Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight,
    paddingHorizontal:10
  },

  paltext: {
    width: 80,
    height:40,
    alignSelf: 'flex-end',
    marginTop:getStatusBarHeight()
  },
  textview:{
      paddingBottom:100,
  },
  firsttext: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Secondtext: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    top: 10,
  },
  vendor:{
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});

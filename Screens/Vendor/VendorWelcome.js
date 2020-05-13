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
import StatusBar from '../../Components/StatusBar';
import Colors from '../../Constants/Colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Images from '../../Constants/Images'
import FlatButton from '../../Components/FlatButton';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default ({navigation}) => {
  return (
    <View>
      <StatusBar />
      <ImageBackground
        source={Images.vendorBackground}
        style={styles.image}>
        <View style={{justifyContent: 'space-between',flex:1}}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.paltext}
            resizeMode={'contain'}
          />

          <View style={styles.textview}>
            <Text style={styles.firsttext}>Welcome to PetMyPal</Text>
            <Text style={styles.Secondtext}>Vendor Quick Intro</Text>

            <FlatButton 
                ButtonText="Next"
                onPress={() => navigation.navigate('VendorSetup')}
            />
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
    height:80,
    alignSelf: 'flex-end',
    marginTop:getStatusBarHeight()+5
  },
  textview:{
      paddingBottom:100,
  },
  firsttext: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Secondtext: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom:50,
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

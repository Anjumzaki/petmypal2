import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import Colors from '../Constants/Colors'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Welcome')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

  return (
      <View 
          style={styles.Header}>
            <Image
              source={require('../assets/images/splash.png')} style={styles.image}
              resizeMode={'cover'}
            />
            <View style={{ justifyContent: 'center',alignItems: 'center', marginTop: 20}}>
              <Image 
                style={styles.Logo}
                source = {require('../assets/images/icon.png')} 
              />
            </View>
              
      </View>
  );
};

const styles = StyleSheet.create({
  Header:{
      backgroundColor: Colors.primary,
      height: height,
      width: width
  },
  image:{
        width: width,
        height: '75%',
        paddingHorizontal:10
  },
  Logo:{
      height: 100,
      width:180,
  }
});
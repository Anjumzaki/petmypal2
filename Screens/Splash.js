import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import Colors from '../Constants/Colors'

const screenwWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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
            style={styles.Logo}
            source = {require('../assets/images/icon.png')} 
        />
      </View>
  );
};

const styles = StyleSheet.create({
  Header:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary,
      height: screenHeight,
      width: screenwWidth
  },
  Logo:{
      height: 100,
      width:180
  }
});
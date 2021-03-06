import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../../Components/StatusBar';
import Input from '../../Components/Input';
import FlatButton from '../../Components/FlatButton';
import Colors from '../../Constants/Colors'
import Footer from '../../Components/Footer';
import CheckBox from '@react-native-community/checkbox'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../../Constants/Images';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <View
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={Images.vendorBackground} style={styles.image} >
                <Image
                    source={Images.icon} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>What is your number ?</Text>
                    <Text style={styles.logintext}>We'll text a code to verify mobile</Text>
                </View>
           
               <View style={{flex: 1, marginTop:'30%'}}>
                    <Input
                        source= {Images.number}
                        placeholder="Number" 
                    />

                    <FlatButton
                        ButtonText="Confirm"
                        onPress={() => navigation.navigate('VendorverifyNumber')}
                    />
               </View>
                
                <Footer 
                    source={Images.footer1}
                />

                </ImageBackground>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
    },
    image:
    {
        width: width,
        height: height,
        paddingHorizontal: 10
    },
    paltext: {
        width: 80,
        height:80,
        alignSelf: 'flex-end',
        marginTop:getStatusBarHeight()+5
    },
    textview: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    welcome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    logintext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        marginTop: 5
    },
    policy:{
        textAlign:'center',
        color:'white',
        fontSize: 18
    },
    CheckBoxContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      label:{
          color: Colors.white,
          top:5
      }
})

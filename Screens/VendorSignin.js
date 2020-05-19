import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors'
import {getStatusBarHeight} from 'react-native-status-bar-height';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <View>
                <StatusBar/>
                <ImageBackground source={require('../assets/images/Sign.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Welcome Vendor</Text>
                    <Text style={styles.logintext}>Login with your gmail</Text>
                </View>
           
                <View style={{flex:1 , marginTop:'30%'}}>
                    <Input
                        source= {require('../assets/images/email.png')}
                        placeholder="Email" 
                    />

                    <Input
                        source= {require('../assets/images/password.png')}
                        placeholder="Password"
                    />

                    <FlatButton
                        style={{marginTop: '5%'}}
                        ButtonText="Signin"
                        onPress={() => navigation.navigate('Home')}
                    />

                    <TouchableOpacity
                        style={styles.forgot}
                        onPress={() => navigation.navigate('ForgetPassword')}
                    >
                        <Text style={{fontSize: 18,color: 'white',textAlign: 'center'}}>Forgot Your Password?</Text>
                    </TouchableOpacity>
                </View>
                
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
        paddingHorizontal:10
    },
    paltext: {
        width: 80,
        height:40,
        alignSelf: 'flex-end',
        marginTop:getStatusBarHeight()
    },
    textview: {
        flexDirection: 'column',
        position: 'absolute',
        top: '17%',
        alignSelf: 'center',
    },
        welcome: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    logintext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
    },
    forgot:{
        alignSelf: 'center',
        marginTop:'5%'
    }
})

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
                    <Text style={styles.welcome}>Forgot Password</Text>
                    <Text style={styles.logintext}>Verification code has been sent to your{'\n'} mobile number</Text>
                </View>
           
                <View style={{flex:1 , marginTop:'30%'}}>
                    <Input
                        source= {require('../assets/images/email.png')}
                        placeholder="Email" 
                    />
                    <View
                        style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity>
                            <Image
                                style={{height:60, width: 100}} 
                                source={require('../assets/images/text.png')}
                                resizeMode={'contain'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{height:60, width: 100}} 
                                source={require('../assets/images/call.png')}
                                resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>
            
                    <FlatButton
                        style={{marginTop: '5%'}}
                        ButtonText="Next"
                        onPress={() => navigation.navigate('ForgetPasswordCode')}
                    />

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
        height:80,
        alignSelf: 'flex-end',
        marginTop:getStatusBarHeight()+10
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
    resetButtons:{
        flexDirection:'row', 
        justifyContent:'space-between'
    }
})

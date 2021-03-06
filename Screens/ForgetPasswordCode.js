import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Button from '../Components/Button';
import Colors from '../Constants/Colors'
import CircleInput from '../Components/CircleInput';
import Footer from '../Components/Footer';
import Input from '../Components/Input'
import {getStatusBarHeight} from 'react-native-status-bar-height';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <View
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={require('../assets/images/Sign.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Forgot Password</Text>
                    <Text style={styles.logintext}>Verification code has been sent to your {'\n'} mobile number</Text>
                </View>

                <View style={{flex:1 , marginTop:'30%'}}>
                    <Input
                        placeholder="Number" 
                    />

                    <View style={styles.code}>
                        <CircleInput
                            maxLength={1}
                            keyboardType='numeric'
                            style={styles.CircleInput}
                        />

                        <CircleInput
                            maxLength={1}
                            keyboardType='numeric'
                            style={styles.CircleInput}
                        />

                        <CircleInput
                            maxLength={1}
                            keyboardType='numeric'
                            style={styles.CircleInput}
                        />
                        
                        <CircleInput
                            maxLength={1}
                            keyboardType='numeric'
                            style={styles.CircleInput}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                            style={{backgroundColor: Colors.primary, color: Colors.white, marginLeft:5 ,marginRight:5}} 
                            ButtonText="Verify"
                              onPress={() => navigation.navigate('UserVerified')}  
                            />
                            <Button
                            style={{backgroundColor: Colors.white, color: Colors.black, marginLeft:5 ,marginRight:5}}
                            ButtonText="Resend"
                              onPress={() => navigation.navigate('UserNumber')}
                            />
                        </View>
                    </View>    
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
        paddingHorizontal: 10
    },
    paltext: {
        width: 80,
        height:40,
        alignSelf: 'flex-end',
        marginTop:getStatusBarHeight()
    },
    textview: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    welcome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign:'center'
    },
    logintext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        marginTop: 5
    },
    code:{
        flexDirection: 'row', 
        justifyContent:'center',
        alignSelf: 'center',
        marginTop:10,
        marginBottom: 10
    },
    CircleInput:{
        borderColor: Colors.white,
        backgroundColor: Colors.white,
    },
    buttonContainer:{
        flexDirection: 'column',
        alignSelf: 'center',
        // marginTop:10
    },
    button: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }
})

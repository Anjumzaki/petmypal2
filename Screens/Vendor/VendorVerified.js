import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../../Components/StatusBar';
import FlatButton from '../../Components/FlatButton';
import Colors from '../../Constants/Colors'
import CircleInput from '../../Components/CircleInput';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input'
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
                    <Text style={styles.welcome}>Verified</Text>
                    <Text style={styles.logintext}>Verification code verified</Text>
                </View>

                <View style={{flex:1 , marginTop:'25%'}}>
                    <Input
                        source= {Images.number}
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

                    <FlatButton
                        ButtonText="Next"
                        onPress={() => navigation.navigate('VendorAccountSetup')}
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
        position: 'absolute',
        top: '15%',
        alignSelf: 'center',
    },
    welcome: {
        flex: 1,
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
        borderColor: Colors.success,
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

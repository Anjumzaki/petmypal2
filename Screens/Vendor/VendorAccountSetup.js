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
                    <Text style={styles.welcome}>Vendor Account Setup</Text>
                </View>

                <View style={{flex:1 , marginTop:'25%'}}>
                    <Input
                        source= {Images.person}
                        placeholder="First Name" 
                    />

                    <Input
                        source= {Images.person}
                        placeholder="Last Name" 
                    />

                    <Input
                        source= {Images.email}
                        placeholder="Email" 
                    />

                    <Input
                        source= {Images.password}
                        placeholder="Password" 
                    />

                    <Input
                        source= {Images.password}
                        placeholder="Confirm" 
                    />


                    <FlatButton
                        ButtonText="Next"
                        onPress={() => navigation.navigate('VendorAddress')}
                    />
                </View>
                
                    
                <Footer 
                    source={Images.footer2}
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

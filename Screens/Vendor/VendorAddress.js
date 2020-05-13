import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
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
            <ScrollView
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
           
               <View style={{flex: 1, marginTop:'10%'}}>
               <Input
                    source= {Images.addressIcon}
                    placeholder="Address1" 
                />

                <Input
                    source= {Images.addressIcon}
                    placeholder="Address2" 
                />

                <Input
                    source= {Images.countryIcon}
                    placeholder="Country" 
                />

                <Input
                    source= {Images.stateIcon}
                    placeholder="State" 
                />

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: '45%'}}>
                        <Input
                            source= {Images.cityIcon}
                            placeholder="City" 
                        />
                    </View>
                    <View style={{width: '45%'}}>
                        <Input
                            source= {Images.zipIcon}
                            placeholder="Zip Code" 
                        />
                    </View>
                </View>

                <Input
                    source= {Images.number}
                    placeholder="Business Phone No." 
                />

                <Input
                    source= {Images.websiteIcon}
                    placeholder="Website" 
                />

                <FlatButton
                    ButtonText="Next"
                    onPress={() => navigation.navigate('VendorProfile')}
                />

               </View>
                
                <Footer 
                    source={Images.footer3}
                />

                </ImageBackground>
            </ScrollView>
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
    },
})
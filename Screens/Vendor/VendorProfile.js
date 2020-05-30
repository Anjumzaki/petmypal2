import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../../Components/StatusBar';
import Input from '../../Components/Input';
import FlatButton from '../../Components/FlatButton';
import Colors from '../../Constants/Colors'
import Footer from '../../Components/Footer';
import CheckBox from '@react-native-community/checkbox'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../../Constants/Images'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
    const [isSelected, setSelection] = useState(false);

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
           
               <View style={{flex: 1, marginTop:'10%', justifyContent:'flex-start', alignItems:'center'}}>
                
                <TouchableOpacity>
                    <Image
                        source={Images.profileIcon}
                        style={{height:80, width: 80}}
                        // resizeMode={'contain'}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={Images.coverIcon}
                        style={{height:200, width: 300, marginTop:20}}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>

                <Text style={styles.policy}>
                    By clicking Sign Up, you agree to <Text style={{color: Colors.primary}}>our Terms,{'\n'}
                    Data Policy</Text>  and <Text style={{color: Colors.primary}}> Cookie Policy </Text>.You may{'\n'}
                    receive SMS notifications from us{'\n'}
                    and can opt out at any time.
                </Text>

                <View style={styles.CheckBoxContainer}>
                    <CheckBox
                    value={isSelected}
                    style={styles.checkbox}
                    onPress= { isSelected => setSelection(true)}
                    />
                    <Text style={styles.label}>Accept the terms and condtions</Text>
                </View>

                <FlatButton
                    ButtonText="Finish"
                    onPress={() => navigation.navigate('VendorSetupComplete')}
                />

               </View>
                
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
    policy:{
        textAlign:'center',
        color:'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:10
    },
    CheckBoxContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    checkbox:{
        borderColor: Colors.white
    },
    label:{
      color: Colors.white,
      top:5
    }
})

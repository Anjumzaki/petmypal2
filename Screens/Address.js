import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors'
import Footer from '../Components/Footer';
import CheckBox from '@react-native-community/checkbox'
import {getStatusBarHeight} from 'react-native-status-bar-height';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
    const [isSelected, setSelection] = useState(false);

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={require('../assets/images/Create.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Address</Text>
                    <Text style={styles.logintext}>Check your phone no we sent you{'\n'}code for verification.</Text>
                </View>
           
               <View style={{flex: 1, marginTop:'20%'}}>
               <Input
                    source= {require('../assets/images/address.png')}
                    placeholder="Address1" 
                />

                <Input
                    source= {require('../assets/images/address.png')}
                    placeholder="Address2" 
                />

                <Input
                    source= {require('../assets/images/country.png')}
                    placeholder="Country" 
                />

                <Input
                    source= {require('../assets/images/state.png')}
                    placeholder="State" 
                />

                <Input
                    source= {require('../assets/images/city.png')}
                    placeholder="City" 
                />

                <Input
                    source= {require('../assets/images/zipcode.png')}
                    placeholder="Zip Code" 
                />

                <Input
                    source= {require('../assets/images/dob.png')}
                    placeholder="Date of birth" 
                />

                <Input
                    source= {require('../assets/images/others.png')}
                    placeholder="Others" 
                />

                <FlatButton
                    ButtonText="Next"
                    onPress={() => navigation.navigate('PetRegister')}
                />

               </View>
                
                <Footer 
                    source={require('../assets/images/Footer3.png')}
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
        top: '10%',
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

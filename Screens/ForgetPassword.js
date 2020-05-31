import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { CheckBox } from 'react-native-elements'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
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
           
                <View style={{flex:1 , marginTop:'35%'}}>
                    <Input
                        source= {require('../assets/images/email.png')}
                        placeholder="Email" 
                    />
                    
                    <View style={{flexDirection: 'row', justifyContent:'center'}}>
              <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        center
                        title='Business'
                        containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                        textStyle={{color: Colors.white}}
                        checked={isSelected}
                        uncheckedColor= {Colors.white}
                        onPress= { isSelected => setSelection(true)}
                    />
                        {/* <Text style={styles.label}>Business</Text> */}
                    </View>
                    
                    <View style={styles.CheckBoxContainer}>
                        <CheckBox
                            center
                            title="Individual"
                            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                            textStyle={{color: Colors.white}}
                            checked={!isSelected}
                            uncheckedColor= {Colors.white}
                            onPress= { isSelected => setSelection(true)}
                        />
                        {/* <Text style={styles.label}>Individual</Text> */}
                    </View>
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
        textAlign: "center"
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
    },
    CheckBoxContainer:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom: 10    
    },
})

import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
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
            <View
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={require('../assets/images/Create.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Create account</Text>
                    <Text style={styles.logintext}>Create your free account today</Text>
                </View>
           
               <View style={{flex: 1, marginTop:'25%'}}>
               <Input
                    source={require('../assets/images/person.png')}
                    placeholder="Name" 
                />

                <Input
                    source= {require('../assets/images/email.png')}
                    placeholder="Email" 
                />

                <Input
                    source= {require('../assets/images/email.png')}
                    placeholder="Mobile Number" 
                />

                <Input
                    source= {require('../assets/images/password.png')}
                    placeholder="Password" 
                />

                <Input
                    source= {require('../assets/images/password.png')}
                    placeholder="Re-type" 
                />

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
                    ButtonText="Next"
                    onPress={() => navigation.navigate('UserNumber')}
                />

               </View>
                
                <Footer 
                    source={require('../assets/images/CreateFooter.png')}
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

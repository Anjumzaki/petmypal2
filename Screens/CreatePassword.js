import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors'
import Footer from '../Components/Footer';
import CheckBox from '@react-native-community/checkbox'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../Constants/Images'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
    const [isSelected, setSelection] = useState(false);

    return (
            <ScrollView
                contentContainerStyle={styles.container}>
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
           
               <View style={{flex: 1, marginTop:'30%'}}>
               <Input
                    source= {Images.password}
                    placeholder="Password" 
                />

                <Input
                    source= {Images.password}
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
    container: {
        flex: 1,
        justifyContent: 'space-between',
      },
      image: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'blue',
        justifyContent: 'space-between',
      },
      paltext: {
        width: 80,
        height: 40,
        alignSelf: 'flex-end',
        marginTop: getStatusBarHeight(),
      },
      textview: {
        alignSelf: 'center',
      },
      welcome: {
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
      category: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
    policy:{
        textAlign:'center',
        color:'white',
        fontSize: 18,
        marginTop: 10
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

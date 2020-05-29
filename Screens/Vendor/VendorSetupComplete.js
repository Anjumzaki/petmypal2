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
                
                <View style={styles.CheckBoxContainer}>
                    <CheckBox
                    value={isSelected}
                    style={styles.checkbox}
                    onPress= { isSelected => setSelection(true)}
                    />
                    <Text style={styles.label}>Use my residential address as my {'\n'}business address</Text>
                </View>

                <Input
                    source= {Images.addressIcon}
                    placeholder="333 Garden town Lahore Pakistan" 
                />

                <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 20}}>
                    <View style={{width:'45%'}}>
                        <FlatButton
                            ButtonText="Yes"
                            // onPress={() => navigation.navigate('PetRegister')}
                        />
                    </View>
                    <View style={{width:'45%'}}>
                        <FlatButton
                            ButtonText="No"
                            // onPress={() => navigation.navigate('PetRegister')}
                        />
                    </View>
                </View>

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
        marginTop:10,
        marginBottom:20
    },
    checkbox:{
        borderColor: Colors.white
    },
    label:{
      color: Colors.white,
      top:5
    }
})

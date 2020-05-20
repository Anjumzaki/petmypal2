import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../../Components/StatusBar';
import Input from '../../Components/Input';
import FlatButton from '../../Components/FlatButton';
import Colors from '../../Constants/Colors'
import Footer from '../../Components/Footer';
// import CheckBox from '@react-native-community/checkbox'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../../Constants/Images'
import { CheckBox } from 'react-native-elements'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
    const [isSelected, setSelection] = useState(false);

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={Images.vendorBackground} 
                    style={styles.image} >
                <Image
                    source={require('../../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Vendor Account Setup</Text>
                    <Text style={styles.logintext}>Are you business or individual ?</Text>
                </View>
           
               <View style={{flex: 1, marginTop:'20%'}}>
              
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

                <View style={{marginTop:'10%'}}>
                    <Input
                        source={Images.businessicon}
                        placeholder="Business Name" 
                    />

                    <Text style={styles.logintext}>Select  your Business Domain</Text>

                    <View style={[styles.CheckBoxContainer, {marginLeft:'20%',}]}>
                        <CheckBox
                            center
                            title="Pet-sitting"
                            checked={isSelected}
                            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                            textStyle={{color: Colors.white}}
                            checked={isSelected}
                            uncheckedColor= {Colors.white}
                            onPress= { isSelected => setSelection(true)}
                        />
                        {/* <Text style={styles.label}>Pet-sitting</Text> */}
                    </View>
                    
                    <View style={[styles.CheckBoxContainer, {marginLeft:'20%',}]}>
                        <CheckBox
                            center
                            title="Vet Services"
                            checked={isSelected}
                            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                            textStyle={{color: Colors.white}}
                            checked={isSelected}
                            uncheckedColor= {Colors.white}
                            onPress= { isSelected => setSelection(true)}
                        />
                        {/* <Text style={styles.label}>Vet Services</Text> */}
                    </View>

                    <FlatButton
                        ButtonText="Next"
                        onPress={() => navigation.navigate('VendorverifyNumber')}
                    />
                </View>

               </View>
                
                <Footer 
                    source={require('../../assets/images/CreateFooter.png')}
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
    CheckBoxContainer:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom: 10    
    },
    checkbox:{
        // borderColor: Colors.white,
        // backgroundColor: Colors.white,
        // tintColor: Colors.white
    },
    label:{
      color: Colors.white,
      fontSize:16,
      fontWeight: 'bold'
    }
})

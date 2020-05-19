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
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={require('../assets/images/Pet.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>A little more about yourself</Text>
                </View>
           
               <View style={{flex: 1, marginTop:'20%'}}>
               <Input
                    source= {Images.email}
                    placeholder="Email" 
                />
                
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginRight: 30}}>
                    <View style={{width:'70%', marginRight: 30}}>
                        <Input
                            source= {Images.others}
                            placeholder="Gender" 
                        />
                    </View>
                    
                    <View style={{height:40, width:40, padding:5, borderRadius: 100/2, backgroundColor: Colors.input, alignItems: 'center'}}>
                        <Image
                            source ={Images.question}
                            style= {{height: 35, width: 35}}
                            resizeMode={'contain'}
                        />
                    </View>
                </View>

                <Input
                    source= {Images.dob}
                    placeholder="Date of birth *" 
                />

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
                    // onPress={() => navigation.navigate('')}
                />

               </View>
                
                <Footer 
                    source={require('../assets/images/Footer4.png')}
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
        height:40,
        alignSelf: 'flex-end',
        marginTop:getStatusBarHeight()
    },
    textview: {
        flexDirection: 'column',
        position: 'absolute',
        top: '15%',
        alignSelf: 'center',
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign:'center'
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

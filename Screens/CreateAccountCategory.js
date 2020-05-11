import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors'
import Footer from '../Components/Footer';
import CheckBox from '@react-native-community/checkbox'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Category from '../Components/Category';
import Images from '../Constants/Images'

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
                    <Text style={styles.welcome}>Create account</Text>
                    <Text style={styles.logintext}>Create your free account today</Text>
                </View>
           
                <View style={{flex: 1, marginTop:'25%'}}>
                    <Text style={styles.logintext}>Select  your pet catagory</Text>

                    <View style={styles.category}>
                        <Category 
                            source={Images.pet1}
                        />

                        <Category 
                            source={Images.pet2}
                        />

                        <Category 
                            source={Images.pet3}
                        />

                        <Category 
                            source={Images.pet4}
                        />
                    </View>

                    <View style={styles.category}>
                        <Category 
                            source={Images.pet5}
                        />

                        <Category 
                            source={Images.pet6}
                        />

                        <Category 
                            source={Images.pet7}
                        />

                        <Category 
                            source={Images.pet8}
                        />
                    </View>

                    <View style={styles.category}>
                        <Category 
                            source={Images.pet9}
                        />

                        <Category 
                            source={Images.pet10}
                        />

                        <Category 
                            source={Images.pet11}
                        />

                        <Category 
                            source={Images.pet12}
                        />
                    </View>

                    <View style={styles.category}>
                        <Category 
                            source={Images.pet13}
                        />

                        <Category 
                            source={Images.pet14}
                        />
                    </View>
                                        

                    <FlatButton
                        ButtonText="Next"
                        onPress={() => navigation.navigate('CreateAccount')}
                    />
                </View>
                <Footer 
                    source={require('../assets/images/CreateFooter.png')}
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
    category:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})

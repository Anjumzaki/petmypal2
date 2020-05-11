import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView , Modal, TouchableHighlight} from 'react-native';
import Colors from '../../Constants/Colors'
import StatusBar from '../../Components/StatusBar';
import FlatButton from '../../Components/FlatButton'
import WhatsMind from '../../Components/WhatsMind'
import PostFeed from '../../Components/PostFeed'
import GridView from '../../Components/GridView';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>

                <Image
                    source={require('../../assets/images/petSitterBack.png')}
                    resizeMode={'cover'}
                    style={{height:250, width: width,}}
                />

                <View style={{flexDirection: 'row', position: "absolute", left:'60%', justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/images/rating.png')}
                        resizeMode={'contain'}
                        style={{height:30, width: 40, marginLeft: 10, }}
                        />
                    </TouchableOpacity>  

                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/images/followers.png')}
                        resizeMode={'contain'}
                        style={{height:30, width: 40, marginLeft: 10, }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => { setModalVisible(true)}}>
                        <Image
                        source={require('../../assets/images/whiteMenu.png')}
                        resizeMode={'contain'}
                        style={{height:30, width: 20, marginLeft: 10, }}
                        />
                    </TouchableOpacity>                    
                </View>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                        </View>
                    </Modal>

                </View>

                <View style={styles.description}>

                    <Image
                        source={require('../../assets/images/catProfile.png')}
                        style={{height:50, width:50}}
                    />

                    <View style={{flexDirection: 'column', marginLeft:5}}>
                        <Text style={styles.name}>Cat Walker</Text>
                        <Text style={styles.desc}>Cat Walking | Cat Grooming</Text>
                        <Text style={styles.time}>Timing: 10AM - 5PM (Mon-Sat)</Text>

                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity>
                                <Image
                                source={require('../../assets/images/locationSitter.png')}
                                resizeMode={'contain'}
                                style={{height:50, width: 40, }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                source={require('../../assets/images/shareSitter.png')}
                                resizeMode={'contain'}
                                style={{height:50, width: 40, }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                source={require('../../assets/images/inviteSitter.png')}
                                resizeMode={'contain'}
                                style={{height:50, width: 40,  }}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{width: 150}}>
                        <FlatButton
                            ButtonText="Contact us"
                        />
                    </View>
                    
                </View>


                <WhatsMind 
                    source={require('../../assets/images/profilePicture.png')}
                    onPress={() => navigation.navigate('WhatsOnMind')}
                />

                <View style={styles.upload}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Gallery</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UploadGallery')}
                    >
                        <Image
                            source={require('../../assets/images/upload.png')}
                            resizeMode={'contain'}
                            style={{height: 25, width: 60}}
                        />
                    </TouchableOpacity>
                </View>

                <GridView />

            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        backgroundColor: Colors.white
    },
    description:{
        position: 'absolute', 
        top: 120, 
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    name:{
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    desc:{
        color: Colors.white,
        fontSize: 12
    },
    time:{
        color: Colors.white,
        fontSize: 12
    },
    upload:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        paddingHorizontal: 10
    },
    centeredView: {
        position: 'absolute',
        top:50,
        left:'50%',
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 2
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
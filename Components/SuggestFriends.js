import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors';
import FlatButton from './FlatButton';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default (props) => {

    return (
        <View style={styles.SuggestFriends}>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.Suggest}> Suggested Friends </Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                    style={styles.container}
                    >
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            // source={props.source}
                            style={styles.image}
                            source={require('../assets/images/s1.png')}
                        />
                        <Text style={{textAlign:'center'}}>Elizabeth</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.container}
                    >
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            // source={props.source}
                            style={styles.image}
                            source={require('../assets/images/s2.png')}
                        />
                        <Text style={{textAlign:'center'}}>Janny S</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.container}
                    >
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            // source={props.source}
                            style={styles.image}
                            source={require('../assets/images/s3.png')}
                        />
                        <Text style={{textAlign:'center'}}>Ava</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.container}
                    >
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            // source={props.source}
                            style={styles.image}
                            source={require('../assets/images/s4.png')}
                        />
                        <Text style={{textAlign:'center'}}>Isabella</Text>
                    </View>
                    </TouchableOpacity>

                </View>

                <FlatButton
                    ButtonText="Invite Friends"
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SuggestFriends:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',         
        height:160,
        width: width,
        backgroundColor: Colors.white,
        marginTop: 5
    },
    container:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:2,
        marginRight:2
    },
    image:{
        height:50,
        width:50, 
        marginLeft:5
    },
    Suggest:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22
    }
})
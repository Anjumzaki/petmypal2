import React, { useState } from 'react';
import { TextInput, StyleSheet,TouchableOpacity, View, Text, Image } from 'react-native'
import {Picker} from '@react-native-community/picker'
import Colors from '../Constants/Colors'

export default (props) => {

    const [selectedValue, setSelectedValue] = useState("On a page")
    
    return( 
        <View style={{marginTop:10}}>
            
            <Picker
                selectedValue={selectedValue}
                style={styles.Picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="On a page" value="On a page" />
            <Picker.Item label="On pixy" value="On pixy" />
            <Picker.Item label="On profile" value="On profile" />
            <Picker.Item label="On my groups" value="On my groups" />
            <Picker.Item label="On my page" value="On my page" />
          </Picker>

            <View 
                style={[styles.input, props.style]}
                onPress={props.onPress}
            >
                <View style={{position: 'relative'}}>
                    <Text style={styles.text}>
                        {props.searchText}
                    </Text>
                </View>
                
                <TextInput
                    style={styles.inputBox}
                />
            </View>

            <View style={styles.attachement}>
                <TouchableOpacity>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/camera.png')}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/emoji.png')}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/images.png')}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>
        
            </View>
        </View>
)}

const styles = StyleSheet.create({ 
    input: {
        height: 150,
        width: 350,
        margin:5,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.grey,
        backgroundColor:'#fff'
    },
    text:{
        position:'absolute',
        top:-10,
        left:90,
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputBox:{
        position:'absolute',
        top:15,
        height: 120,
        width: 320,
        marginStart: 15,
        fontSize:16,
    },
    attachement:{
        flexDirection: 'row',
        justifyContent: 'center'      
    },
    image:{
        height: 25, 
        width: 25,
        marginLeft: 5,
        marginRight: 5
    },
    Picker:{
        width:150,
        fontSize: 16,
        marginLeft:'30%',
        marginBottom: 20
      }, 
})
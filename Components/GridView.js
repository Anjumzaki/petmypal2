import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.Grid}>
                <View style={styles.childGrid}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/p1.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </TouchableOpacity> 
                </View>
                <View style={styles.childGrid}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/p2.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </TouchableOpacity> 
                </View>
                <View style={styles.childGrid}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/p3.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </TouchableOpacity> 
                </View>
            </View>

            <View style={styles.Grid}>
                <View style={styles.childGrid}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/p4.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </TouchableOpacity> 
                </View>
                <View style={styles.childGrid}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/p5.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </TouchableOpacity> 
                </View>
                <View style={styles.childGrid}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/p6.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </TouchableOpacity> 
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        width:width,
    },
    Grid:{
        flexDirection:'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 5
    },
    childGrid:{
        width: '33%',
        height: 120,
    },
    image:{
        width: '100%',
        height: 120
    }
})
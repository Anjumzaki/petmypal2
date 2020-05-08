import React from 'react';
import {Dimensions, View, Text, Image, StyleSheet} from 'react-native'
import Colors from '../Constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default (props) => {
    return(
        <View style={styles.Container}>
            <View style={styles.TopBar}>
                <View>
                    <Image
                        style={{height:35, width:35, marginLeft:5, marginRight:5}}
                        source={props.source} 
                        resizeMode={'contain'}
                    />
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text> Katherine John </Text>
                    <Text> 5 Nov 2019, 10:43 PM </Text>
                </View> 
            </View>

            <View style={styles.Post}>
                <Text style={styles.Caption}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                </Text>
                <View style={styles.reactions}>
                    <TouchableOpacity>
                        <Image
                            style={styles.reactionImgae}
                            source={require('../assets/images/like.png')}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={styles.reactionImgae}
                            source={require('../assets/images/share.png')}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        width: width,
        backgroundColor: Colors.white,
        marginTop: 5,
        flexDirection: 'column',
        paddingTop:5,
    },
    TopBar:{
        width:width,
        flexDirection: 'row'
    },
    Post:{
        flexDirection:'column',
        marginLeft: 50
    },
    Caption:{
        paddingRight:10
    },
    reactions:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    reactionImgae:{
        height:60, 
        width:60
    }
})
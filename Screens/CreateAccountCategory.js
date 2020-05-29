import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors';
import Footer from '../Components/Footer';
import CheckBox from '@react-native-community/checkbox';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Category from '../Components/Category';
import Images from '../Constants/Images';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />
      <ImageBackground
        source={require('../assets/images/Create.png')}
        style={styles.image}>
        <View>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.paltext}
            resizeMode={'contain'}
          />
        </View>

        <View style={styles.textview}>
          <Text style={styles.welcome}>Create account</Text>
          <Text style={styles.logintext}>Create your free account today</Text>
        </View>

        <View>
          <Text style={styles.logintext}>Select your pet catagory</Text>

          <View style={styles.category}>
            <Category source={Images.pet1} categoryName="Rodent" />

            <Category source={Images.pet2} categoryName="Dogs" />

            <Category source={Images.pet3} categoryName="Cats" />

            <Category source={Images.pet4} categoryName="Birds" />
          </View>

          <View style={styles.category}>
            <Category source={Images.pet5} categoryName="Fish" />

            <Category source={Images.pet6} categoryName="Cow" />

            <Category source={Images.pet7} categoryName="Horse" />

            <Category source={Images.pet8} categoryName="Parrot" />
          </View>

          <View style={styles.category}>
            <Category source={Images.pet9} categoryName="Rabbit" />

            <Category source={Images.pet10} categoryName="Snake" />

            <Category source={Images.pet11} categoryName="Tutle" />

            <Category source={Images.pet12} categoryName="Pig" />
          </View>

          <View style={styles.category}>
            <Category source={Images.pet13} categoryName="Others" />

            <Category source={Images.pet14} categoryName="No Pet" />
          </View>
        </View>
        <FlatButton
          ButtonText="Next"
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </ImageBackground>
    </ScrollView>
  );
};

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
});

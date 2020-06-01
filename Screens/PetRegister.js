/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
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
import Button from '../Components/Button';
import Colors from '../Constants/Colors';
import CircleInput from '../Components/CircleInput';
import Footer from '../Components/Footer';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Category from '../Components/Category';
import Images from '../Constants/Images';
import AsyncStorage from '@react-native-community/async-storage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class PetRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      sub_type: '',
      DOB: '',
      gender: '',
      sub_typeError: false,
      DOBError: false,
      genderError: false,
      access_token: '',
    };
  }

  // componentDidMount = () => {
  //   // password: password,
  //   //access_token: access_token,
  //   const {password, access_token} = this.props.route.params;
  //   this.setState({password: password, access_token: access_token});
  //   alert(this.state.password);
  //   alert(this.state.access_token);
  // };

  // loading //
  _controlLoadingView = () =>
    this.setState({isLoadingVisible: !this.state.isLoadingVisible});
  // loading //

  // validations //
  validation() {
    const {sub_type, gender, DOB, password} = this.state;
    if (sub_type.trim() === '' && DOB.trim() === '' && gender.trim() === '') {
      this.setState({
        sub_typeError: true,
        DOBError: true,
        genderError: true,
      });
      return false;
    }
    if (sub_type.trim() === '') {
      this.setState({sub_typeError: true});
      return false;
    }
    if (DOB.trim() === '') {
      this.setState({DOBError: true});
      return false;
    }
    if (gender.trim() === '') {
      this.setState({genderError: true});
      return false;
    }
    return true;
  }
  // validations //

  _next = async () => {
    if (this.validation()) {
      const {sub_type, gender, DOB} = this.state;
      AsyncStorage.setItem('pet_sub_type', sub_type);
      AsyncStorage.setItem('pet_gender', gender);
      AsyncStorage.setItem('pet_DOB', DOB);
      this.props.navigation.navigate('Address');
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar />
        <ImageBackground
          source={require('../assets/images/Pet.png')}
          style={styles.image}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.paltext}
            resizeMode={'contain'}
          />

          <View style={styles.textview}>
            <Text style={styles.welcome}>Tell us more about [PET NAME]</Text>
          </View>

          <View style={{flex: 1, marginTop: '25%'}}>
            <Input
              source={require('../assets/images/subtype.png')}
              placeholder="Sub type"
              value={this.state.sub_type}
              onChangeText={(sub_type) =>
                this.setState({
                  sub_type: sub_type,
                  sub_typeError: false,
                })
              }
            />

            {this.state.sub_typeError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                Sub type is required
              </Text>
            ) : null}

            <View style={styles.category}>
              <Category source={Images.puppy} categoryName="Puppy" />

              <Category source={Images.smalldog} categoryName="Small Dog" />

              <Category source={Images.mediumdog} categoryName="Medium Dog" />
            </View>

            <View style={styles.category}>
              <Category source={Images.largedog} categoryName="Large Dog" />

              <Category source={Images.giantdog} categoryName="Giant Dog" />
            </View>

            <View style={{marginTop: 30}}>
              <Input
                source={Images.subtype}
                placeholder="Date of birth/Adaption Date*"
                value={this.state.DOB}
                onChangeText={(DOB) =>
                  this.setState({
                    DOB: DOB,
                    DOBError: false,
                  })
                }
              />

              {this.state.DOBError ? (
                <Text
                  style={{
                    marginHorizontal: 50,
                    color: '#04B7EB',
                    fontSize: 12,
                    lineHeight: 16,
                  }}>
                  Date of birth is required
                </Text>
              ) : null}
              <Input
                source={Images.others}
                placeholder="Gender"
                value={this.state.gender}
                onChangeText={(gender) =>
                  this.setState({
                    gender: gender,
                    genderError: false,
                  })
                }
              />

              {this.state.genderError ? (
                <Text
                  style={{
                    marginHorizontal: 50,
                    color: '#04B7EB',
                    fontSize: 12,
                    lineHeight: 16,
                  }}>
                  gender is required
                </Text>
              ) : null}

              <FlatButton ButtonText="Next" onPress={() => this._next()} />
            </View>
          </View>

          <Footer source={require('../assets/images/Footer4.png')} />
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  image: {
    width: width,
    height: height,
    paddingHorizontal: 10,
  },
  paltext: {
    width: 80,
    height: 40,
    alignSelf: 'flex-end',
    marginTop: getStatusBarHeight(),
  },
  petProfile: {
    width: 80,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textview: {
    flexDirection: 'column',
    position: 'absolute',
    top: '14%',
    alignSelf: 'center',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    // marginTop:10
  },
  button: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

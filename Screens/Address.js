/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
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
import Images from '../Constants/Images';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import AsyncStorage from '@react-native-community/async-storage';

export default class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      User_DOB: '',
      User_email: '',
      User_gender: '',
      User_DOBError: false,
      User_emailError: false,
      User_emailInvalidError: false,
      User_genderError: false,
    };
  }

  // // loading //
  _controlLoadingView = () =>
    this.setState({isLoadingVisible: !this.state.isLoadingVisible});
  // loading //

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // validations //
  validation() {
    const {User_DOB, User_email, User_gender} = this.state;
    if (
      User_DOB.trim() === '' &&
      User_email.trim() === '' &&
      User_gender.trim() === ''
    ) {
      this.setState({
        User_DOBError: true,
        User_emailError: true,
        User_genderError: true,
      });
      return false;
    }

    if (this.validateEmail(User_email)) {
      this.setState({User_emailInvalidError: true});
      return false;
    }
    // check if password and confirm is same ///
    if (User_DOB.trim() === '') {
      this.setState({User_DOBError: true});
      return false;
    }

    if (User_email.trim() === '') {
      this.setState({User_emailError: true});
      return false;
    }
    if (User_gender.trim() === '') {
      this.setState({User_genderError: true});
      return false;
    }

    return true;
  }
  // validations //

  _completeSignup = async () => {
    if (this.validation()) {
      const {User_DOB, User_email, User_gender} = this.state;
      const pet_sub_type = await AsyncStorage.getItem('pet_sub_type');
      const pet_gender = await AsyncStorage.getItem('pet_gender');
      const pet_DOB = await AsyncStorage.getItem('pet_DOB');
      const password = await AsyncStorage.getItem('password');
      const access_token = await AsyncStorage.getItem('access_token');
      this._controlLoadingView();
      var myHeaders = new Headers();
      var formdata = new FormData();
      formdata.append('server_key', 'f28ce8096b13cfc4e385a1ef396dd94e');
      formdata.append('password', password);
      formdata.append('confirm_password', password);
      formdata.append('email', User_email);
      formdata.append('gender', User_gender);
      formdata.append('dob', User_DOB);
      formdata.append('sub_type', pet_sub_type);
      formdata.append('pet_size', '1');
      formdata.append('pet_dob', pet_DOB);
      formdata.append('pet_gender', pet_gender);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://dev.petmypal.biz/api/update-account?access_token=' +
          access_token,
        requestOptions,
      )
        .then((response) => response.json())
        .then((result) => {
          //alert(JSON.stringify(result));
          var result_failure = JSON.stringify(result.api_status).slice(1, -1);
          var result_succes = JSON.stringify(result.api_status);
          if (result_succes === '220' || result_succes === '200') {
            alert(JSON.stringify(result.message));
            this._controlLoadingView();
            this.props.navigation.navigate('Home');
          } else if (result_failure === '400') {
            var errors = JSON.stringify(result.errors.error_text).slice(1, -1);
            alert(errors);
          }
        })
        .catch((error) => console.log('error', error));
    }
  };

  _setSelection() {
    this.setState({isSelected: !this.state.isSelected});
  }
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
            <Text style={styles.welcome}>A little more about yourself</Text>
          </View>

          <View style={{flex: 1, marginTop: '20%'}}>
            <Input
              source={Images.email}
              placeholder="Email"
              value={this.state.User_email}
              onChangeText={(User_email) =>
                this.setState(
                  {
                    User_email: User_email,
                    User_emailError: false,
                  },
                  () => {
                    if (this.validateEmail(User_email)) {
                      this.setState({User_emailInvalidError: false});
                    }
                  },
                )
              }
            />
            {this.state.User_emailError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                Email is required
              </Text>
            ) : null}
            {this.state.User_emailInvalidError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                Email is invalid, please enter valid email
              </Text>
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 30,
              }}>
              <View style={{width: '70%', marginRight: 30}}>
                <Input
                  source={Images.others}
                  placeholder="Gender"
                  value={this.state.User_gender}
                  onChangeText={(User_gender) =>
                    this.setState({
                      User_gender: User_gender,
                      User_genderError: false,
                    })
                  }
                />
                {this.state.User_genderError ? (
                  <Text
                    style={{
                      marginHorizontal: 50,
                      color: '#04B7EB',
                      fontSize: 12,
                      lineHeight: 16,
                    }}>
                    Gender is required
                  </Text>
                ) : null}
              </View>

              <View
                style={{
                  height: 40,
                  width: 40,
                  padding: 5,
                  borderRadius: 100 / 2,
                  backgroundColor: Colors.input,
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.question}
                  style={{height: 35, width: 35}}
                  resizeMode={'contain'}
                />
              </View>
            </View>

            <Input
              source={Images.dob}
              placeholder="Date of birth *"
              value={this.state.User_DOB}
              onChangeText={(User_DOB) =>
                this.setState({
                  User_DOB: User_DOB,
                  User_DOBError: false,
                })
              }
            />
            {this.state.User_DOBError ? (
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

            <View style={styles.CheckBoxContainer}>
              <CheckBox
                value={this.state.isSelected}
                style={styles.checkbox}
                onPress={() => this._setSelection()}
              />
              <Text style={styles.label}>Accept the terms and condtions</Text>
            </View>

            <FlatButton
              ButtonText="Finish"
              onPress={() => this._completeSignup()}
            />
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
    textAlign: 'center',
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  checkbox: {
    borderColor: Colors.white,
  },
  label: {
    color: Colors.white,
    top: 5,
  },
});

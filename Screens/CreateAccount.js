/* eslint-disable no-alert */
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
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors';
import Footer from '../Components/Footer';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Category from '../Components/Category';
import Images from '../Constants/Images';
import {Loader} from '../Components/Loader';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class createAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      firstnameError: false,
      usernameError: false,
      lastnameError: false,
      isLoadingVisible: false,
      phoneNumberError: false,
    };
  }
  // loading //
  _controlLoadingView = () =>
    this.setState({_controlLoadingView: !this.state.isLoadingVisible});
  // loading //

  // validations //
  validation() {
    const {username, firstname, lastname, phoneNumber} = this.state;
    if (
      username.trim() === '' &&
      firstname.trim() === '' &&
      lastname.trim() === '' &&
      phoneNumber.trim() === ''
    ) {
      this.setState({
        usernameError: true,
        firstnameError: true,
        lastnameError: true,
        phoneNumberError: true,
      });
      return false;
    }
    if (username.trim() === '') {
      this.setState({usernameError: true});
      return false;
    }
    if (firstname.trim() === '') {
      this.setState({firstnameError: true});
      return false;
    }
    if (lastname.trim() === '') {
      this.setState({lastnameError: true});
      return false;
    }
    if (phoneNumber.trim() === '') {
      this.setState({phoneNumberError: true});
      return false;
    }

    if (phoneNumber.length < 11) {
      this.setState({phoneNumberError: true});
      return false;
    }
    return true;
  }
  // validations //

  _nextForward = async () => {
    if (this.validation()) {
      this._controlLoadingView();
      const {username, firstname, lastname, phoneNumber} = this.state;
      var myHeaders = new Headers();
      var formdata = new FormData();
      formdata.append('server_key', 'f28ce8096b13cfc4e385a1ef396dd94e');
      formdata.append('first_name', firstname);
      formdata.append('last_name', lastname);
      formdata.append('pet_name', username);
      formdata.append('phone_number', phoneNumber);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      await fetch('https://dev.petmypal.biz/api/create-account', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          //alert(JSON.stringify(result));
          var result_failure = JSON.stringify(result.api_status).slice(1, -1);
          var result_succes = JSON.stringify(result.api_status);
          if (result_succes === '220' || result_succes === '200') {
            alert(JSON.stringify(result.message));
            this._controlLoadingView();
            this.props.navigation.navigate('VerifyNumber', {
              phoneNumber: phoneNumber,
            });
          } else if (result_failure === '400') {
            var errors = JSON.stringify(result.errors.error_text).slice(1, -1);
            alert(errors);
          }
        })
        .catch((error) => console.log('error', error));
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar />
        <ImageBackground
          source={require('../assets/images/Create.png')}
          style={styles.image}>
          <Loader visible={this.state.isLoadingVisible} />
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.paltext}
            resizeMode={'contain'}
          />
          <View style={styles.textview}>
            <Text style={styles.welcome}>Create account</Text>
            <Text style={styles.logintext}>Create your free account today</Text>
          </View>
          <View style={{flex: 1, marginTop: '25%'}}>
            <Text style={styles.logintext}>Select your pet catagory</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Category source={Images.pet1} categoryName="Rodent" />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CreateAccountCategory')
                }>
                <Text style={styles.ChangePet}>Change Pet</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: '10%'}}>
              <Input
                source={Images.pet_icon}
                placeholder="pet name"
                value={this.state.username}
                onChangeText={(username) =>
                  this.setState({
                    username: username,
                    usernameError: false,
                  })
                }
              />

              {this.state.usernameError ? (
                <Text
                  style={{
                    marginHorizontal: 50,
                    color: '#04B7EB',
                    fontSize: 12,
                    lineHeight: 16,
                  }}>
                  pet name is required
                </Text>
              ) : null}

              <Input
                source={Images.user_icon}
                placeholder="Pet Onwer First name"
                value={this.state.firstname}
                onChangeText={(firstname) =>
                  this.setState({
                    firstname: firstname,
                    firstnameError: false,
                  })
                }
              />

              {this.state.firstnameError ? (
                <Text
                  style={{
                    marginHorizontal: 50,
                    color: '#04B7EB',
                    fontSize: 12,
                    lineHeight: 16,
                  }}>
                  Pet Onwer First name is required
                </Text>
              ) : null}

              <Input
                source={Images.user_icon}
                placeholder="Pet Onwer Last name"
                value={this.state.lastname}
                onChangeText={(lastname) =>
                  this.setState({
                    lastname: lastname,
                    lastnameError: false,
                  })
                }
              />

              {this.state.lastnameError ? (
                <Text
                  style={{
                    marginHorizontal: 50,
                    color: '#04B7EB',
                    fontSize: 12,
                    lineHeight: 16,
                  }}>
                  pet onwer Last name is required
                </Text>
              ) : null}

              <Input
                source={Images.businessicon}
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onChangeText={(phoneNumber) =>
                  this.setState({
                    phoneNumber: phoneNumber,
                    phoneNumberError: false,
                  })
                }
              />

              {this.state.phoneNumberError ? (
                <Text
                  style={{
                    marginHorizontal: 50,
                    color: '#04B7EB',
                    fontSize: 12,
                    lineHeight: 16,
                  }}>
                  Phone Number is required 11 digits
                </Text>
              ) : null}
              <FlatButton
                ButtonText="Next"
                onPress={() => this._nextForward()}
              />
            </View>
          </View>
          <Footer source={require('../assets/images/CreateFooter.png')} />
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
  ChangePet: {
    color: Colors.white,
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

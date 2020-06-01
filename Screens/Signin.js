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
} from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Loader} from '../Components/Loader';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import AsyncStorage from '@react-native-community/async-storage';
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: false,
      isLoadingVisible: false,
      passwordError: false,
    };
  }

  // loading //
  _controlLoadingView = () =>
    this.setState({isLoadingVisible: !this.state.isLoadingVisible});
  // loading //

  // validations //
  validation() {
    const {email, password} = this.state;
    if (email.trim() === '' && password.trim() === '') {
      this.setState({emailError: true, passwordError: true});
      return false;
    } else if (email.trim() === '') {
      this.setState({emailError: true});
      return false;
    } else if (password.trim() === '') {
      this.setState({passwordError: true});
      return false;
    } else {
      return true;
    }
  }
  // validations //

  // remote signin //
  _signin = () => {
    console.log("Asda's");

    if (this.validation()) {
      console.log("Asda's");
      this._controlLoadingView();
      const {email, password} = this.state;
      var myHeaders = new Headers();
      var formdata = new FormData();
      formdata.append('server_key', 'f28ce8096b13cfc4e385a1ef396dd94e');
      formdata.append('username', email);
      formdata.append('password', password);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
      fetch('https://dev.petmypal.biz/api/auth', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.api_status === 200) {
            AsyncStorage.setItem('session', result.access_token);
            this.props.navigation.navigate('Home');
          }
          this._controlLoadingView();
        })
        .catch((error) => {
          alert('error', error);
        });
    }
  };

  render() {
    console.log(this.state);
    return (
      <View>
        <StatusBar />
        <ImageBackground
          source={require('../assets/images/Sign.png')}
          style={styles.image}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.paltext}
            resizeMode={'contain'}
          />
          <Loader visible={this.state.isLoadingVisible} />

          <View style={styles.textview}>
            <Text style={styles.welcome}>Welcome back</Text>
            <Text style={styles.logintext}>Login with your Email</Text>
          </View>

          <View style={{flex: 1, marginTop: '30%'}}>
            <Input
              source={require('../assets/images/email.png')}
              placeholder="Email"
              value={this.state.email}
              onChangeText={(email) =>
                this.setState({email: email, emailError: false})
              }
            />
            {this.state.emailError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                email is required
              </Text>
            ) : null}

            <Input
              source={require('../assets/images/password.png')}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(password) =>
                this.setState({password: password, passwordError: false})
              }
              secureTextEntry={true}
            />

            {this.state.passwordError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                password is required
              </Text>
            ) : null}

            <FlatButton
              style={{marginTop: '5%'}}
              ButtonText="Signin"
              onPress={this._signin}
            />

            <TouchableOpacity
              style={styles.forgot}
              onPress={() => {
                this.props.navigation.navigate('ForgetPassword');
              }}>
              <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
                Forgot Your Password?
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
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
  forgot: {
    alignSelf: 'center',
    marginTop: '5%',
  },
});

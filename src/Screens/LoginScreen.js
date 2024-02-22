import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import LottieView from 'lottie-react-native';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = () => {
    props.navigation.replace('MainTab');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Animatable.View style={styles.animationView} animation="zoomInDown">
          <LottieView
            source={require('../assets/ZkPass.json')}
            loop
            autoPlay
            style={{height: 150, width: 150}}
          />
        </Animatable.View>

        <Animatable.View style={styles.logoView} animation="fadeInUpBig">
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </Animatable.View>

        <Animatable.View style={styles.loginView} animation="fadeInUpBig">
          <View style={styles.loginViewHeader}>
            <Text
              style={{
                fontSize: 25,
                color: '#6D6F71',
                fontFamily: 'Raleway-Bold',
              }}>
              LOGIN
            </Text>
          </View>

          <View style={styles.loginCard}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignSelf: 'flex-start',
                width: '90%',
                marginHorizontal: 30,
              }}>
              <Text style={{fontFamily: 'Montserrat-Bold', color: '#000'}}>
                Email
              </Text>
            </View>
            <View style={styles.EmailRow}>
              <View style={{width: '80%', marginLeft: 30}}>
                <TextInput
                  onChangeText={val => setEmail(val)}
                  value={email}
                  keyboardType="email-address"
                  placeholder="Email"
                  placeholderTextColor={'#000'}
                  style={styles.textinput}
                />
              </View>
              <TouchableOpacity
                onPress={() => updateSecureTextEntry()}
                style={{width: '20%', alignItems: 'center'}}>
                {/* {secureTextEntry ? (
                  <View>
                    <Entypo name="lock" color="#000" size={20} />
                  </View>
                ) : (
                  <View>
                    <Entypo name="lock-open" color="#000" size={20} />
                  </View>
                )} */}
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: 'flex-start',
                alignSelf: 'flex-start',
                width: '90%',
                marginHorizontal: 30,
              }}>
              <Text style={{fontFamily: 'Montserrat-Bold', color: '#000'}}>
                Password
              </Text>
            </View>

            <View style={styles.passwordRow}>
              <View style={{width: '70%', marginLeft: 30}}>
                <TextInput
                  onChangeText={value => setPassword(value)}
                  placeholder="Password"
                  secureTextEntry={secureTextEntry}
                  value={password}
                  placeholderTextColor={'#000'}
                  style={styles.textinput}
                />
              </View>
              <TouchableOpacity
                onPress={() => updateSecureTextEntry()}
                style={{width: '30%', alignItems: 'center'}}>
                {secureTextEntry ? (
                  <View>
                    <Entypo name="lock" color="#000" size={20} />
                  </View>
                ) : (
                  <View>
                    <Entypo name="lock-open" color="#000" size={20} />
                  </View>
                )}
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 50, alignSelf: 'center'}}>
              <TouchableOpacity
                style={styles.LoginBtn}
                onPress={() => handleLogin()}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Raleway-Bold',
                    color: '#fff',
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationView: {
    // flex: 1,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 30,
  },
  logoView: {
    width: '90%',
    height: 100,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 130,
  },
  logo: {
    width: 170,
    height: 170,
    borderRadius: 30,
    objectFit: 'contain',
  },
  formContainer: {
    marginHorizontal: 10,
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(212, 247, 250, 1)',
  },
  loginViewHeader: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginView: {
    flex: 3,
    backgroundColor: '#D4F7FA',
    width: '95%',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    height: 200,
  },
  loginCard: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    // backgroundColor: '#1777BE',
    width: '90%',
    paddingVertical: 20,
    borderRadius: 20,
  },
  EmailRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00A9FF',
  },
  passwordRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00A9FF',
  },
  textinput: {
    width: 'auto',
    color: '#000',
    fontSize: 16,
  },
  LoginBtn: {
    width: 200,
    height: 50,
    backgroundColor: '#0071BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default LoginScreen;

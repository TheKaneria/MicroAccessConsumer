import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile_screen = props => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, height: '100%', backgroundColor: '#D4F7FA'}}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.Fixed_Header}>
          <TouchableOpacity onPress={() => props.navigation.replace('MainTab')}>
            <FontAwesome6 name="arrow-left-long" size={25} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'Poppins-Bold',
              marginRight: 30,
            }}>
            Profile
          </Text>
        </View>

        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
            />

            <Text style={styles.name}>Zeel </Text>
            <Text style={styles.userInfo}>zkaneria@gmail.com </Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.btncontainer}>
              <View style={styles.btnrow}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
                  Edit
                </Text>
                <FontAwesome name="edit" size={20} style={{marginLeft: 10}} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.replace('LoginScreen')}
              style={styles.btncontainer}>
              <View style={styles.btnrow}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
                  Logout{' '}
                </Text>
                <MaterialIcons
                  name="logout"
                  size={20}
                  color="#000"
                  style={{marginLeft: 5}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile_screen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#D4F7FA',
    height: '100%',
  },
  Fixed_Header: {
    // flex: 1,
    flexDirection: 'row',
    height: 60,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    elevation: 2,
  },
  header: {
    backgroundColor: '#fff',
    // flex: 1,
    marginVertical: 20,
    width: '90%',
    borderRadius: 20,
    paddingVertical: 20,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  btnrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btncontainer: {
    width: '50%',
    backgroundColor: '#D4F7FA',
    height: 'auto',
    padding: 10,
    elevation: 1,
    borderRadius: 20,
    marginVertical: 10,
  },
});

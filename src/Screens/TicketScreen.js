import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import Geolocation from '@react-native-community/geolocation';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Electrical problem', value: '1'},
  {label: 'IT Consulting', value: '2'},
  {label: 'Cloud Service', value: '3'},
  {label: 'IT Security', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const TicketScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [statusmodel, setstatusmodal] = useState(false);
  const [value, setValue] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [position, setPosition] = useState({
    latitude: 22.28770374820152,
    longitude: 70.7547222395906,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      Geolocation.getCurrentPosition(pos => {
        const crd = pos.coords;

        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      });
    };

    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.Fixed_Header}>
          <Text style={styles.headerText}>Ticket</Text>
          <TouchableOpacity></TouchableOpacity>
        </View>

        <View style={styles.listview}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={styles.listviewIconView}>
              <FontAwesome name="user" size={20} color="#000" />
            </View>
            <View style={styles.listviewIconSec}>
              <Text style={{color: '#000', fontFamily: 'RobotoSlab-Regular'}}>
                Zeel kaneria
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 15}}>
            <View style={styles.listviewIconView}>
              <FontAwesome name="question-circle" size={20} color="#000" />
            </View>
            <View style={styles.listviewIconSec}>
              <Text style={{color: '#000', fontFamily: 'RobotoSlab-Regular'}}>
                suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores
                voluptatibus quia\nvoluptatem quis ullam qui in alias quia
                est\nconsequatur magni mollitia accusamus ea nisi voluptate
                dicta
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={() =>
                props.navigation.navigate('Map', {
                  position1: position,
                })
              }>
              <Text style={{color: 'black', fontFamily: 'RobotoSlab-Bold'}}>
                Track
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={() => setstatusmodal(true)}>
              <Text style={{color: 'black', fontFamily: 'RobotoSlab-Bold'}}>
                Click here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      <ScrollView nestedScrollEnabled={true}>
        <Modal
          isVisible={statusmodel}
          animationIn={'fadeInUpBig'}
          onBackButtonPress={() => {
            setstatusmodal(false);
          }}
          onBackdropPress={() => {
            setstatusmodal(false);
          }}
          style={styles.firstModal}>
          <View style={{flex: 1, paddingVertical: 20}}>
            <View style={styles.flatlistviewRow}>
              <View style={styles.firstModalview}>
                <FontAwesome name="user" size={20} color="#000" />
              </View>
              <View style={{width: '80%'}}>
                <Text style={styles.modaltext}>Zeel kaneria </Text>
              </View>
            </View>
            <View style={styles.flatlistviewRow}>
              <View style={styles.firstModalview}>
                <FontAwesome name="address-book" size={20} color="#000" />
              </View>
              <View style={{width: '80%'}}>
                <Text style={styles.modaltext}>
                  301, vasundhara complex, opposite Fulvadipark Gate, satya sai
                  road, rajkot-360001
                </Text>
              </View>
            </View>
            <View style={styles.flatlistviewRow}>
              <View style={styles.firstModalview}>
                <FontAwesome name="phone" size={20} color="#000" />
              </View>
              <View style={{width: '80%'}}>
                <Text style={styles.modaltext}>9727392420</Text>
              </View>
            </View>
            <View style={styles.flatlistviewRow}>
              <View style={styles.firstModalview}>
                <MaterialIcons name="message" size={20} color="#000" />
              </View>
              <View style={{width: '80%'}}>
                <Text style={styles.modaltext}>
                  301, vasundhara complex, opposite Fulvadipark Gate, satya sai
                  road, rajkot-360001
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        animationIn={'fadeInUpBig'}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={styles.plusModal}>
        <View style={{flex: 1, paddingVertical: 20}}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontSize: 28,
                color: 'black',
                marginBottom: 20,
                fontFamily: 'Raleway-Medium',
              }}>
              Select your Query
            </Text>
            <View>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Select item'}
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={'gray'}
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>
          </View>

          <View
            style={{
              width: '100%',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginBottom: 10,
                fontFamily: 'Raleway-Medium',
              }}>
              Message
            </Text>
            <TextInput placeholder="message" style={styles.textinpt} />
          </View>

          <View style={styles.submitBtn}>
            <TouchableOpacity
              style={styles.modalsubmitbtn}
              onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  fontFamily: 'RobotoSlab-Bold',
                  fontSize: 18,
                  color: '#fff',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4F7FA',
  },
  Fixed_Header: {
    flex: 1,
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
  headerText: {
    fontSize: 22,
    color: 'black',
    marginRight: 30,
    fontFamily: 'Poppins-Bold',
  },
  listview: {
    flex: 1,
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    marginTop: 20,
    borderRadius: 20,
    padding: 15,
    alignSelf: 'center',
    height: 'auto',
  },
  listviewIconSec: {
    width: '80%',
    justifyContent: 'flex-start',
  },
  listviewIconView: {
    width: '20%',
    alignItems: 'center',
  },
  flatlistviewRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
  },
  modalbtn: {
    width: 100,
    height: 30,
    backgroundColor: '#A0E9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0071BC',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modaltitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  modaltext: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'RobotoSlab-Regular',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  modalsubmitbtn: {
    width: 120,
    height: 40,
    backgroundColor: '#0071BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textinpt: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 17,
    borderWidth: 1,
    borderColor: 'black',
  },
  submitBtn: {
    marginTop: 150,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  firstModal: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginTop: '50%',
    flex: 1,
    maxHeight: 320,
  },
  firstModalview: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusModal: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginTop: '30%',
    flex: 1,
    maxHeight: 400,
  },
});

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

const Data = [
  {
    title: 'Pending',
    number: 20,
  },
  {
    title: 'Approved',
    number: 123,
  },
  {
    title: 'Reject',
    number: 5,
  },
];

const Data2 = [
  {
    id: 1,
    name: 'Leanne Graham',
    request: 'Approve',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    request: 'Reject',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    request: 'Reject',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    request: 'Approve',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    request: 'Approve',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    request: 'Approve',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    request: 'Approve',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    request: 'Reject',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    request: 'Approve',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    request: 'Approve',
  },
];

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.Fixed_Header}>
          <Text
            style={{fontSize: 22, color: 'black', fontFamily: 'Poppins-Bold'}}>
            DashBoard
          </Text>
          <TouchableOpacity onPress={() => props.navigation.replace('Profile')}>
            <Ionicons name="person" size={25} color="black" />
          </TouchableOpacity>
        </View>

        <Animatable.View style={styles.parentStyle}>
          <View style={styles.parentTitle}>
            <Text
              style={{color: '#000', fontFamily: 'Poppins-Bold', fontSize: 20}}>
              Request Penal
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Data}
            renderItem={({item, index}) => {
              return (
                <View style={{marginTop: '20%'}}>
                  <View style={styles.mainViewFlatList}>
                    <Text style={styles.flatlistTitle}>{item.title}</Text>
                    <Text style={styles.flatlistNum}>{item.number}</Text>
                  </View>
                </View>
              );
            }}
          />
        </Animatable.View>

        <Animatable.View style={styles.history}>
          <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                }}>
                History
              </Text>

              <FlatList
                data={Data2}
                estimatedItemSize={200}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.historyflatlist}>
                      <View style={{width: 'auto', marginRight: 10}}>
                        <Text style={styles.historyName}>{item.id}</Text>
                      </View>
                      <View style={{width: '70%', alignItems: 'flex-start'}}>
                        <Text style={styles.historyName}>{item.name}</Text>
                      </View>
                      <View style={{width: '25%'}}>
                        <Text
                          style={
                            item.request == 'Approve'
                              ? styles.historyNameGreen
                              : styles.historyNameRed
                          }>
                          {item.request}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

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
    elevation: 4,
    paddingHorizontal: 20,
  },
  mainViewFlatList: {
    backgroundColor: 'rgb(212, 247, 250)',
    width: 110,
    height: 'auto',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 10,
    elevation: 5,
  },
  parentStyle: {
    flex: 1,
    backgroundColor: 'white',
    width: '95%',
    height: 'auto',
    alignSelf: 'center',
    marginVertical: 20,
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 6,
  },
  parentTitle: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistTitle: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'Raleway-Medium',
  },
  flatlistNum: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'Raleway-Medium',
  },
  history: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    height: 400,
    marginVertical: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  historyName: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'RobotoSlab-Regular',
  },
  historyNameGreen: {
    color: 'green',
    fontSize: 16,
  },
  historyNameRed: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular',
  },
  animationstyle: {
    height: 50,
    width: 50,
  },
  historyflatlist: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    backgroundColor: '#D4F7FA',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
});

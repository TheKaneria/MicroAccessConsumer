import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import TicketScreen from './TicketScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="black"
      barStyle={{
        backgroundColor: '#D4F7FA',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarLabel: 'DashBoard',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="black" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarLabel: 'Ticket',
          tabBarIcon: () => <Ionicons name="ticket" color="black" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;

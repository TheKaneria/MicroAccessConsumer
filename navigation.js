import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import MainTabScreen from './src/Screens/MainTabScreen';
import Profile_screen from './src/Screens/Profile_screen';
import Map_Screen from './src/Screens/Map_Screen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainTab" component={MainTabScreen} />
        <Stack.Screen name="Profile" component={Profile_screen} />
        <Stack.Screen name="Map" component={Map_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

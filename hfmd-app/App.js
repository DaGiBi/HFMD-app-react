import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BottomTabNavigator from './navigation/BottomTabs';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <StatusBar style='dark'/>
    <Stack.Navigator>
    <Stack.Screen 
        name='WelcomeScreen'
        component = {WelcomeScreen}
        options = {{
          headerShown: false,
        }}
        // initialParams={{mode:"online"}}
      />
      <Stack.Screen 
        name='HomeScreen'
        component = { BottomTabNavigator}
        options = {{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name='ListScreen'
        component = { ListScreen }
        options = {{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

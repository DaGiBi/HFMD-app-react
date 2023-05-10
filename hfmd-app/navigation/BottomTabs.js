import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { TouchableOpacity, View, Platform, Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VisualizeScreen from '../screens/VisualizeScreen';
import UploadScreen from '../screens//UploadScreen';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import CustomeTabBarIcon from '../components/CustomTabBarIcon';
import plus from '../assets/plus.png';
  

import { useRoute } from '@react-navigation/native';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomNavigator({ navigation, route }) {
    

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarLabel focused={focused} name='Home' />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name='md-home' />
                ),

                headerShown: false,
                }}
            />
            <BottomTab.Screen
                name='List'
                component={ListScreen}
                options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarLabel focused={focused} name='List' />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name='list' />
                ),
                headerShown: false,
                }}
            />

            <BottomTab.Screen

                name='Upload'
                component={UploadScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TabBarLabel focused={focused} name='Upload' />
                ),
                    tabBarIcon: ({ focused }) => (
                        <CustomeTabBarIcon focused={focused} name='add-circle' />
                ),
                headerShown: false,
                }}
            />


            <BottomTab.Screen
                name='Visualize'
                component={VisualizeScreen}
                options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarLabel focused={focused} name='Analytics' />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name='analytics' />
                ),
                headerShown: false,
                }}
            />
            <BottomTab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarLabel focused={focused} name='Profile' />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name='person' />
                ),
                headerShown: false,
                }}
            />
            
        </BottomTab.Navigator>
    )
}
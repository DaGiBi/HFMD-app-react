import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';


import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';

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
        </BottomTab.Navigator>
    )
}
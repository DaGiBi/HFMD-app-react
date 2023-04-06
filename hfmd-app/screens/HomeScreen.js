import React, { useState } from 'react';
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Text,
    View,
    Modal,
  } from 'react-native';


import { Ionicons } from '@expo/vector-icons';



const Home = () => {
    
    

    return (
        <SafeAreaView>
            <View>
                <Text style={{ padding: 100, fontSize: 16 }}>
                    Welcome to HFMD Application
                </Text>
                <Ionicons name="medkit" size={100} ></Ionicons>
                    
            </View>
        </SafeAreaView>
    )
}


export default Home;
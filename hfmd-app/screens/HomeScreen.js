import React, { useState,useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

    const [mode, setMode] = useState('');    
    const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@mode');
        if (value !== null) {
            setMode(value);
        }
    } catch (error) {
        console.error(error);
    }
    };
    useEffect(() => {
        getData();
    }, []);
  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'silver'}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 20, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    Welcome To 
                </Text>
                <Text style={{ padding: 10, fontSize: 30 , fontWeight: 'bold'}}>
                    HandFootDoctor
                </Text>
                <Text style={{ paddingBottom: 100, fontSize: 20 }}>
                    Application
                </Text>
                <Ionicons 
                    name="medkit" size={200} style={styles.Ionicons}
                ></Ionicons>
                <Text>{mode}</Text>
                    
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Ionicons:{
        color: 'blue'
    }
})
export default Home;

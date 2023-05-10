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
    Button,
    TextInput,
    Pressable
  } from 'react-native';
  import axios from 'axios';
  import { BASE_URL } from '../constants/index';
  import { useNavigation } from '@react-navigation/native';
  import HomeScreen from './HomeScreen';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const onlineMode = async () => {
        try {
          await AsyncStorage.setItem("@mode", "online");
          console.log("in")
          navigation.navigate("HomeScreen");
          
        } catch (error) {
          console.log(error);
        }
    }


    const offlineMode = async () => {
        try {
          await AsyncStorage.setItem("@mode", "offline");
          console.log("in")
          navigation.navigate("HomeScreen");
          
        } catch (error) {
          console.log(error);
        }
    }
    // const online = async ()=> {
    //     try{
    //         await saveData("online");
    //         navigation.navigate("HomeScreen");
    //     } catch (err) {
    //         setLoginError('Invalid credentials');
    //     }
    // }


    return (
        <SafeAreaView>
            <View style={{ marginTop:50, flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ padding: 10, fontSize: 40 , fontWeight: 'bold'}}>
                    Welcome Screen 
                </Text>
            </View>

            <Button title="Online" onPress={onlineMode}  />
            <Button title="Offline" onPress={offlineMode} />

        </SafeAreaView>
    )
}


export default WelcomeScreen;
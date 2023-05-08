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
const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async () => {
        console.log(`Name: ${name}\nPassword: ${password}\nLocation: ${location}`);
        // You can perform any necessary actions with the form data here
        try {
          
          const response = await axios.post(`${BASE_URL}/api/createUser`, {userName: name, userPassword: password, location: "null"}, { headers: {
            'Content-Type': 'multipart/form-data',
          }}
          );
          console.log("inserted");
          if (response) {
            console.log(response.data);
          }
        } catch (err) {
          console.log(err.message);
        }
      };
    


    return (
        <SafeAreaView>
            <View style={{ marginTop:50, flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ padding: 10, fontSize: 40 , fontWeight: 'bold'}}>
                    Profile Screen
                </Text>
            </View>

            <Text>Name:</Text>
            <TextInput
                placeholder="Enter your name"
                onChangeText={setName}
                value={name}
            />

            <Text>Password:</Text>
            <TextInput
                placeholder="Enter your password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />

            <Text>Location:</Text>
            <TextInput
                placeholder="Enter your location"
                onChangeText={setLocation}
                value={location}
            />

            <Button title="Submit" onPress={handleSubmit} />

        </SafeAreaView>
    )
}


export default ProfileScreen;
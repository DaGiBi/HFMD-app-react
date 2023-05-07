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
import axios from 'axios';
const { width, height } = Dimensions.get('screen');

const VisualizeScreen = () => {

    const [imageUri, setImageUri] = useState(null);

    const fetchImage = async () => {
        const response = await fetch('http://192.168.0.104:5000/image?name=aqwqli');
        const blob = await response.blob();
        setImageUri(URL.createObjectURL(blob));
    };


    return (
        <SafeAreaView>
            <View style={{ marginTop:50, flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ padding: 10, fontSize: 40 , fontWeight: 'bold'}}>
                    Visualize Screen
                </Text>
            
            </View>
        </SafeAreaView>
    )
}


export default VisualizeScreen;
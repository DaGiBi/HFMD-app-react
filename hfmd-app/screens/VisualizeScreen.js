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
            <View>
                <Text style={{ padding: 10, fontSize: 16 }}>
                    VisualizeScreen
                </Text>

                <View>
                    <TouchableOpacity title="Get Image" onPress={fetchImage} 
                        style = {{
                            elevation: 8,
                            backgroundColor: '#71b79c',
                            borderRadius: 18,
                            paddingVertical: 5,
                            paddingHorizontal: 12,
                            marginBottom: 5,
                            marginTop: 5,
                            width: width * 0.7,
                          }}
                    />
                    {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
                
                </View>
            </View>
        </SafeAreaView>
    )
}


export default VisualizeScreen;
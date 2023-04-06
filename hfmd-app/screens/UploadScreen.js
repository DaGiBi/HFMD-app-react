
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
import Camera from '../components/Camera';

import { useState } from 'react';


const Upload = () => {
    const [selectedImage, setselectedImage] = useState('');
  
    const onUpload = async (image) => {
        setselectedImage(image.uri);
        const data = new FormData();
        data.append('file', image);
    
        try {
          const response = await axios.post(`${BASE_URL}/api/predict`, data);
          if (response) {
            setPrediction(response.data);
          }
        } catch (err) {
          console.log(err.message);
        }
      };
    

    return (
        <SafeAreaView>
            <View>
                <Text style={{ padding: 100, fontSize: 16 }}>
                    Upload
                </Text>
                <Camera handleUpload={onUpload} />
                                   
            </View>
        </SafeAreaView>
    )
}


export default Upload;
import React, { useState, useEffect} from 'react';
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
    FlatList 
  } from 'react-native';

import Card from '../components/Card';

import axios from 'axios';
const { width, height } = Dimensions.get('screen');
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = () => {
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
        fetchMultiImage();
    },[]);



    const [imageUri, setImageUri] = useState(null);
    const [images, setImages] = useState([]);

    const fetchImage = async () => {
        const response = await fetch('http://192.168.0.104:5000/image?name=aqwqli');
        const blob = await response.blob();
        console.log(blob)
        // setImageUri(URL.createObjectURL(blob));
       
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            setImageUri(reader.result);
        };
        console.log(imageUri);
    };

    const fetchMultiImage = async () => {
        const responses = await fetch('http://192.168.0.104:5000/images?name=aqwqli')
        const data = await responses.json();
        const images = data.images.map(image => ({
            data: 'data:image/jpeg;base64,' + image.data.toString('base64'),
            date: image.date
          }));
          setImages(images);
    };

    const renderOnline = () => {
        
        return (
            <View style={{ marginTop:50, flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ padding: 10, fontSize: 40 , fontWeight: 'bold'}}>
                    History Diagonise Online
                </Text>
                
                <View>
                    <TouchableOpacity title="Get Image" onPress={fetchImage} 
                        style = {{
                            elevation: 8,
                            backgroundColor: 'blue',
                            borderRadius: 18,
                            paddingVertical: 5,
                            paddingHorizontal: 12,
                            marginBottom: 5,
                            marginTop: 5,
                            width: width * 0.7,
                          }}
                    >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            Test Image
                        </Text>
            
                    </TouchableOpacity>
                </View>
                <View>
                    
                        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
                    
                </View>
                    
                
                
                <View>
                    <TouchableOpacity title="Get User Images" onPress={fetchMultiImage} 
                        style = {{
                            elevation: 8,
                            backgroundColor: 'blue',
                            borderRadius: 18,
                            paddingVertical: 5,
                            paddingHorizontal: 12,
                            marginBottom: 5,
                            marginTop: 5,
                            width: width * 0.7,
                          }}
                    >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            get User Images
                        </Text>
                    </TouchableOpacity>
                    <View>
                        {images.map(image => (
                            <View style={styles.card} key={image.date}>
                                <Text>{image.date}</Text>
                                <Image style={styles.image}
                                    source={{ uri: image.data }}
                                />
                            </View>
                        ))}
                    </View>
                    
                 </View>
            </View>
        )
    }

    const renderOffline = () => {
        return (
            <View>
                <Text>
                    Offline
                </Text>
            </View>
        )
    }
    
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1}}>
                {mode === 'online' ? renderOnline() : renderOffline()}
            </SafeAreaView>
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
card: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderWidth: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  image:{
    width: 150,
    height: 150,

  }
})
export default ListScreen;





// import React, { useEffect, useState } from 'react';
// import { View, Image, Text } from 'react-native';

// const ImageGallery = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchMultiImage = async () => {
//       const responses = await fetch('http://192.168.0.104:5000/images?name=aqwqli');
//       const data = await responses.json();
//       const images = data.images.map(image => ({
//         data: 'data:image/jpeg;base64,' + image.data.toString('base64'),
//         date: image.date
//       }));
//       setImages(images);
//     };

//     fetchMultiImage();
//   }, []);

//   return (
//     <View>
//       {images.map(image => (
//         <View key={image.date}>
//           <Text>{image.date}</Text>
//           <Image
//             style={{ width: 200, height: 200 }}
//             source={{ uri: image.data }}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default ImageGallery;

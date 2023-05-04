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
    FlatList 
  } from 'react-native';

import axios from 'axios';
const { width, height } = Dimensions.get('screen');

const ListScreen = () => {

    const [imageUri, setImageUri] = useState(null);

    const [images, setImages] = useState([]);

    const fetchImage = async () => {
        const response = await fetch('http://192.168.0.104:5000/image?name=aqwqli');
        const blob = await response.blob();
        console.log(blob)
        setImageUri(URL.createObjectURL(blob));
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


    return (
        <ScrollView>
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
                <View>
                    <TouchableOpacity title="Get User Images" onPress={fetchMultiImage} 
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
                    <View>
                        {images.map(image => (
                            <View key={image.date}>
                                <Text>{image.date}</Text>
                                <Image
                                    style={{ width: 200, height: 200 }}
                                    source={{ uri: image.data }}
                                />
                            </View>
                        ))}
                    </View>
                 </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}


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

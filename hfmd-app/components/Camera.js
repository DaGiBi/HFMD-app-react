import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const Camera = ({ handleUpload }) => {

  // const pickFromCamera = async () => {
  //   try {
  //     const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  //     if (granted) {
  //       let data = await ImagePicker.launchCameraAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         quality: 1, //1 means high quality
  //       });
  //       console.log(data);
  //       if (!data.canceled) {
  //         let newFile = {
  //           type: data.assets[0].type,
  //           name: data.assets[0].fileName,
  //           uri: data.assets[0].uri,
            
  //         };
  //         handleUpload(newFile);
  //       }
  //     } else {
  //       alert('You need to give permissions');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const pickFromGallery = async () => {
    try {
      const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (granted) {
        let data = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1, //1 means high quality
          base64: true,

        });
        if (!data.canceled) {

            // Convert the image to a base64-encoded string
          // const base64Image = Buffer.from(response.data, 'base64');

          console.log(data);
          console.log(data.assets[0].base64)
          let newFile = 
          
          data.assets[0].base64;
          // data.assets[0].uri.split(",")[1]; //test web
          // { 
          //   uri: data.assets[0].uri.split(",")[1],
          //   type: data.assets[0].type.split(",")[1],
          //   name: data.assets[0].fileName.split(",")[1],
          // };
          // console.log(newFile)

          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          console.log(location)







          handleUpload(
            {
              image: newFile,
              locations: location
            });
        }
      } else {
        alert('You need to give permissions');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.options}>
      <TouchableOpacity shadowless style={styles.tab} onPress={pickFromGallery}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <Ionicons name='images-sharp' size={18} color='#fff' />
          <Text size={16} style={styles.tabTitle}>
            {'From Gallery'}
          </Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity shadowless style={styles.tab} onPress={pickFromGallery}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <Ionicons name='images-sharp' size={18} color='#fff' />
          <Text size={16} style={styles.tabTitle}>
            {'From Gallery existing user'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity shadowless style={styles.tab} onPress={pickFromCamera}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <Ionicons name='md-camera' size={18} color='#fff' />
          <Text size={16} style={styles.tabTitle}>
            {'From Camera'}
          </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    // width: width - theme.SIZES.BASE * 2,
    // paddingVertical: theme.SIZES.BASE,
  },
  card: {
    // backgroundColor: theme.COLORS.WHITE,
    // marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
    // shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    // backgroundColor: theme.COLORS.WHITE,
    // marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    width: '90%',
    marginBottom: 16,
    // shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },

  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: 270,
    height: 200,
  },
  button: {
    // marginBottom: theme.SIZES.BASE,
    width: '70%',
  },
  options: {
    marginBottom: 24,
    marginTop: 100,
    elevation: 4,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 18,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 5,
    marginTop: 5,
    width: width * 0.7,
  },
  divider: {
    borderRightWidth: 0.3,
    // borderRightColor: theme.COLORS.ICON,
  },
  tabTitle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    paddingLeft: 10,
  },
  profileBackground: {
    width: '100%',
    height: '100%',
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
});



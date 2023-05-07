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

const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ marginTop:50, flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ padding: 10, fontSize: 40 , fontWeight: 'bold'}}>
                    Profile Screen
                </Text>
            </View>
        </SafeAreaView>
    )
}


export default ProfileScreen;
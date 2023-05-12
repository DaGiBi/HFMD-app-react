import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Hfmd_details = () => {

    return (
        <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
        
        {/* // symptoms */}
        <View 
            // onPress={()=>navigation.navigate("Detail")}
            style={{
                height:250,
                elevation:2,
                backgroundColor:"#FFF",
                marginLeft:20,
                marginTop:20,
                borderRadius:15,
                marginBottom:10,
                width:160
            }}
        >
            <Image
                source={require('../assets/image1.jfif')}
            />
            <View style={{
                flexDirection:"row",
                paddingTop:10,
                paddingHorizontal:10
            }}>
                <Text style={{
                    fontWeight:"bold"
                }}>Symptoms</Text>
                <Text style={{
                    fontWeight:"bold",
                    color:"#00a46c",
                    paddingLeft:35
                }}></Text>
            </View>
            <Text style={{
                paddingHorizontal:10,
                fontWeight:"bold",
                color:"#b1e5d3",
                paddingTop:3
            }}>
                Learn More
            </Text>
        </View> 

        {/* // prevention */}
        <View 
            // onPress={()=>navigation.navigate("Detail")}
            style={{
                height:250,
                elevation:2,
                backgroundColor:"#FFF",
                marginLeft:20,
                marginTop:20,
                borderRadius:15,
                marginBottom:10,
                width:160
            }}
        >
            <Image
                source={require('../assets/image1.jfif')}
            />
            <View style={{
                flexDirection:"row",
                paddingTop:10,
                paddingHorizontal:10
            }}>
                <Text style={{
                    fontWeight:"bold"
                }}>Prevention</Text>
                <Text style={{
                    fontWeight:"bold",
                    color:"#00a46c",
                    paddingLeft:35
                }}></Text>
            </View>
            <Text style={{
                paddingHorizontal:10,
                fontWeight:"bold",
                color:"#b1e5d3",
                paddingTop:3
            }}>
                Learn More
            </Text>
        </View> 

        
        {/* treatment */}
        <View 
            // onPress={()=>navigation.navigate("Detail")}
            style={{
                height:250,
                elevation:2,
                backgroundColor:"#FFF",
                marginLeft:20,
                marginTop:20,
                borderRadius:15,
                marginBottom:10,
                width:160
            }}
        >
            <Image
                source={require('../assets/image1.jfif')}
            />
            <View style={{
                flexDirection:"row",
                paddingTop:10,
                paddingHorizontal:10
            }}>
                <Text style={{
                    fontWeight:"bold"
                }}>Treatment</Text>
                <Text style={{
                    fontWeight:"bold",
                    color:"#00a46c",
                    paddingLeft:35
                }}></Text>
            </View>
            <Text style={{
                paddingHorizontal:10,
                fontWeight:"bold",
                color:"#b1e5d3",
                paddingTop:3
            }}>
                Learn More
            </Text>
        </View> 

        {/* //cause and transmission */}
        <View 
            // onPress={()=>navigation.navigate("Detail")}
            style={{
                height:250,
                elevation:2,
                backgroundColor:"#FFF",
                marginLeft:20,
                marginTop:20,
                borderRadius:15,
                marginBottom:10,
                width:160
            }}
        >
            <Image
                source={require('../assets/image1.jfif')}
            />
            <View style={{
                flexDirection:"row",
                paddingTop:10,
                paddingHorizontal:10
            }}>
                <Text style={{
                    fontWeight:"bold"
                }}>Cause and Transmisson</Text>
                <Text style={{
                    fontWeight:"bold",
                    color:"#00a46c",
                    paddingLeft:35
                }}></Text>
            </View>
            <Text style={{
                paddingHorizontal:10,
                fontWeight:"bold",
                color:"#b1e5d3",
                paddingTop:3
            }}>
                Learn More
            </Text>
        </View> 


        </ScrollView>
    );
};

export default Hfmd_details;
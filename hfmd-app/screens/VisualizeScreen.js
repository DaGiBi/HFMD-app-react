import React, { useState, useEffect } from 'react';
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

import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';
const screenWidth = Dimensions.get("window").width;



const VisualizeScreen = () => {


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
    }, []);


    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2,
          },
        ],
      };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [50, 80, 60, 75, 90, 100],
                colors: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`,
                strokeWidth: 2,
            },
        ]
    }

      const pieData = [
        {
          name: "Male",
          population: 10,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15, 
        },
        {
          name: "Female",
          population: 30,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
    ]
    
    const renderOnline = () => {
        return (
            <TouchableOpacity>
                <View style={{ marginTop:50, flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ padding: 10, fontSize: 40 , fontWeight: 'bold'}}>
                        Visualize Screen
                    </Text>
                <BarChart
                    data={barData}
                    width={screenWidth*0.8}
                    height={220}
                    padding={10}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10,
                        },
                    }}
                    style={{
                        marginVertical: 20,
                        borderRadius: 5,
                    }}
                />
                {/* <LineChart
                    data={lineData}
                    width={screenWidth*0.8}
                    height={220}
                    chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                /> */}
                <View style={styles.container}>
                
                {/* <PieChart
                    data={pieData}
                    width={screenWidth}
                    height={100}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `blue, ${opacity})`,
                        style: {
                            borderRadius: 5,
                        },
                        
                    }}
                    style={ styles.chart}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    hasLegend={true}
                    legend={{
                    enabled: true,
                    position: 'bottom',
                    fontFamily: 'Helvetica Neue',
                    fontWeight: 'bold',
                    }}
                    // labelPosition={'inside'}

                    // paddingLeft={"100"}
                    // center={[10, 50]}
                    // relative
                    // margin={20}
                  
  
                    /> */}
                    
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const renderOffline = () => {
        return (
            <View>
                Offline
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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    chart: {
        height: 200,
        width: 200,
        padding: 10
      },
  });
  
export default VisualizeScreen;
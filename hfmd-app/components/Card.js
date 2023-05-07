import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({source, text}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: source }} style={styles.cardImage}/>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  cardImage: {
    height: 200,
    width: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Card;

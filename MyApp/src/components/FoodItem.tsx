import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const FoodItem = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 200, height: 300}}
        source={require('../assets/images/foodone.jpeg')}
      />
      <View style={styles.content}>
        <Text style={{color: 'white', fontWeight: '700'}}>
          Foods That Cause Inflammation
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 3,
    width: 200,
    overflow: 'hidden',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
});

export default FoodItem;

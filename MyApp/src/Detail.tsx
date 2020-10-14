import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: 300}}
        source={require('./assets/images/foodbanner.jpg')}
      />
      <Text style={{padding: 15}}>
        News & Analysis on the Bakery and Snacks Industries FREE NEWSLETTER Your
        e-mail address Subscribe News Sectors Trends Big Brands Resources Events
        Processing & Packaging Podcast Search Subscribe to our FREE newsletter
        Your e-mail address Subscribe Nutrition scientists’ top ten festive
        foods for a delicious, nutritious Christmas By Oliver Morrison
        24-Dec-2019 - Last updated on 24-Dec-2019 at 10:22 GMT Nutrition
        scientists’ top ten festive foods for a delicious, nutritious Christmas
        The top ten highlights a range of seasonal, nutrient-rich foods that are
        synonymous with Christmas time (in the UK at least) and the British
        Nutrition Foundation (BNF) has also provided suggestions for new ways to
        prepare some old favourites. Sara Stanner, Science Director, British
        Nutrition Foundation, said: “The festive season is filled with a whole
        range of delicious foods, many of which are also nutrient rich and can
        make a great contribution to the diet. From vitamin C in clementines and
        fibre in nuts and dried fruit, to omega 3 fats in salmon and B vitamins
        in turkey. Many of these nutritious, festive foods are also very
        versatile​.”
      </Text>
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
    overflow: 'hidden',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
});

export default DetailScreen;

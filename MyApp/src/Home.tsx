import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FoodItem from './components/FoodItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
      }}>
      <TouchableOpacity
        style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <FoodItem />
        <Text style={{marginTop: 20}}>
          Inflammation is the body’s response to foreign objects that may cause
          it harm. On the outside, inflammation often manifests through redness
          and swelling, but inflammation can happen inside the body, too. In
          some cases, your diet can contribute to inflammation. Here are some
          foods that could lead to or worsen inflammation.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

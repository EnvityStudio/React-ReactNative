import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, SafeAreaView, Button} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Button
          title="go to detail"
          onPress={() => {
            navigation.navigate('Detail');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

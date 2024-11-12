import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from './../../constants/Colors';
import { SelectTravelesList } from './../../constants/Options';
import OptionsCard from '../../Components/CreateTrip/OptionCard';

export default function SelectTraveler() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: 'outfit-bold',
          marginTop: 20,
        }}
      >
        Who's Traveling
      </Text>

      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 23,
          marginVertical: 10,
        }}
      >
        Choose your travelers
      </Text>

      <FlatList
        data={SelectTravelesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              backgroundColor: Colors.LIGHT_GRAY,
              borderRadius: 10,
              marginVertical: 8,
            }}
          >
            <OptionsCard option={item} />
          </View>
        )}
      />
    </View>
  );
}

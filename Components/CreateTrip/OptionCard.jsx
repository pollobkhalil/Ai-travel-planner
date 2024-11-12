// src/components/OptionCard.js

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

export default function OptionCard({ option, isSelected, onSelect }) {
  const handlePress = () => {
    if (onSelect) {
      onSelect(option);  // Call the onSelect function passed from parent
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View
        style={{
          padding: 15,
          backgroundColor: 'rgba(211, 211, 211, 0.5)', // Transparent gray background
          borderRadius: 10,
          flexDirection: 'row', // Align items horizontally
          justifyContent: 'space-between', // Spread out the content
          alignItems: 'center', // Vertically center the items
          borderWidth: isSelected ? 1 : 0, // Add border when selected
          borderColor: 'black', // Border color when selected
        }}
      >
        {/* Text Content */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'outfit-bold',
              marginBottom: 1,
              color: Colors.DARK,
            }}
          >
            {option?.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'outfit',
              color: Colors.GRAY,
            }}
          >
            {option?.desc}
          </Text>
        </View>

        {/* Icon Placeholder */}
        <View>
          <Text style={{ fontSize: 20, color: Colors.GRAY }}>
            {option?.icon || '🏷️'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

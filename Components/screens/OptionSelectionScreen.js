// src/screens/OptionSelectionScreen.js

import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // For navigation
import OptionCard from '../components/OptionCard'; // Import OptionCard

// Example options
const options = [
  { title: 'Option 1', desc: 'Description for option 1', icon: '🌍' },
  { title: 'Option 2', desc: 'Description for option 2', icon: '✈️' },
  { title: 'Option 3', desc: 'Description for option 3', icon: '🏖️' },
];

export default function OptionSelectionScreen() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation(); // Initialize the navigation object

  // Handle selection of an option
  const handleSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);  // Deselect the option if it's already selected
    } else {
      setSelectedOption(option);  // Select the new option and deselect the previous one
    }
  };

  // Handle the Continue button press
  const handleContinue = () => {
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      navigation.navigate('NextScreen', { selectedOption });  // Navigate to the next screen and pass selected option
    } else {
      alert('Please select an option before continuing!');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* ScrollView for the cards */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        {/* Render OptionCards with onSelect passed as a prop */}
        {options.map((option, index) => (
          <OptionCard
            key={index}
            option={option}
            isSelected={selectedOption === option}  // Pass the selection status
            onSelect={handleSelect}  // Pass onSelect to OptionCard
          />
        ))}
      </ScrollView>

      {/* Conditionally show the Continue button */}
      {selectedOption && (
        <View style={styles.continueButtonContainer}>
          <Button title="Continue" onPress={handleContinue} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  continueButtonContainer: {
    position: 'absolute', // Position the button at the bottom of the screen
    bottom: 20, // Space from the bottom of the screen
    left: 20, // Optional: space from the left edge
    right: 20, // Optional: space from the right edge
  },
});

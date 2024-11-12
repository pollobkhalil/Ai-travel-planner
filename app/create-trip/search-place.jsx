import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function SearchPlace() {
  const navigation = useNavigation();
  const router = useRouter();
  const [manualLocations] = useState([
    {
      name: "Eiffel Tower",
      coordinates: { lat: 48.8584, lng: 2.2945 },
      description: "Tourist attraction in Paris, France",
    },
    {
      name: "Great Wall of China",
      coordinates: { lat: 40.4319, lng: 116.5704 },
      description: "Historic wall in Beijing, China",
    },
    {
      name: "Statue of Liberty",
      coordinates: { lat: 40.6892, lng: -74.0445 },
      description: "Monument in New York, USA",
    },
    {
      name: "Khulna",
      coordinates: { lat: 40.6893, lng: -75.0445 },
      description: "Bangladesh , Khulna",
    },
    // Add more places as needed
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Search Place",
      headerShown: true,
    });
  }, []);

  useEffect(() => {
    // Filter locations as the user types
    if (searchQuery) {
      const results = manualLocations.filter((location) =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLocations(results);
    } else {
      setFilteredLocations([]);
    }
  }, [searchQuery]);

  const handleLocationPress = (location) => {
    // Navigate to the new route with selected location info as params
    router.push({
      pathname: '/create-trip/SelectTraveler',
      params: {
        name: location.name,
        lat: location.coordinates.lat,
        lng: location.coordinates.lng,
        description: location.description,
      }
    });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TextInput
        placeholder="Search Place"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: Colors.GRAY,
          marginBottom: 10,
        }}
      />

      <FlatList
        data={filteredLocations}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleLocationPress(item)}>
            <View
              style={{
                padding: 15,
                marginVertical: 5,
                backgroundColor: Colors.LIGHT_GRAY,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text style={{ fontSize: 12, color: Colors.GRAY }}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() =>
          searchQuery ? (
            <Text style={{ color: Colors.GRAY, textAlign: "center" }}>
              No locations found.
            </Text>
          ) : null
        }
      />
    </View>
  );
}

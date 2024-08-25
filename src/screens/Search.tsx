import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importing Picker
import Slider from '@react-native-community/slider'; // Importing Slider

type FilterData = {
  searchTerm: string;
  type: string;
  sort: string;
  order: string;
  location: string;
  priceRange: [number, number]; // For price range
};

const Search: React.FC = () => {
  const [sidebardata, setSidebardata] = useState<FilterData>({
    searchTerm: '',
    type: 'all',
    sort: 'latest',
    order: 'desc',
    location: '',
    priceRange: [0, 1000000], // Default price range
  });

  const [activeButton, setActiveButton] = useState<string>('Buy');

  const handleChange = (id: keyof FilterData, value: string | [number, number]) => {
    setSidebardata({ ...sidebardata, [id]: value });
  };

  const handleSearch = () => {
    console.log('Search parameters:', sidebardata);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperpart}>
        <View style={styles.buttonContainer}>
          {['Buy', 'Rent', 'Commercial'].map(button => (
            <TouchableOpacity
              key={button}
              style={[styles.button, activeButton === button && styles.activeButton]}
              onPress={() => setActiveButton(button)}
            >
              <Text style={[styles.buttonText, activeButton === button && styles.activeButtonText]}>
                {button}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Keywords</Text>
          <TextInput
            placeholder="Enter keywords..."
            style={styles.input}
            value={sidebardata.searchTerm}
            onChangeText={(text) => handleChange('searchTerm', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            placeholder="Enter location"
            style={styles.input}
            value={sidebardata.location}
            onChangeText={(text) => handleChange('location', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sort By</Text>
          <Picker
            selectedValue={sidebardata.sort}
            onValueChange={(itemValue) => handleChange('sort', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Latest" value="latest" />
            <Picker.Item label="Oldest" value="oldest" />
            <Picker.Item label="Expensive" value="expensive" />
            <Picker.Item label="Cheapest" value="cheapest" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Price Range</Text>
          <View style={styles.sliderContainer}>
            <Text>${sidebardata.priceRange[0]}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000000}
              step={1000}
              onValueChange={(value) => handleChange('priceRange', [value, sidebardata.priceRange[1]])}
              value={sidebardata.priceRange[0]}
            />
            <Text>${sidebardata.priceRange[1]}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch} activeOpacity={0.8}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperpart: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
  },
  activeButton: {
    borderBottomColor: '#FD3752',
  },
  buttonText: {
    fontSize: 16,
  },
  activeButtonText: {
    fontWeight: 'bold',
    color: '#FD3752',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Search;

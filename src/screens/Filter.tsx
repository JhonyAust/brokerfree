import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type FilterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Filter'>;

const Filter: React.FC = () => {
  const navigation = useNavigation<FilterScreenNavigationProp>();
  const [activeButton, setActiveButton] = useState<string>('Buy');
  const [filters, setFilters] = useState({
    searchTerm: '',
    type: 'all',
    sort: 'createdAt',
    order: 'desc',
    location: '',
    priceRange: [0, 1000000],
    furnished: false,
    parking: false,
    offer: false,
    propertyType: 'all',
  });

  const handleChange = (id: keyof typeof filters, value: any) => {
    if (id === 'sort' && typeof value === 'string') {
      const [sort, order] = value.split('_');
      setFilters({ ...filters, sort: sort || 'createdAt', order: order || 'desc' });
    } else {
      setFilters({ ...filters, [id]: value });
    }
  };

  const handleSearch = () => {
    const searchQuery = new URLSearchParams({
      searchTerm: filters.searchTerm,
      type: filters.type,
      sort: filters.sort,
      order: filters.order,
      location: filters.location,
      maxPrice: filters.priceRange[1].toString(),
      furnished: filters.furnished.toString(),
      parking: filters.parking.toString(),
      offer: filters.offer.toString(),
      propertyType: filters.propertyType,
    }).toString();

    console.log("Search data:", searchQuery);
    navigation.navigate('Listings', { searchQuery });
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
            value={filters.searchTerm}
            onChangeText={(text) => handleChange('searchTerm', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            placeholder="Enter location"
            style={styles.input}
            value={filters.location}
            onChangeText={(text) => handleChange('location', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sort By</Text>
          <Picker
            selectedValue={`${filters.sort}_${filters.order}`}
            onValueChange={(itemValue) => handleChange('sort', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Latest" value="createdAt_desc" />
            <Picker.Item label="Oldest" value="createdAt_asc" />
            <Picker.Item label="Cheapest" value="regularPrice_asc" />
            <Picker.Item label="Expensive" value="regularPrice_desc" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Price Range</Text>
          <View style={styles.sliderContainer}>
            <Text>৳ {filters.priceRange[0]}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000000}
              step={1000}
              onValueChange={(value) => handleChange('priceRange', [value, filters.priceRange[1]])}
              value={filters.priceRange[0]}
            />
            <Text>৳ {filters.priceRange[1]}</Text>
          </View>
        </View>

        {/* Furnished */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Furnished</Text>
          <Switch
            value={filters.furnished}
            onValueChange={(value) => handleChange('furnished', value)}
          />
        </View>

        {/* Parking */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Parking</Text>
          <Switch
            value={filters.parking}
            onValueChange={(value) => handleChange('parking', value)}
          />
        </View>

        {/* Offer */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Offer</Text>
          <Switch
            value={filters.offer}
            onValueChange={(value) => handleChange('offer', value)}
          />
        </View>

        {/* Property Type */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Property Type</Text>
          <Picker
            selectedValue={filters.propertyType}
            onValueChange={(itemValue) => handleChange('propertyType', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Apartment" value="apartment" />
            <Picker.Item label="House" value="house" />
            <Picker.Item label="Land" value="land" />
            <Picker.Item label="Commercial" value="commercial" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch} activeOpacity={0.8}>
        <Text style={styles.searchButtonText}>FILTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 2,
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
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

export default Filter;

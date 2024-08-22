import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

type FilterData = {
  searchTerm: string;
  type: string;
  sort: string;
  order: string;
  location: string;
};

const Search: React.FC = () => {
  const [sidebardata, setSidebardata] = useState<FilterData>({
    searchTerm: '',
    type: 'all',
    sort: 'created_at',
    order: 'desc',
    location: '',
  });

  const [activeButton, setActiveButton] = useState<string>('Buy');

  const handleChange = (id: 'type' | 'searchTerm' | 'sort_order' | 'location', value: string) => {
    if (id === 'type' || id === 'searchTerm') {
      setSidebardata({ ...sidebardata, [id]: value });
    }

    if (id === 'sort_order') {
      const sort = value.split('_')[0] || 'created_at';
      const order = value.split('_')[1] || 'desc';
      setSidebardata({ ...sidebardata, sort, order });
    }

    if (id === 'location') {
      setSidebardata({ ...sidebardata, location: value });
    }
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search parameters:', sidebardata);
  };

  return (
    <View style={styles.container}>
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
        <TextInput
          placeholder="Sort by"
          style={styles.input}
          onChangeText={(text) => handleChange('sort_order', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>For</Text>
        <TextInput
          placeholder="For"
          style={styles.input}
          onChangeText={(text) => handleChange('type', text)}
        />
      </View>
      
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default Search;

import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FiltersProps {
  setActiveFilter: (filter: string) => void;
  activeFilter: string;
}

const Filters: React.FC<FiltersProps> = ({ setActiveFilter, activeFilter }) => {
  const handleButtonPress = (button: string) => {
    setActiveFilter(button);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          <Text>Direct Owner Properties </Text>
          <Text> | </Text>
          <Text style={styles.boldtitle}>Zero Commission</Text>
        </Text>
      <View style={styles.buttonContainer}>
        {['Buy', 'Rent', 'Commercial'].map((button) => (
          <TouchableOpacity
            key={button}
            style={[styles.button, activeFilter === button && styles.activeButton]}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={[styles.buttonText, activeFilter === button && styles.activeButtonText]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            editable={false} // Makes the input non-editable to function as a button
          />
          <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // White background for the entire Filters component
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 4,
    marginTop:2,
    width: '100%', // Make the container full width

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingLeft:20,
    paddingRight:20,
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
  title: {
    textAlign: 'center',
    padding:16,
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },
  boldtitle: {
    
    fontWeight: 'bold',
   
  },
  searchContainer: {
    marginVertical: 10,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for the search box
    borderColor: '#ccc', // Gray border for the search box
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  searchIcon: {
    backgroundColor: '#FD3752', // Red background for the search icon
    borderRadius: 4, // Makes the search icon background circular
    padding: 10,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
});

export default Filters;

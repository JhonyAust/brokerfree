import React from 'react';
import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoanServices = () => {
  const handlePress = () => {
    // Handle button press here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Loans and Legal Services</Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <View style={styles.upperSection}>
             <Image
              source={{ uri: 'https://img.icons8.com/external-mixed-line-solid-yogi-aprelliyanto/64/external-home-loan-real-asset-mixed-line-solid-yogi-aprelliyanto.png' }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.title}>Home Loan</Text>
            <Icon name="angle-right" size={20} color="#007A6F" />
          </View>
          <Text style={styles.subtitle}>Get your dream home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <View style={styles.upperSection}>
             <Image
              source={{ uri: 'https://img.icons8.com/cotton/64/tips-2.png' }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.title}>Legal Services</Text>
            <Icon name="angle-right" size={20} color="#007A6F" />
          </View>
          <Text style={styles.subtitle}>Get legal assistance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E2E9EF',
    marginVertical:4,
  },
  cardsContainer: {
    flexDirection: 'row', // Align cards in a row
    justifyContent: 'space-between', // Space between the cards
    marginTop: 4,
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  upperSection: {
    height: 80, // Set the height of the upper section
    backgroundColor: '#F7F9FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerSection: {
    flexDirection: 'row', // Align title and arrow side by side
    justifyContent: 'space-between', // Push title and arrow to opposite ends
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  icon: {
    // Customize icon styles if needed
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D3E3E',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    
    textAlign: 'center', // Center subtitle text
    marginBottom:10,
  },
  image: {
    marginTop:12,
    width: 64, // Adjust the width as needed
    height: 64, // Adjust the height as needed
  },
});

export default LoanServices;

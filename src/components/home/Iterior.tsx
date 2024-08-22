import React from 'react';
import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Interior = () => {
  const handlePress = () => {
    // Handle button press here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Interior & Renovations</Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <View style={styles.upperSection}>
             <Image
              source={{ uri: 'https://img.icons8.com/external-microdots-premium-microdot-graphic/64/external-interior-interior-homedecor-vol1-microdots-premium-microdot-graphic-5.png' }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.title}>Home Interior</Text>
            <Icon name="angle-right" size={20} color="#007A6F" />
          </View>
          <Text style={styles.subtitle}>Experience the Art of Stunning Design</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <View style={styles.upperSection}>
             <Image
              source={{ uri: 'https://img.icons8.com/external-wanicon-flat-wanicon/64/external-renovation-business-model-canvas-wanicon-flat-wanicon.png' }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.title}>Home Renovation</Text>
            <Icon name="angle-right" size={20} color="#007A6F" />
          </View>
          <Text style={styles.subtitle}>Remodel your dream home </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:4,
    padding: 20,
    backgroundColor: '#E9F8F1',
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
    height: 85, // Set the height of the upper section
    backgroundColor: '#F7F9FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerSection: {
    flexDirection: 'row', // Align title and arrow side by side
    justifyContent: 'space-between', // Push title and arrow to opposite ends
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,
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
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
    padding:6,
    textAlign: 'center', // Center subtitle text
    marginBottom:10,
  },
  image: {
    marginTop:12,
    width: 64, // Adjust the width as needed
    height: 64, // Adjust the height as needed
    marginBottom:10,
  },
});

export default Interior;

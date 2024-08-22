import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PostProperty = () => {
  return (
    <View style={styles.container}>
      {/* Left Side Section */}
      <View style={styles.leftSection}>
        <Text style={styles.title}>
          <Text style={styles.titleText}>Looking for </Text>
          <Text style={styles.titleTextBold}>Tenants / Buyers?</Text>
        </Text>
        
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>Faster & Verified Tenants/Buyers</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>Pay ZERO brokerage</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Post Free Property Ad</Text>
        </TouchableOpacity>
      </View>
      
      {/* Right Side Section */}
      <View style={styles.rightSection}>
        <Image
          source={{ uri: 'https://img.icons8.com/external-becris-lineal-color-becris/64/external-home-literary-genres-becris-lineal-color-becris.png' }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#E7F2FD',
    marginVertical:4,
  },
  leftSection: {
    flex: 0.65,
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 10,
    color:'#000000'
  },
  titleText: {
    fontSize: 16,
    marginBottom: 10,
  },
  titleTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  features: {
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#FD3752',
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightSection: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: 80,
  },
});

export default PostProperty;

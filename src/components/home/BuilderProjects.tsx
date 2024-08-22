import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BuilderProjects = () => {
  return (
    <View style={styles.container}>
      {/* Left Side Image */}
      <Image
        source={{ uri: 'https://img.icons8.com/office/80/skyscrapers.png' }} // Replace with your image URL
        style={styles.image}
      />
      
      {/* Right Side Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Innovative New Homes</Text>
        <Text style={styles.subtitle}>Explore the newest developments and modern residential options</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore</Text>
          <Icon name="long-arrow-right" size={25} color="#007A6F" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 40,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginVertical: 10,
  },
  button: {
    flexDirection:'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#209586',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:12,
  },
  icon:{
    marginLeft:12,
  }
});

export default BuilderProjects;

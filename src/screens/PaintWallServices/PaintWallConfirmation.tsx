// src/screens/CreateListing/ListingConfirmation.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type PaintWallConfirmationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PaintWallConfirmation'>;

interface Props {
  navigation: PaintWallConfirmationScreenNavigationProp;
}

const PaintWallConfirmation: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Icon name="thumbs-up" size={80} color="#A479ED" style={styles.icon} />
      <Text style={styles.title}>Thanks for ordering</Text>
      <Text style={styles.subtitle}>Your order has been successfully submitted!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PaintWallServices')}>
        <Text style={styles.buttonText}>Add Another Paint Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonHome} onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}>
        <Text style={styles.buttonTextHome}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginTop:2,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#267DCE',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonHome: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#888', // Grey shadow color
    shadowOffset: { width: 0, height: 2 }, // Position of the shadow
    shadowOpacity: 0.5, // Opacity of the shadow
    shadowRadius: 4, // Blurriness of the shadow
    elevation: 5, // Elevation for Android
  },
  buttonTextHome: {
    color: '#267DCE',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaintWallConfirmation;

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckLoan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Unlock Your Dream Home</Text>
        <Text style={styles.subtitle}>Easy Application Process with Quick Approvals</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Eligibility</Text>
          <Icon name="long-arrow-right" size={25} color="#FD3752" style={styles.icon}/>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: 'https://img.icons8.com/external-icons-smashing-stocks/100/external-Home-Loan-bank-icons-icons-smashing-stocks.png' }} // Replace with your image URL
        style={styles.image}
      />
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
    
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginVertical: 10,
  },
  button: {
    flexDirection:'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    
  },
  buttonText: {
    color: '#FD3752',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:12,
  },
  icon:{
    marginLeft:12,
  }
});

export default CheckLoan;

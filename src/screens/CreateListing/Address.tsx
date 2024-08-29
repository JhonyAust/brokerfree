import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome'; 

type AddressScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Address'>;
type AddressScreenRouteProp = RouteProp<RootStackParamList, 'Address'>;

interface Props {
  navigation: AddressScreenNavigationProp;
  route: AddressScreenRouteProp;
}

const Address: React.FC<Props> = ({ navigation }) => {
  const [address, setAddress] = useState('');
  const [saleOrRent, setSaleOrRent] = useState<'sale' | 'rent'>('sale');

  const handleNext = () => {
    navigation.navigate('Details', { address, saleOrRent });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.mainTitle}>Initiate Your Listing Experience</Text>
      <View style={styles.saleRentContainer}>
        <Text style={styles.saleRentContainertitle}>Select Property Ad Type</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.saleRentButton, saleOrRent === 'sale' && styles.activeButton]}
            onPress={() => setSaleOrRent('sale')}
          >
            <Text style={[styles.saleRentText, saleOrRent === 'sale' && styles.saleRentTextactive]}>
              Sale
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.saleRentButton, saleOrRent === 'rent' && styles.activeButton]}
            onPress={() => setSaleOrRent('rent')}
          >
            <Text style={[styles.saleRentText, saleOrRent === 'rent' && styles.saleRentTextactive]}>
              Rent
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Address"
        value={address}
        onChangeText={setAddress}
      />
      
      <View style={styles.contactSection}>
        <Icon name="user" size={30} color="#007A6F" />
        <Text style={styles.contactText}>Need Help? Get help with your property assistant</Text>
        <View style={styles.phoneContainer}>
          <Icon name="phone" size={20} color="#007A6F" />
          <Text style={styles.phoneNumber}>+1234567890</Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={[styles.nextButton, !address && styles.disabledButton]}
        onPress={handleNext}
        disabled={!address}
      >
        <Text style={styles.nextButtonText}>SAVE & CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:2,
    padding: 20,
    backgroundColor: '#fff',
  },
  mainTitle: {
    paddingVertical:40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007A6F',
    marginBottom: 20,
    textAlign: 'center',
  },
  saleRentContainer: {
    
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 16,
  },
  saleRentContainertitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    borderBottomColor: '#007A6F',
    borderBottomWidth: 2,
    padding: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20,
  },
  saleRentButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#EBEBEB',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    
  },
  activeButton: {
    backgroundColor: '#007A6F',
  },
  saleRentText: {
    color: '#444343',
    fontSize: 16,
  },
  saleRentTextactive: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    marginTop:20,
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#67bcb4',
  },
  contactSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical:30,
    backgroundColor: '#DBF2FF',
    borderRadius: 8,
    marginTop: 30,
  },
  contactText: {
    fontSize: 16,
    flex: 1,  // Takes 50% of the space
    marginLeft: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,  // Takes 50% of the space
    justifyContent: 'flex-end',
  },
  phoneNumber: {
    fontSize: 16,
    color: '#007A6F',
    marginLeft: 8,
  },
});

export default Address;

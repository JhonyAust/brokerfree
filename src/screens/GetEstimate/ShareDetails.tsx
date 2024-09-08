import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, Alert, Switch  } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

type ShareDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ShareDetails'>;
type ShareDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ShareDetails'>;

interface Props {
  navigation: ShareDetailsScreenNavigationProp;
  route: ShareDetailsScreenRouteProp;
}

const ShareDetails: React.FC<Props> = ({ navigation, route }) => {
  const { address, dateTime } = route.params;
  const dateTimeObject = new Date(dateTime);

  // Define formData type
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '+880',
    address: address || '',
    message: '',
    agreeTerms: false,
  });

  // Handling input changes with explicit typing
  const handleChange = (name: keyof typeof formData, value: string | boolean) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  // Handle form submission
  const handleSubmit = () => {
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.phoneNumber.trim() === '' ||
      formData.address.trim() === '' ||
      formData.message.trim() === ''
    ) {
      // Use Alert from 'react-native'
      Alert.alert('Error', 'Please fill all the required fields.');
      return;
    }

    console.log(formData);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '+880',
      address: '',
      message: '',
      agreeTerms: false,
    });

    navigation.navigate('Services');
  };

  return (
    <View style={styles.Container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Your Details</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name*</Text>
            <TextInput
              style={styles.input}
              placeholder="E.g.: John"
              value={formData.name}
              onChangeText={(text) => handleChange('name', text)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email*</Text>
            <TextInput
              style={styles.input}
              placeholder="E.g.: john@gmail.com"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone number*</Text>
            <TextInput
              style={styles.input}
              placeholder="+880"
              keyboardType="phone-pad"
              value={formData.phoneNumber}
              onChangeText={(text) => handleChange('phoneNumber', text)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address*</Text>
            <TextInput
              style={styles.input}
              placeholder="House 500, Road 7, Dhanmondi"
              value={formData.address}
              onChangeText={(text) => handleChange('address', text)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Your message"
              multiline
              numberOfLines={4}
              value={formData.message}
              onChangeText={(text) => handleChange('message', text)}
            />
          </View>

          <View style={styles.checkboxContainer}>
          <Switch 
            value={formData.agreeTerms}
            onValueChange={(newValue: boolean) => handleChange('agreeTerms', newValue)}
          />

            <Text style={styles.checkboxText}>
              I have read, understood, and accept the{' '}
              <Text style={styles.link}>Terms & Conditions</Text> and Privacy Policy of Nomedia.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f5f5f5',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f5f5f5',
    height: 100,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#007A6F',
  },
  submitButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ShareDetails;

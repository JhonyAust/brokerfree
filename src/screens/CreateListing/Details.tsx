import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const Details: React.FC<Props> = ({ navigation, route }) => {
  const { address, saleOrRent } = route.params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [offerPrice, setOfferPrice] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(0);

  const handleNext = () => {
    navigation.navigate('Types', { address, saleOrRent, name, description, price, offerPrice, discountPrice });
  };

  return (
    <View style={styles.Container}>
    <View style={styles.modalContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Your Property Snapshot</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Property Title</Text>
            <View style={styles.inputWrapper}>
              <Icon name="home" size={20} color="#007A6F" />
              <TextInput
                style={styles.input}
                placeholder="Enter Property Title"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <View style={styles.inputWrapper}>
              <Icon name="file-text" size={20} color="#007A6F" />
              <TextInput
                style={styles.input}
                placeholder="Enter Description"
                value={description}
                onChangeText={setDescription}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Price</Text>
            <View style={styles.inputWrapper}>
              <Icon name="dollar" size={20} color="#007A6F" />
              <TextInput
                style={styles.input}
                placeholder="Enter Price"
                keyboardType="numeric"
                value={price.toString()}
                onChangeText={(text) => setPrice(Number(text))}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Offer Price (optional)</Text>
            <View style={styles.inputWrapper}>
              <Icon name="tag" size={20} color="#007A6F" />
              <TextInput
                style={styles.input}
                placeholder="Enter Offer Price"
                keyboardType="numeric"
                value={offerPrice.toString()}
                onChangeText={(text) => setOfferPrice(Number(text))}
              />
            </View>
          </View>

          {offerPrice > 0 && (
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Discount Price (optional)</Text>
              <View style={styles.inputWrapper}>
                <Icon name="percent" size={20} color="#007A6F" />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Discount Price"
                  keyboardType="numeric"
                  value={discountPrice.toString()}
                  onChangeText={(text) => setDiscountPrice(Number(text))}
                />
              </View>
            </View>
          )}

          <View style={styles.contactSection}>
            <Icon name="user" size={30} color="#007A6F" />
            <Text style={styles.contactText}>Need Help? Get help with your property assistant</Text>
            <View style={styles.phoneContainer}>
              <Icon name="phone" size={20} color="#007A6F" />
              <Text style={styles.phoneNumber}>+1234567890</Text>
            </View>
          </View>

         
        </ScrollView>

        
      </KeyboardAvoidingView>
    </View>
    <TouchableOpacity
          style={[styles.nextButton, (!name || price <= 0 || !description) && styles.disabledButton]}
          onPress={handleNext}
          disabled={!name || price <= 0 || !description}
        >
          <Text style={styles.nextButtonText}>SAVE & CONTINUE</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        
      },
  modalContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom:150,
    marginTop:50,
  },
  scrollContainer: {
     // Ensure content is visible above the button
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom:100,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 26,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444343',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    marginVertical:4,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  nextButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 4,
    left: 16,
    right: 16,
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
    marginBottom:30,
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

export default Details;

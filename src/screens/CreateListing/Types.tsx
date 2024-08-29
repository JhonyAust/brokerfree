import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

type TypesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Types'>;
type TypesScreenRouteProp = RouteProp<RootStackParamList, 'Types'>;

interface Props {
  navigation: TypesScreenNavigationProp;
  route: TypesScreenRouteProp;
}

const Types: React.FC<Props> = ({ navigation, route }) => {
  const { address, saleOrRent, name, description, price, offerPrice, discountPrice } = route.params;

  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [furnished, setFurnished] = useState(false);
  const [parking, setParking] = useState(false);
  const [showingOption, setShowingOption] = useState<'user' | 'company'>('user');
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    navigation.navigate('UploadImages', 
        { address, saleOrRent, name, description, price, offerPrice, discountPrice, bedrooms, bathrooms, furnished, parking, });
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Property Details</Text>
            
            <View style={styles.inputGroup}>
            <View style={styles.icontext}>
            <Icon name="bed" size={20} color="#444343" style={styles.icon} />
              <Text style={styles.label}>Number of Bedrooms</Text>
              </View>
              <View style={styles.row}>
                
                <View style={styles.counterContainer}>
                  <TouchableOpacity style={styles.counterButton} onPress={() => setBedrooms(Math.max(0, bedrooms - 1))}>
                    <Text style={styles.counterButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{bedrooms}</Text>
                  <TouchableOpacity style={styles.counterButton} onPress={() => setBedrooms(bedrooms + 1)}>
                    <Text style={styles.counterButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.inputGroup}>
            <View style={styles.icontext}>
            <Icon name="bath" size={20} color="#444343" style={styles.icon} />
            <Text style={styles.label}>Number of Bathrooms</Text>
            </View>
              <View style={styles.row}>
                
                <View style={styles.counterContainer}>
                  <TouchableOpacity style={styles.counterButton} onPress={() => setBathrooms(Math.max(0, bathrooms - 1))}>
                    <Text style={styles.counterButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{bathrooms}</Text>
                  <TouchableOpacity style={styles.counterButton} onPress={() => setBathrooms(bathrooms + 1)}>
                    <Text style={styles.counterButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.row}>
                <Icon name="bed" size={20} color="#444343" style={styles.icon} />
                <Text style={styles.label}>Furnished</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={[styles.toggleButton, furnished && styles.activeToggle]}
                  onPress={() => setFurnished(true)}
                >
                  <Text style={styles.toggleText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.toggleButton, !furnished && styles.activeToggle]}
                  onPress={() => setFurnished(false)}
                >
                  <Text style={styles.toggleText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.row}>
                <Icon name="car" size={20} color="#444343" style={styles.icon} />
                <Text style={styles.label}>Parking</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={[styles.toggleButton, parking && styles.activeToggle]}
                  onPress={() => setParking(true)}
                >
                  <Text style={styles.toggleText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.toggleButton, !parking && styles.activeToggle]}
                  onPress={() => setParking(false)}
                >
                  <Text style={styles.toggleText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Who will show the property?</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.dropdown}>
                <Text style={styles.dropdownText}>{showingOption === 'user' ? 'You' : 'Company'}</Text>
                <Icon name="chevron-down" size={20} color="gray" />
              </TouchableOpacity>
              <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={styles.modalBackground}>
                  <View style={styles.modalContent}>
                    <Picker
                      selectedValue={showingOption}
                      onValueChange={(itemValue: string) => {
                        setShowingOption(itemValue as 'user' | 'company');
                        setModalVisible(false);
                      }}
                    >
                      <Picker.Item label="You" value="user" />
                      <Picker.Item label="Company" value="company" />
                    </Picker>
                  </View>
                </View>
              </Modal>
            </View>

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
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>SAVE & CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  modalContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 100,
    marginTop: 20,
  },
  scrollContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 100,
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 16,
    color: '#444343',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12, // Added padding
    
  },
  icontext: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, // Added padding
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'center',
    padding: 6,
  },
  counterButton: {
    backgroundColor: '#E9EAEE',
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  counterButtonText: {
    color: 'gray',
    fontSize: 26,
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  toggleButton: {
    backgroundColor: '#E9EAEE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginHorizontal: 15,
  },
  toggleText: {
    fontSize: 16,
  },
  activeToggle: {
    backgroundColor: '#007A6F',
    color: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12, // Increased padding
    paddingVertical: 10, // Added vertical padding
    backgroundColor: '#fff',
    marginVertical: 4,
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 16,
    color: '#444343',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  contactSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: '#DBF2FF',
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 30,
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
  nextButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 12,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Types;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component
import SingleListingCard from '../components/Listings/SingleLisitngCard';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type ListingsScreenRouteProp = RouteProp<RootStackParamList, 'Listings'>;
type ListingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Listings'>;

const Listings: React.FC = () => {
  const navigation = useNavigation<ListingsScreenNavigationProp>();
  const route = useRoute<ListingsScreenRouteProp>();
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortModalVisible, setSortModalVisible] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>('createdAt_desc');

  const handleFilterPress = () => {
    navigation.navigate('Filter');
  };

  const handleSortPress = () => {
    setSortModalVisible(true);
  };

  const applySort = () => {
    setSortModalVisible(false);
    const [sort, order] = sortOrder.split('_');
    const updatedQuery = new URLSearchParams({
      ...Object.fromEntries(new URLSearchParams(route.params?.searchQuery)),
      sort,
      order,
    }).toString();
  
    navigation.navigate('Listings', { searchQuery: updatedQuery });
  };

  const searchQuery = route.params?.searchQuery || '';
  
  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://10.0.2.2:3000/api/listing/get?${searchQuery}`);
        const data = await response.json();
        console.log("Listings data are:", data);
        setListings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#007A6F" />
        ) : (
          <ScrollView>
            {listings.map((listing) => (
              <SingleListingCard key={listing._id} listing={listing} />
            ))}
          </ScrollView>
        )}
      </View>

      {/* Fixed Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton} onPress={handleSortPress}>
          <Icon name="sort" size={20} color="#666464" style={styles.icon} />
          <Text style={styles.bottomButtonText}>SORT BY</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.bottomButton} onPress={handleFilterPress}>
          <Icon name="filter" size={20} color="#666464" style={styles.icon} />
          <Text style={styles.bottomButtonText}>FILTER</Text>
        </TouchableOpacity>
      </View>

      {/* Sort Modal */}
      <Modal visible={sortModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort By</Text>
            <Picker
              selectedValue={sortOrder}
              onValueChange={(itemValue: string) => setSortOrder(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Latest" value="createdAt_desc" />
              <Picker.Item label="Oldest" value="createdAt_asc" />
              <Picker.Item label="Cheapest" value="regularPrice_asc" />
              <Picker.Item label="Expensive" value="regularPrice_desc" />
            </Picker>
            <TouchableOpacity style={styles.applyButton} onPress={applySort}>
              <Text style={styles.applyButtonText}>APPLY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:2,
  },
  subcontainer: {
    padding: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 5,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  bottomButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Align icon and text horizontally
  },
  bottomButtonText: {
    color: '#666464',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5, // Add margin to separate icon and text
  },
  icon: {
    backgroundColor: 'transparent', // Ensure the background is transparent
    marginRight:15,
  },
  separator: {
    height: '80%',
    width: 1,
    backgroundColor: '#ccc', // Separator color
    marginHorizontal: 10, // Space between the buttons and the separator
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  picker: {
    width: '100%',
  },
  applyButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 10,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Listings;

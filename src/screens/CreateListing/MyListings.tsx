import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, StyleSheet, Alert, Text } from 'react-native';
import MyListingCard from '../../components/Listings/MyListingCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome

const MyListings: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { currentUser } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://10.0.2.2:3000/api/user/listings/${currentUser._id}`);
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const handleDelete = async (listingId: string) => {
    try {
      const res = await fetch(`http://10.0.2.2:3000/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      // Remove the listing from the state
      setListings((prev) => prev.filter((listing) => listing._id !== listingId));
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the listing');
    }
  };

  const handleEdit = (listing: any) => {
    // Navigate to the edit screen (you can define an EditListing screen)
    console.log('Editing listing:', listing);
    // navigation.navigate('EditListing', { listing });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007A6F" />
      ) : (
        <ScrollView>
          {listings.length === 0 ? (
            <View style={styles.noListingsContainer}>
              {/* Red icon for no listings */}
              <FontAwesome name="exclamation-circle" size={50} color="red" />
              {/* Text message must be inside <Text> */}
              <Text style={styles.noListingsText}>You currently have no listings</Text>
            </View>
          ) : (
            listings.map((listing) => (
              <MyListingCard
                key={listing._id}
                listing={listing}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 2,
    padding: 12,
  },
  noListingsContainer: {
    alignItems: 'center', // Center the icon and text
    justifyContent: 'center',
    marginTop: 20,
  },
  noListingsText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MyListings;

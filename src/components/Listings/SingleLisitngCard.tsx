import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

interface Listing {
  _id: string;
  name: string;
  address: string;
  imageUrls: string[];
  bedrooms: number;
  bathrooms: number;
  furnished: boolean;
  offer: boolean;
  discountPrice: number;
  regularPrice: number;
  type: string;
}

interface SingleListingCardProps {
  listing: Listing;
}

const SingleListingCard: React.FC<SingleListingCardProps> = ({ listing }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        // onPress={() => navigation.navigate('ListingDetails', { id: listing._id })}
        style={styles.imageContainer}
      >
        <Image
          source={{
            uri: listing.imageUrls[0] ||
              'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg',
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.address}><Icon name="location-outline" size={16} /> {listing.address}</Text>
        <Text style={styles.name}>{listing.name}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Icon name="bed-outline" size={20} color="#007A6F" />
            <Text>{listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon name="water-outline" size={20} color="#007A6F" />
            <Text>{listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon name="cube-outline" size={20} color="#007A6F" />
            <Text>{listing.furnished ? 'Furnished' : 'Unfurnished'}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>$
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </Text>
          <TouchableOpacity>
            <Text style={styles.detailsButton}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  address: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007A6F',
  },
  detailsButton: {
    fontSize: 14,
    color: '#007A6F',
    fontWeight: 'bold',
  },
});

export default SingleListingCard;

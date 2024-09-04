import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';

const ServiceOffer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Special Offers for You</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.offerContainer}
      >
        {/* Offer Section 1 */}
        <View style={[styles.offerCard, { backgroundColor: '#F0F6D6' }]}>
          <Text style={styles.offerTitle}>Flat 30% off on Rental agreement</Text>
          <Text style={styles.offerSubtitle}>Same day delivery</Text>
          <TouchableOpacity style={styles.offerButton}>
            <Text style={styles.offerButtonText}>Create Agreement</Text>
          </TouchableOpacity>
        </View>
        
        {/* Offer Section 2 */}
        <View style={[styles.offerCard, { backgroundColor: '#DBEEF4' }]}>
          <Text style={styles.offerTitle}>Upto 60% off on Home Cleaning</Text>
          <Text style={styles.offerSubtitle}>Lowest Rates</Text>
          <TouchableOpacity style={styles.offerButton}>
            <Text style={styles.offerButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>

        {/* Offer Section 3 */}
        <View style={[styles.offerCard, { backgroundColor: '#DBF3ED' }]}>
          <Text style={styles.offerTitle}>Flat 25% off on Home Painting & Decoration</Text>
          <Text style={styles.offerSubtitle}>Festive Sale</Text>
          <TouchableOpacity style={styles.offerButton}>
            <Text style={styles.offerButtonText}>Explore Now</Text>
          </TouchableOpacity>
        </View>

        {/* Offer Section 4 */}
        <View style={[styles.offerCard, { backgroundColor: '#F2EDFC' }]}>
          <Text style={styles.offerTitle}>Upto 30% off on Packers & Movers</Text>
          <Text style={styles.offerSubtitle}>House Shifting</Text>
          <TouchableOpacity style={styles.offerButton}>
            <Text style={styles.offerButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color:'#444343',
  },
  offerContainer: {
    paddingHorizontal: 10,
  },
  offerCard: {
    width: Dimensions.get('window').width - 60,
    marginHorizontal: 10,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  offerSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  offerButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  offerButtonText: {
    fontSize: 14,
    color: '#008080',
  },
});

export default ServiceOffer;

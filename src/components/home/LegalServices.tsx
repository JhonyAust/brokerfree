import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface LegalServiceItem {
  icon: string;
  title: string;
}

const LegalServices = () => {
  const data: LegalServiceItem[] = [
    { icon: 'gavel', title: 'Legal Consultation' },
    { icon: 'file', title: 'Contract Review' },
    { icon: 'balance-scale', title: 'Dispute Resolution' },
    { icon: 'building', title: 'Property Protection' },
  ];

  const onCardPress = (title: string) => {
    console.log(`Card pressed: ${title}`);
    // Handle button press logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Legal Services</Text>
      <View style={styles.cardsContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => onCardPress(item.title)}
          >
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={30} color="#666BB1" />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D3E3E',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    width: '25%', // Adjust width to fit four cards in a row
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EAE9F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight:'semibold',
    color: '#000',
    textAlign: 'center',
  },
});

export default LegalServices;

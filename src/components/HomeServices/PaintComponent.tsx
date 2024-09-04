import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface PaintingServiceItem {
  icon: string;
  title: string;
}

const PaintComponent = () => {
  const data: PaintingServiceItem[] = [
    { icon: 'https://img.icons8.com/cute-clipart/100/apple-home.png', title: 'Interior' },
    { icon: 'https://img.icons8.com/color/96/painting-a-wall.png', title: 'Exterior' },
    { icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/external-waterproof-vacation-planning-cycling-tour-flaticons-lineal-color-flat-icons-2.png', title: 'Water Proofing' },
    { icon: 'https://img.icons8.com/bubbles/100/roller-brush.png', title: 'Rental Painting' },
  ];

  const onCardPress = (title: string) => {
    console.log(`Card pressed: ${title}`);
    // Handle button press logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Painting Services</Text>
      <View style={styles.cardsContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => onCardPress(item.title)}
          >
            <View style={styles.iconContainer}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
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
    width: '25%',
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
  icon: {
    width: 40,  // Set the fixed width
    height: 40, // Set the fixed height
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'semibold',
    color: '#000',
    textAlign: 'center',
  },
});

export default PaintComponent;

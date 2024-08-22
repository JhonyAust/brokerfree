import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

interface PlanItem {
  icon: string;
  subtitle: string;
}

const windowDimensions = Dimensions.get('window');
const width = windowDimensions.width;

const NRB = () => {
    const data: PlanItem[] = [
        { icon: '☎️', subtitle: '24/7 Property Consultation' },
        { icon: '⚖️', subtitle: 'Exclusive Legal Assistance' },
        { icon: '👤', subtitle: 'Personalized Property Guidance' },
        { icon: '🌍', subtitle: 'Global Reach, Local Expertise' },
        { icon: '➡️', subtitle: 'Explore More' }, // Button icon
      ];

  const onCardPress = (title: string) => {
    console.log(`Card pressed: ${title}`);
    // Handle button press logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BROKERFREE for NRBs</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => onCardPress(item.subtitle)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#EAE9F5',
    marginVertical: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 3,
    width: width * 0.6,
    padding: 15,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D3E3E',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});

export default NRB;

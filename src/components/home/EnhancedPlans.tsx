import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PlanItem {
  icon?: string;
  subtitle?: string;
}

const windowDimensions = Dimensions.get('window');
const width = windowDimensions.width;

const EnhancedPlans = () => {
    const data: PlanItem[] = [
        { icon: 'user', subtitle: 'Expert Guidance, Exceptional Results' },
        { icon: 'lock', subtitle: 'Unlock Exclusive Property Deals' },
        { icon: 'bullhorn', subtitle: 'Priority Access to Top Listings' },
        { icon: 'tags', subtitle: 'Exclusive Deals, Unbeatable Prices' },
        { icon: 'angle-right', subtitle: 'Explore More' },
      ];

  const onCardPress = () => {
    console.log('Last card pressed');
    // Handle button press logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Enhanced Plans</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {data.map((item, index) => (
          index !== 4 ? (
            <View key={index} style={styles.card}>
              <View style={styles.upperSection}>
                <View style={styles.iconContainer}>
                  <Icon name={item.icon || 'star'} size={40} color="#666BB1" />
                </View>
              </View>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          ) : (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={onCardPress}
            >
              <View style={styles.upperSection}>
                <View style={styles.iconContainer2}>
                  <Icon name={item.icon || 'star'} size={40} color="#fff" />
                </View>
              </View>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          )
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#EAE9F5',
    marginVertical:4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 3,
    width: width * 0.6,
  },
  upperSection: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginTop:20,
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#F6F9FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer2: {
    marginTop:20,
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: '#666BB1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    padding:10,
    marginBottom:20,
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

export default EnhancedPlans;

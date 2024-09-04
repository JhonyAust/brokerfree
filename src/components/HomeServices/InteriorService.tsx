import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface PlanItem {
  icon?: string;
  subtitle?: string;
}

const windowDimensions = Dimensions.get('window');
const width = windowDimensions.width;

const InteriorService = () => {
    const data: PlanItem[] = [
        { icon: 'https://img.icons8.com/external-flaticons-flat-flat-icons/50/external-floor-plan-award-events-flaticons-flat-flat-icons.png', subtitle: 'Space Planning' },
        { icon: 'https://img.icons8.com/bubbles/50/rgb-circle-2.png', subtitle: 'Color Scheme and Materials' },
        { icon: 'https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/50/external-lighting-interior-xnimrodx-lineal-gradient-xnimrodx.png', subtitle: 'Lighting Design' },
        { icon: 'https://img.icons8.com/external-microdots-premium-microdot-graphic/50/external-interior-interior-homedecor-vol1-microdots-premium-microdot-graphic-5.png', subtitle: 'Furniture and Accessories' },
        { icon: 'angle-right', subtitle: 'Explore More' },
      ];

  const onCardPress = () => {
    console.log('Last card pressed');
    // Handle button press logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home Interior</Text>
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
                  <Image source={{ uri: item.icon }} style={styles.icon} />
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
                  <Icon name={item.icon || 'star'} size={40} color="#000" />
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
    backgroundColor: '#EDE7DD',
    marginVertical: 4,
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
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#F6F9FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer2: {
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: '#F9E6C6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
    fontWeight:'bold',
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

export default InteriorService;

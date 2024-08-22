import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';  // Ensure you have installed react-native-vector-icons
import { RootStackParamList } from '../../../navigation/types';
// Define navigation prop type
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Box component to handle both emoji and FontAwesome icons
const Box = ({
  icon,
  title,
  size,
  iconType = 'emoji'  // Default to 'emoji' if not provided
}: {
  icon: string;
  title: string;
  size?: number;
  iconType?: 'emoji' | 'fontawesome';  // Optional prop to specify icon type
}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.box}>
      <View style={styles.iconContainer}>
        {iconType === 'fontawesome' ? (
          <Icon name={icon} size={size || 32} color="#000" />  // FontAwesome icon
        ) : (
          <Text style={[styles.icon, size ? { fontSize: size } : null]}>{icon}</Text>  // Emoji
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const Services = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      {/* Top header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services for you</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.seeAllContainer}>
          <Text style={styles.seeAll}>See All</Text>
          <Icon name="angle-right" size={20} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      {/* Boxes */}
      <View style={styles.grid}>
        <Box icon="🏢" title="New Projects" size={40} />
        <Box icon="📜" title="Sale Agreement" />
        <Box icon="🏠" title="Home Loan" />
        <Box icon="⚖️" title="Legal Services" />
        <Box icon="gift" title="Refer and Earn" iconType="fontawesome" />
        <Box icon="🖼️" title="Home Interiors" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop:6,
    marginBottom:6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#3D3E3E',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Align items to the start to avoid gaps
  },
  box: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 24, // Increase padding inside the box
    width: '28%', // Adjust width to maintain spacing with larger padding
    marginBottom: 20, // Increase spacing between rows
    marginRight: '4%', // Increase spacing between boxes in the same row
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 8,
  },
  icon: {
    fontSize: 32,
    color: '#000000',
  },
  title: {
    fontSize: 12, // Change font size here
    fontWeight: '600',
    color: '#333333', // Change title color here
    textAlign: 'center',
  },
});

export default Services;

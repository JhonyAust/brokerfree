import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type ServiceComponentNavigationProp = StackNavigationProp<RootStackParamList, 'PaintServices'>;

const ServiceComponent = () => {
  const [showMoreIcons, setShowMoreIcons] = useState(false);
  const navigation = useNavigation<ServiceComponentNavigationProp>();
  const screenWidth = Dimensions.get('window').width;
  const iconData = [
    { icon: <MaterialCommunityIcons name="air-conditioner" size={26} color="#666CB2" />, title: "Air Conditioning", route: 'AirConditioning' },
    { icon: <FontAwesome name="paint-brush" size={26} color="#666CB2" />, title: "Painting Services", route: 'PaintServices' },
    { icon: <FontAwesome name="truck" size={26} color="#666CB2" />, title: "Moving Services", route: 'MovingServices' },
    { icon: <FontAwesome name="home" size={26} color="#666CB2" />, title: "Home Renovation", route: 'HomeRenovation' },
    { icon: <FontAwesome name="user" size={26} color="#666CB2" />, title: "Cleaning Services", route: 'CleaningServices' },
    { icon: <FontAwesome name="calendar" size={26} color="#666CB2" />, title: "Appointment Scheduling", route: 'AppointmentScheduling' },
    { icon: <MaterialCommunityIcons name="tools" size={26} color="#666CB2" />, title: "Repair Services", route: 'RepairServices' },
    { icon: <MaterialCommunityIcons name="lightning-bolt" size={26} color="#666CB2" />, title: "Electrician Services", route: 'ElectricianServices' },
    { icon: <MaterialCommunityIcons name="lock" size={26} color="#666CB2" />, title: "Security Services", route: 'SecurityServices' },
  ];

  const initialDisplayCount = 3; // Show 3 icons initially
  const displayedIcons = showMoreIcons ? iconData : iconData.slice(0, initialDisplayCount);

  const toggleShowMoreIcons = () => {
    setShowMoreIcons(!showMoreIcons);
  };

  const handleIconPress = (route: string) => {
    if(route === 'PaintServices') {
      navigation.navigate(route as any);
    } else {
      console.log("Route is not valid");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={require('../../assets/p1.jpg')} style={styles.image} />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageText}>Painting Service</Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.iconGrid}>
        {displayedIcons.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleIconPress(item.route)} style={styles.iconWrapper}>
            <View style={styles.iconInnerWrapper}>
              {item.icon}
            </View>
            <Text style={styles.iconTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}

        {/* Show More / Less Button */}
        {iconData.length > initialDisplayCount && (
        <TouchableOpacity
            onPress={toggleShowMoreIcons}
            style={styles.showMoreLessButton}
        >
            
            <Text style={styles.showMoreLessText}>
            {showMoreIcons ? 'Show Less' : 'Show More'}
            </Text>
            <Icon 
            name={showMoreIcons ? 'chevron-up' : 'chevron-down'} 
            size={26} 
            color="#fff" 
            />
        </TouchableOpacity>
)}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F4FC',
    padding: 16,
  },
  imageWrapper: {
    width: '100%', // Full width
    height: 180, // Adjust height as needed
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative', // To position the overlay absolutely
    marginBottom: 20, // Space below the image
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageText: {
    color: '#fff',
    fontSize: 12,
    marginRight:8,
  },
  bookNowButton: {
    backgroundColor: '#666CB2',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  bookNowText: {
    color: '#fff',
    fontSize: 12,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: '30%',
    marginVertical: 10,
    alignItems: 'center',
  },
  iconInnerWrapper: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginBottom: 8,
  },
  iconTitle: {
    fontSize: 10,
    textAlign: 'center',
  },
  showMoreLessButton: {
    width: '100%',
    backgroundColor: '#009587',
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 4,
    flexDirection: 'row', // Align text and icon in a row
    justifyContent: 'center', // Center content horizontally
  },
  showMoreLessText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8, // Add some space between the icon and text
  },
  
});

export default ServiceComponent;

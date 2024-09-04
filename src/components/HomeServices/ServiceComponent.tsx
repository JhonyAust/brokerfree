import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
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
  const [searchText, setSearchText] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const texts = ['Search for something...', 'Explore new services...', 'Find what you need...'];
  const typingSpeed = 100; // milliseconds
  const pauseBetweenTexts = 1500; // milliseconds

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeText = () => {
      const currentText = texts[textIndex];
      if (charIndex < currentText.length) {
        setPlaceholderText(currentText.substring(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        // Pause before starting the next text
        timeoutId = setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          setPlaceholderText(''); // Clear the placeholder text
          typeText();
        }, pauseBetweenTexts);
      }
    };

    typeText();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  

  const screenWidth = Dimensions.get('window').width;

  const iconData = [
    { icon: <MaterialCommunityIcons name="air-conditioner" size={30} color="#666CB2" />, title: "Air Conditioning", route: 'AirConditioning' },
    { icon: <FontAwesome name="paint-brush" size={30} color="#666CB2" />, title: "Painting Services", route: 'PaintServices' },
    { icon: <FontAwesome name="truck" size={30} color="#666CB2" />, title: "Moving Services", route: 'MovingServices' },
    { icon: <FontAwesome name="home" size={30} color="#666CB2" />, title: "Home Renovation", route: 'HomeRenovation' },
    { icon: <FontAwesome name="user" size={30} color="#666CB2" />, title: "Cleaning Services", route: 'CleaningServices' },
    { icon: <FontAwesome name="calendar" size={30} color="#666CB2" />, title: "Appointment Scheduling", route: 'AppointmentScheduling' },
    { icon: <MaterialCommunityIcons name="tools" size={30} color="#666CB2" />, title: "Repair Services", route: 'RepairServices' },
    { icon: <MaterialCommunityIcons name="lightning-bolt" size={30} color="#666CB2" />, title: "Electrician Services", route: 'ElectricianServices' },
    { icon: <MaterialCommunityIcons name="lock" size={30} color="#666CB2" />, title: "Security Services", route: 'SecurityServices' },
  ];

  const initialDisplayCount = 5;
  const displayedIcons = showMoreIcons ? iconData : iconData.slice(0, initialDisplayCount);

  const toggleShowMoreIcons = () => {
    setShowMoreIcons(!showMoreIcons);
  };

  const handleIconPress = (route: string) => {
    
    if(route==='PaintServices')
        {
            navigation.navigate(route as any);

        }
        else{
            console.log("Route is not valid");
        }
    
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={placeholderText}
          value={searchText}
          style={styles.searchInput}
          onChangeText={(text) => setSearchText(text)}
        />
        <Icon name="search" size={24} style={styles.searchIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.iconGrid}>
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
            style={[styles.iconWrapper, styles.showMoreLessButton]}
          >
            <View style={styles.iconInnerWrapper}>
              <Icon name={showMoreIcons ? 'chevron-up' : 'chevron-down'} size={30} color="#666CB2" />
            </View>
            <Text style={styles.iconTitle}>
              {showMoreIcons ? 'Show Less' : 'Show More'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <ScrollView 
        horizontal 
         
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.imageContainer}
      >
  <View style={styles.imageWrapper}>
    <Image source={require('../../assets/p1.jpg')} style={styles.image} />
    <View style={styles.imageOverlay}>
      <Text style={styles.imageText}>Painting Service</Text>
      <TouchableOpacity style={styles.bookNowButton}>
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.imageWrapper}>
    <Image source={require('../../assets/p2.jpg')} style={styles.image} />
    <View style={styles.imageOverlay}>
      <Text style={styles.imageText}>Cleaning Service</Text>
      <TouchableOpacity style={styles.bookNowButton}>
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
</ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4FC',
      padding: 16,
    },
    searchInput: {
      padding: 12,
      backgroundColor: '#fff',
      borderRadius: 8,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 16,
    },
    searchIcon: {
      position: 'absolute',
      right: 24,
      top: 24,
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
      fontSize: 12,
      textAlign: 'center',
    },
    showMoreLessButton: {},
    imageContainer: {
      marginTop:20,
    },
    imageWrapper: {
      width: Dimensions.get('window').width - 40, // Set the wrapper to be slightly less than the full width of the screen
      height: 180, // Adjust height as needed
      marginHorizontal: 10, // Add margin between images
      borderRadius: 8, // Round the corners of the wrapper
      overflow: 'hidden', // Ensure content stays within rounded corners
    },
    image: {
      width: '100%',
      height: '100%',
    },
    imageOverlay: {
        position: 'absolute',
        top: 120,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',  // Align items in a row
        justifyContent: 'space-between',  // Spread items to left and right
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 8,
      },
      
    imageText: {
      color: '#fff',
      fontSize: 14,
      marginBottom: 8,
    },
    bookNowButton: {
      backgroundColor: '#666CB2',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 4,
    },
    bookNowText: {
      color: '#fff',
      fontSize: 12,
    },
  });
  

export default ServiceComponent;

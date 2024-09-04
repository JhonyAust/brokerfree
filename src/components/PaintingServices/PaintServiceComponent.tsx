import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const PaintServiceComponent = () => {
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

  

  const iconData = [
   
    { icon: 'https://img.icons8.com/cute-clipart/100/apple-home.png', title: 'Interior', route: 'Interior'  },
    { icon: 'https://img.icons8.com/color/96/painting-a-wall.png', title: 'Exterior', route: 'Exterior'  },
    { icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/external-waterproof-vacation-planning-cycling-tour-flaticons-lineal-color-flat-icons-2.png', title: 'Water Proofing', route: 'WaterProofing'  },
    { icon: 'https://img.icons8.com/bubbles/100/roller-brush.png', title: 'Rental Painting', route: 'RentalPaint'  },
  
  ];
 

  const handleIconPress = (route: string) => {
    
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
      <View>
      <Text style={styles.title}>
      Best Home Painting Services in Bangladesh
    </Text>
      </View>

      <ScrollView 
          horizontal 
          
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.imageContainer}
        >
    <View style={styles.imageWrapper}>
      <Image source={require('../../assets/paint2.jpg')} style={styles.image} />
      <View style={styles.imageOverlay}>
        <Text style={styles.imageText}>Painting Service</Text>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.imageWrapper}>
      <Image source={require('../../assets/paint3.jpg')} style={styles.image} />
      <View style={styles.imageOverlay}>
        <Text style={styles.imageText}>Cleaning Service</Text>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>


      <ScrollView contentContainerStyle={styles.iconGrid}>
        {iconData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleIconPress(item.route)} style={styles.iconWrapper}>
            <View style={styles.iconInnerWrapper}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
            </View>
            <Text style={styles.iconTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}

        
      </ScrollView>

   

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4FC',
      padding: 16,  // Same padding from all sides
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
    title: {
      fontSize: 24, 
      color: '#4B5563', 
      fontWeight: 'bold', 
      padding: 12,
    },
    iconGrid: {
      marginVertical:8,
      flexDirection: 'row',
      justifyContent: 'space-between', // Distribute icons evenly
    },
    iconWrapper: {
      flex: 1,  // Ensure all icons take equal space
      alignItems: 'center',
      marginVertical: 10,
      paddingHorizontal: 8,  // Adjust padding to control spacing
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
    icon: {
      width: 40,  
      height: 40,
      resizeMode: 'contain',
    },
    imageContainer: {
      marginTop: 20,
    },
    imageWrapper: {
      width: Dimensions.get('window').width - 40,
      height: 180,
      marginHorizontal: 10,
      borderRadius: 8,
      overflow: 'hidden',
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
      flexDirection: 'row',
      justifyContent: 'space-between',
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
  
  export default PaintServiceComponent;
  

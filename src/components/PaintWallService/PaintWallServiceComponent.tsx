import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
type PaintServiceComponentNavigationProp = StackNavigationProp<RootStackParamList, 'MyPaintCart'>;

const PaintServiceComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const texts = ['Search for something...', 'Explore new services...', 'Find what you need...'];
  const typingSpeed = 100; // milliseconds
  const pauseBetweenTexts = 1500; // milliseconds
  const { totalItems } = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation<PaintServiceComponentNavigationProp>();

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
        timeoutId = setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          setPlaceholderText('');
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
  const handleCart = () => {
    navigation.navigate('MyPaintCart');  
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchCartContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder={placeholderText}
            value={searchText}
            style={styles.searchInput}
            onChangeText={(text) => setSearchText(text)}
          />
          <Icon name="search" size={24} style={styles.searchIcon} />
        </View>

        <TouchableOpacity style={styles.cartButton} onPress={handleCart}>
          <Icon name="cart-outline" size={28} />
          {totalItems > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{totalItems}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Best Home Painting Services in Bangladesh</Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FC',
    padding: 16,
  },
  searchCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // To align the cart icon to the right of the search bar
    marginBottom: 16,
  },
  searchInputContainer: {
    flex: 1,
    position: 'relative',
  },
  searchInput: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
    color: '#888',
  },
  cartButton: {
    marginLeft: 16,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
  },
  title: {
    fontSize: 24,
    color: '#4B5563',
    fontWeight: 'bold',
    padding: 12,
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

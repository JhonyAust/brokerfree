import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { Platform } from 'react-native';

type UploadImagesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UploadImages'>;
type UploadImagesScreenRouteProp = RouteProp<RootStackParamList, 'UploadImages'>;

interface Props {
  navigation: UploadImagesScreenNavigationProp;
  route: UploadImagesScreenRouteProp;
}

const UploadImages: React.FC<Props> = ({ navigation, route }) => {
  const { address, saleOrRent, name, description, price, offerPrice, discountPrice, furnished, parking, bathrooms, bedrooms } = route.params;
  const [images, setImages] = useState<{ uri: string, url: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { currentUser } = useSelector((state: RootState) => state.user);

  const handleImageUpload = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        setError('ImagePicker Error: ' + response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        if (asset.uri) {
          const { uri } = asset;
          const filename = uri.substring(uri.lastIndexOf('/') + 1);
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

          try {
            const storageRef = storage().ref(filename);
            await storageRef.putFile(uploadUri);
            const downloadURL = await storageRef.getDownloadURL();
            setImages((prev) => [...prev, { uri, url: downloadURL }]);
          } catch (uploadError) {
            console.error('Upload failed:', uploadError);
            setError('Upload failed: ' + (uploadError as Error).message);
          }
        } else {
          setError('No image URI found');
        }
      } else {
        setError('No assets found');
      }
    });
  };

  const handleCreateListing = async () => {
    try {
      const listingData = {
        address,
        type: saleOrRent,
        name,
        description,
        regularPrice: price,
        discountPrice,
        offer: offerPrice !== undefined,
        imageUrls: images.map(image => image.url),
        parking,
        furnished,
        bathrooms,
        bedrooms,
        userRef: currentUser._id,
      };
      const response = await fetch('http://10.0.2.2:3000/api/listing/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listingData),
      });
      const result = await response.json();
      console.log('Listing created:', result);
      navigation.navigate('ListingConfirmation');
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Add Photos Section */}
      <View style={styles.addPhotosContainer}>
        <Icon name="camera" size={24} color="#000" style={styles.icon} />
        <Text style={styles.title}>Add Photos</Text>
        <Text style={styles.subtitle}>Upload images to showcase your property</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleImageUpload}>
          <Text style={styles.addButtonText}>Add Photos</Text>
        </TouchableOpacity>
      </View>

      {/* Show Photos Section */}
      <View style={styles.showPhotosContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image.uri }} style={styles.image} />
        ))}
      </View>

      {/* OR Section */}
      <View style={styles.orSection}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>

      {/* WhatsApp and Email Section */}
      <View style={styles.contactMethodsContainer}>
        <TouchableOpacity style={styles.contactBox}>
          <Icon name="whatsapp" size={24} color="#25D366" />
          <Text style={styles.contactText}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactBox}>
          <Icon name="envelope" size={24} color="#007A6F" />
          <Text style={styles.contactText}>Email</Text>
        </TouchableOpacity>
      </View>

      {/* Create Listing Button */}
      <TouchableOpacity
        style={[styles.createListingButton, images.length === 0 && styles.disabledButton]}
        onPress={handleCreateListing}
        disabled={images.length === 0}
      >
        <Text style={styles.createListingButtonText}>Create Listing</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  addPhotosContainer: {
    backgroundColor: '#FAFAFA',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    textAlign:'center',
    alignItems:'center',
  },
  icon: {
    margin: 8,
    color:'grey'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#007A6F',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  showPhotosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  orSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: '#777',
  },
  contactMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  contactBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  contactText: {
    marginTop: 8,
    fontSize: 16,
    color: '#000',
  },
  createListingButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  createListingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default UploadImages;

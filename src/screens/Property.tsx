import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Platform } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const Property: React.FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo', // Ensure this is a valid value
      quality: 0.8, // Adjust based on the library's expectations
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
            setImageUri(uri);
            setImageUrl(downloadURL);
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

  return (
    <View style={styles.container}>
      <Button title="Upload Image" onPress={handleImageUpload} />
      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <Text style={styles.text}>Uploaded Image URL:</Text>
          <Text style={styles.text}>{imageUrl}</Text>
        </>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 16,
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default Property;

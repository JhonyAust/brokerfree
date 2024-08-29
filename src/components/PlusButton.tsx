import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = BottomTabNavigationProp<RootStackParamList, 'Plus'>;

const PlusButton: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Address'); // Now TypeScript should understand this
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Icon name="add" size={40} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#FD3752',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
   
  },
});

export default PlusButton;

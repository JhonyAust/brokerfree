import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import OneWall from './OneWall';
import TwoWall from './TwoWall';
type PaintCardComponentNavigationProp = StackNavigationProp<RootStackParamList, 'AddressSchedule'>;


const { height } = Dimensions.get('window');
interface CardData {
    id: number;
    picture: any; 
    title: string;
    originalCost:string;
    newCost:string;
    subtitle: string[];
    buttonName: string;
  }

const PaintCardComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedADD, setSelectedADD] = useState(0);
  const navigation = useNavigation<PaintCardComponentNavigationProp>();
  const handleOpenPopup = (cardID:number) => {
    setSelectedADD(cardID);
    setModalVisible(true);
  };

  const handleClosePopup = () => {
    setSelectedADD(0);
    setModalVisible(false);
  };
  const handleOutsidePress = () => {
    handleClosePopup();
  };
  const handleEstimatePress = () => {
    navigation.navigate('AddressSchedule');  
  };
  const handleCheckPrice = () => {
    console.log("Check Price button pressed!");
    //navigation.navigate('AddressSchedule');  
  };
  const cardsData : CardData[] = [
    {
      id: 0,
      picture: require('../../assets/p1.jpg'),
      title: '1 Wall', 
    originalCost: '৳ 3883',
    newCost: '৳ 2500',
    subtitle: [
      'Available in 2 options: with and without primer',
      'Repair flaking off or curling up of paint',
      'Filling of cracks and gaps in wall'
    ],
    buttonName: 'ADD', 
    },
    {
      id: 1,
      picture: require('../../assets/paint2.jpg'),
      title: '2 Walls',
    originalCost: '৳ 6700',
    newCost: '৳ 4500',
    subtitle: [
      'Available in 2 options: with and without primer',
      'Repair flaking off or curling up of paint',
      'Filling of cracks and gaps in wall'
    ],
    buttonName: 'ADD', 
    },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Painting Wall Services</Text>
      <ScrollView>
        {cardsData.map((card) => (
          <View key={card.id} style={styles.card}>
          <ImageBackground source={card.picture} style={styles.image}>
            <View style={styles.overlay}>
              <Text style={styles.title}>{card.title}</Text>
            </View>
          </ImageBackground>
          {/* Container for title and cost info */}
          <View style={styles.titleAndCostContainer}>
            <Text style={styles.title}>{card.title}</Text>
        
            {/* Cost Info */}
            <View style={styles.costContainer}>
              <Text style={styles.costText}>
                <Text style={styles.textGray}>Starts from </Text>
                <Text style={styles.originalCost}>
                  <Text style={styles.textGray}>৳</Text>{card.originalCost}
                </Text>
                <Text style={styles.newCost}> ৳{card.newCost}</Text>
              </Text>
            </View>
          </View>
        
          <View style={styles.textContainer}>
            {card.subtitle.map((line, i) => (
              <Text key={i} style={styles.subtitle}>
                • {line}
              </Text>
            ))}
          </View>
        
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.getEstimateButton} onPress={() => handleOpenPopup(card.id)}>
              <Text style={styles.getEstimateButtonText}>{card.buttonName}</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClosePopup}
      >
         <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.modalBackdrop} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
             {selectedADD==0 ? <OneWall closeModal={handleClosePopup} /> : <TwoWall closeModal={handleClosePopup}/>}
             
            </ScrollView>

            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 4,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    marginBottom: 26,
    color: 'gray',
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4, // For Android shadow
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  
  textContainer: {
    padding: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  getEstimateButton: {
    borderWidth: 1,
    borderColor: '#009587',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: '#E6F5F3',
  },
  getEstimateButtonText: {
    color: '#009587',
    fontSize: 14,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalContent: {
    height: height * 0.8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  titleAndCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  costContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  costText: {
    fontSize: 14,
    color: '#333',
  },
  textGray: {
    color: '#888',
    fontSize: 12,
  },
  originalCost: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 12,
  },
  newCost: {
    color: '#2ecc71',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: '#009587',
    marginVertical: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default PaintCardComponent;

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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
type PaintCardComponentNavigationProp = StackNavigationProp<RootStackParamList, 'AddressSchedule'>;


const { height } = Dimensions.get('window');
interface CardData {
    id: string;
    picture: any; // Change `any` to `ImageSourcePropType` if you prefer stricter typing
    title: string;
    subtitle: string[];
    description: string;
    buttonName2: string;
  }

const PaintCardComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const navigation = useNavigation<PaintCardComponentNavigationProp>();
  const handleOpenPopup = (card: CardData) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleClosePopup = () => {
    setModalVisible(false);
    setSelectedCard(null);
  };
  const handleOutsidePress = () => {
    handleClosePopup();
  };
  const handleEstimatePress = () => {
    navigation.navigate('AddressSchedule');  
  };
  const handleCheckPrice = () => {
    console.log("Check Price button pressed!");
    navigation.navigate('PaintWallServices');  
  };
  const cardsData : CardData[] = [
    {
      id: '0',
      picture: require('../../assets/p1.jpg'),
      title: 'Interior Painting',
      subtitle: [
        'Professional Painters for Perfect Finish',
        'On-site visit for Painting Estimate',
        '1-Year Service Warranty',
      ],
      description:
        "Refreshing your home's paint and interior decor is important from time to time to make them more visually appealing and extend their lifespan.",
      buttonName2: 'GET FREE ESTIMATE',
    },
    {
      id: '1',
      picture: require('../../assets/paint.jpg'),
      title: 'Exterior Painting',
      subtitle: [
        'Transform the home\'s exterior',
        'Prevent and repair cracks on walls',
        'Protect your house from harsh weather elements',
      ],
      description:
        "Give your home's exterior a fresh new look with our professional painting services.",
      buttonName2: 'GET FREE ESTIMATE',
    },
    {
      id: '2',
      picture: require('../../assets/paint2.jpg'),
      title: 'Water Proofing',
      subtitle: [
        'Protect your house from mould',
        'Get seepage free terrace',
        'On site consultation',
      ],
      description:
        "Ensure your house stays dry and safe with our expert waterproofing services.",
      buttonName2: 'GET FREE ESTIMATE',
    },
    {
      id: '3',
      picture: require('../../assets/paint.jpg'),
      title: 'One Wall Painting',
      subtitle: [
        'Quick drying and Complete coverage',
        'Hassle-free 1 day service',
        'Starting at only 2599/-',
      ],
      description:
        "Revamp a single wall in your home with our quick and affordable one wall painting service.",
      buttonName2: 'CHECK PRICES',
    },
  ];


  const flowChartItems = [
    {
      title: "Book Home Inspection",
      subtitle: "Tell us preferred time to book",
      icon: 'home',
    },
    {
      title: "Measure & Estimate",
      subtitle: "Get accurate quotes with laser measurements",
      icon: 'pencil',
    },
    {
      title: "Project Initiation",
      subtitle: "Guaranteed on time project initiation and completion",
      icon: 'clock-o',
    },
    {
      title: "Cleaning & Quality Check",
      subtitle: "Post paint cleanup and quality check",
      icon: 'check-circle',
    },
  ];
  const data = [
    { service: "Genuine Branded Paints", brokerFree: "✓", localVendor: "X" },
    { service: "End to End Managed", brokerFree: "✓", localVendor: "X" },
    { service: "Wall Health Checkup", brokerFree: "✓", localVendor: "X" },
    { service: "Material + Labor Cost Included", brokerFree: "✓", localVendor: "X" },
    { service: "Professionally Trained Painters", brokerFree: "✓", localVendor: "X" },
    { service: "Furniture and Electrical Outlets Masking", brokerFree: "✓", localVendor: "X" },
    { service: "Post Painting Cleanup", brokerFree: "✓", localVendor: "X" },
    { service: "On-time Completion", brokerFree: "✓", localVendor: "X" },
    { service: "Free Insurance for damages of upto Bdt. 10,000", brokerFree: "✓", localVendor: "X" },
    { service: "1 Year Service Warranty against chipping and bubbling", brokerFree: "✓", localVendor: "X" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Painting choices for your home</Text>
      <ScrollView>
        {cardsData.map((card) => (
          <View key={card.id} style={styles.card}>
            <Image source={card.picture} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{card.title}</Text>
            </View>
            <View style={styles.textContainer}>
              {card.subtitle.map((line, i) => (
                <Text key={i} style={styles.subtitle}>
                  • {line}
                </Text>
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.showMoreButton}
                onPress={() => handleOpenPopup(card)}
              >
                <Text style={styles.showMoreButtonText}>See All</Text>
                <Icon name="angle-right" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.getEstimateButton} 
                onPress={card.buttonName2 === 'CHECK PRICES' ? handleCheckPrice : handleEstimatePress}
              >
                <Text style={styles.getEstimateButtonText}>
                  {card.buttonName2}
                </Text>
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
            {selectedCard && (
                <>
                  <Image source={selectedCard.picture} style={styles.modalImage} />
                  <Text style={styles.modalTitle}>{selectedCard.title}</Text>
                  <Text style={styles.modalDescription}>{selectedCard.description}</Text>
                  {/* The rest of your modal content goes here */}
                </>
              )}

              <Text style={styles.sectionTitle}>How painting service works</Text>

              {flowChartItems.map(({ title, subtitle, icon }, index) => (
                <View key={index} style={styles.flowItem}>
                  <View style={styles.iconborder}>
                  <Icon name={icon} size={24} color="black" style={styles.flowIcon} />
                  {index < 3 && <View style={styles.dottedBorder}></View>}
                  </View>
                  <View style={index < 3 ? styles.flowText2 : styles.flowText}>
                    <Text style={styles.flowTitle}>{title}</Text>
                    <Text style={styles.flowSubtitle}>{subtitle}</Text>
                  </View>
                  
                </View>
              ))}

              <View style={styles.estimateSection}>
                <View style={styles.estimateTextContainer}>
                  <Text style={styles.estimateTitle}>Get Estimate to know Cost</Text>
                  <Text style={styles.estimateSubtitle}>Top Quality Paints</Text>
                  <Text style={styles.estimateSubtitle}>Inspection with Expert Consultation</Text>
                  <Text style={styles.estimateSubtitle}>Experienced and Trained Partners</Text>
                </View>
                <Image 
                  source={require('../../assets/paint.jpg')} 
                  style={styles.estimateImage} 
                />
              </View>

            
              <View style={styles.container2}>
                <Text style={styles.heading2}>Why BROKERFREE?</Text>
                <View style={styles.tableContainer}>
                  <View style={styles.tableHeader}>
                    <Text style={[styles.tableHeaderText, styles.tableCell2, styles.serviceHeader]}>
                      Services
                    </Text>
                    <Text style={[styles.tableHeaderText, styles.brokerFreeColumn2]}>
                      Brokerfree Promise
                    </Text>
                    <Text style={[styles.tableHeaderText, styles.tableCell2]}>Local Vendor</Text>
                  </View>
                  {data.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.tableRow,
                        index % 2 === 0 ? styles.evenRow : styles.oddRow,
                      ]}
                    >
                      <Text style={[styles.tableCell, styles.textLeft]}>{`\u2022 `}&nbsp;{item.service}</Text>
                      <Text style={[styles.tableCell, index === data.length - 1 ? styles.brokerFreeColumn3 : styles.brokerFreeColumn]}>{item.brokerFree}</Text>
                      <Text style={[styles.tableCell, styles.localVendor]}>{item.localVendor}</Text>
                    </View>
                  ))}
                </View>
              </View>

            </ScrollView>

            <TouchableOpacity 
                style={styles.actionButton}
                onPress={handleEstimatePress}
              >
                <Text style={styles.actionButtonText}>
                  {selectedCard?.buttonName2 || 'Close'}
                </Text>
              </TouchableOpacity>
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
    position: 'absolute',
    bottom: 172,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 140,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  showMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showMoreButtonText: {
    color: 'gray',
    fontSize: 16,
    marginRight: 8,
    fontWeight: 'bold',
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
  modalImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 16,
  },
  modalDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 8,
  },
  flowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  flowIcon: {
    marginRight: 12,
    padding: 8,
    backgroundColor: '#F6F6F6',
    borderRadius: 24,
  },
  flowText: {
    flex: 1,
    // paddingBottom:30,
  },
  flowText2: {
    flex: 1,
    paddingBottom:30,
  },
  flowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  flowSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  iconborder: {
    flexDirection: 'column', // This sets the layout direction to column (vertical)
    justifyContent: 'center', // This centers items vertically
    alignItems: 'center',     // This centers items horizontally
  },
  dottedBorder: {
    borderLeftWidth: 2,
    borderColor: 'black',
    borderStyle: 'dotted',
    height: 26, 
    alignSelf: 'center',  // Center the dotted line below the icon
    marginTop: 8,         // Adjust this margin to control the space between the icon and the dotted line
  },
  estimateSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    padding:12,
  },
  estimateTextContainer: {
    flex: 1,
  },
  estimateTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  estimateSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  estimateImage: {
    width: 120,
    height: 100,
  },
  closeButton: {
    textAlign: 'center',
    padding: 12,
    color: '#F44336',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container2: {
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  heading2: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  tableContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: '500',
    padding: 12,
    textAlign: 'center',
  },
  serviceHeader: {
    flex: 1, // Make the Services column wider
   
    
  },
  tableCell: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
    fontSize:10,
  },
  tableCell2: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
    color:'black',
   
  },
  brokerFreeColumn: {
    flex:1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#008080', // Green border
    color: '#008080', // Text color green
  },
  brokerFreeColumn2: {
    flex:1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#008080', // Green border
    color: '#008080', // Text color green
  },
  brokerFreeColumn3: {
    flex:1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth:1,
    borderColor: '#008080', // Green border
    color: '#008080', // Text color green
  },
  tableRow: {
    flexDirection: 'row',
  },
  textLeft: {
    textAlign: 'left',
  },
  brokerFree: {
    color: '#008080',
  },
  localVendor: {
    color: '#FF0000',
  },
  evenRow: {
    backgroundColor: '#fff',
  },
  oddRow: {
    backgroundColor: '#F5F5F5',
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

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Added Image import
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface PlanCardProps {
  plan: any;
  onSubscribe: (plan: any) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSubscribe }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.cardHeader, { backgroundColor: plan.bgcol }]}>
        <Text style={styles.cardTitle}>{plan.name}</Text>
        <View>
          <Text style={styles.price}>৳ {plan.price}</Text>
          <Text style={styles.oldPrice}>৳ {plan.oldPrice}</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.cardSubtitle, { color: plan.titlecol }]}>{plan.title}</Text>
        <View style={styles.iconTextContainer}>
          {/* Replaced FontAwesome5 with Image */}
          <Image 
            source={{ uri: 'https://img.icons8.com/bubbles/100/manager.png' }} 
            style={styles.iconImage} 
          />
          <View>
            <Text style={styles.boldText}>{plan.details[0]}</Text>
            {plan.details.slice(1).map((detail: string, index: number) => (
              <Text key={index} style={styles.detailItem}>- {detail}</Text>
            ))}
          </View>
        </View>

        {plan.benefits.map((benefit: any, index: number) => (
          <View key={index} style={styles.benefitItem}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#464646' }}>{benefit.title}</Text>
            {benefit.value ? (
            <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#464646' }}>{benefit.value}</Text>  // Show the value as text if benefit.value exists
            ) : benefit.available ? (
            <FontAwesome5 name="check" size={16} color="green" />  // Show check icon if benefit.available is true
            ) : (
            <FontAwesome5 name="times" size={16} color="red" />  // Show times icon if benefit.available is false
            )}

          </View>
        ))}

        <TouchableOpacity 
          style={[styles.subscribeButton, { backgroundColor: plan.bgcol }]}
          onPress={() => onSubscribe(plan)}
        >
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
    card: {
      width: '100%',
      marginBottom: 20,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    },
    cardHeader: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    oldPrice: {
      fontSize: 14,
      color: 'white',
      textDecorationLine: 'line-through',
    },
    cardContent: {
      padding: 15,
    },
    cardSubtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 10,
    },
    iconImage: {
      width: 80,
      height: 80,
      marginRight:6,
     
    },
    boldText: {
      fontWeight: 'bold',
      color: '#464646',
    },
    detailItem: {
      fontSize: 14,
      marginVertical: 2,
      paddingLeft: 6,
      flex: 1,
      flexWrap: 'wrap',
      // Use width to control the wrapping
      maxWidth: '90%', 
    },
    benefitItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    subscribeButton: {
      marginTop: 20,
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    subscribeText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

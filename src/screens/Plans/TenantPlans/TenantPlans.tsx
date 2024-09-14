import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { plans } from '../../../components/Plans/TenantPlans/plans';
import PlanCard from '../../../components/Plans/TenantPlans/PlanCard'; 
import { RootStackParamList } from '../../../navigation/types';
type TenantPlansProp = StackNavigationProp<RootStackParamList, 'CheckoutPlans'>;

const TenantPlans = () => {
  const navigation = useNavigation<TenantPlansProp>();

  const handleSubscribe = (plan: any) => {
    navigation.navigate('CheckoutPlans', { plan });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Choose a Plan and <Text style={styles.highlight}>SAVE THOUSANDS</Text> on brokerage.
        </Text>
        <Text style={styles.assistance}>
          For assistance call us at: <Text style={styles.phone}>+8801766679431</Text>
        </Text>
      </View>
      <View style={styles.grid}>
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} onSubscribe={handleSubscribe} />
        ))}
      </View>
    </ScrollView>
  );
};

export default TenantPlans;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highlight: {
    color: '#F25F5C', // Tailwind primary blue
  },
  assistance: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  phone: {
    color: '#F25F5C',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

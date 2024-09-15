import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SectionList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { plans } from '../../../components/Plans/SellerPlans/plans';

type SellerPlansProp = StackNavigationProp<RootStackParamList, 'CheckoutPlans'>;

const SellerPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1);
  const navigation = useNavigation<SellerPlansProp>();
  
  const handleSubscribe = (plan: any) => {
    navigation.navigate('CheckoutPlans', { plan });
  };
  
  const selectPlan = (id: number) => {
    setSelectedPlan(id === selectedPlan ? null : id);
  };

  const getSelectedPlan = () => {
    return plans.find((p) => p.id === selectedPlan);
  };

  const getSelectedPlanTitle = () => {
    const plan = plans.find((p) => p.id === selectedPlan);
    return plan ? plan.title : '';
  };

  const getSelectedGradientColors = () => {
    return selectedPlan ? ['#007A6F', '#06a892'] : ['#888888', '#aaaaaa'];
  };

  return (
    <View>
    <View style={styles.container}>
      {/* Replace ScrollView with SectionList */}
      <SectionList
        sections={[{ title: '', data: [''] }]} // Dummy data for sections
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => null} // No item rendering needed since we are rendering manually

        ListHeaderComponent={(
          <>
            {/* Upper Section with Cards and Gradient Background */}
            <LinearGradient
              colors={['#FEFEFE', '#E9E9E9']}
              style={styles.upperSectionGradient}
            >
              <View style={styles.header}>
                <Text style={styles.title}>
                  Choose a Plan and <Text style={styles.highlight}>SAVE THOUSANDS</Text> on brokerage.
                </Text>
                <Text style={styles.assistance}>
                  For assistance call us at: <Text style={styles.phone}>+8801766679431</Text>
                </Text>
              </View>

              <View style={styles.upperSection}>
                {plans.map((plan) => (
                  <TouchableOpacity
                    key={plan.id}
                    style={[styles.cardContainer, selectedPlan === plan.id && styles.cardSelected]}
                    onPress={() => selectPlan(plan.id)}
                  >
                    <LinearGradient
                      colors={
                        selectedPlan === plan.id
                          ? ['#007A6F', '#88fcee']
                          : ['#f0f0f0', '#ffffff']
                      }
                      style={styles.card}
                    >
                      <Text
                        style={[
                          styles.cardTitle,
                          selectedPlan === plan.id ? styles.selectedText : styles.unselectedText,
                        ]}
                      >
                        {plan.title}
                      </Text>

                      <View style={styles.cardFooter}>
                        <Text
                          style={[
                            styles.cardPrice,
                            selectedPlan === plan.id ? styles.selectedText : styles.unselectedText,
                          ]}
                        >
                          ৳ {plan.price}
                        </Text>
                        <View
                          style={
                            selectedPlan === plan.id
                              ? styles.roundButtonSelected
                              : styles.roundButton
                          }
                        >
                          {selectedPlan === plan.id && <Text style={styles.checkMark}>✔</Text>}
                        </View>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </View>
            </LinearGradient>

            {/* Lower Section: Plan Benefits */}
            <View style={styles.lowerSection}>
              <Text style={styles.benefitsTitle}>Benefits you will get:</Text>
              {selectedPlan !== null && (
                <FlatList
                  data={[
                    ...plans.find((plan) => plan.id === selectedPlan)?.activeBenefits!,
                    ...plans.find((plan) => plan.id === selectedPlan)?.disabledBenefits!,
                  ]}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => {
                    const isDisabled = plans
                      .find((plan) => plan.id === selectedPlan)
                      ?.disabledBenefits.includes(item);

                    return (
                      <View style={styles.benefitItem}>
                        <View
                          style={[
                            styles.benefitRoundButton,
                            isDisabled && styles.disabledRoundButton,
                          ]}
                        >
                          <Text
                            style={[
                              styles.benefitCheckMark,
                              isDisabled && styles.disabledCheckMark,
                            ]}
                          >
                            ✔
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.benefitText,
                            isDisabled && styles.disabledBenefitText,
                          ]}
                        >
                          {item}
                        </Text>
                      </View>
                    );
                  }}
                />
              )}
            </View>
          </>
        )}
      />
</View>
      {/* Button at the bottom */}
      <TouchableOpacity 
        style={styles.subscribeButton}
        onPress={() => {
          const plan = getSelectedPlan();
          if (plan) {
            handleSubscribe(plan); // Call the function with the selected plan
          }
        }}
      >
        <LinearGradient colors={getSelectedGradientColors()} style={styles.subscribeButtonGradient}>
          <Text style={styles.subscribeButtonText}>
            Subscribe to {getSelectedPlanTitle()} Plan
          </Text>
        </LinearGradient>
      </TouchableOpacity>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20, // Extra space to prevent overlap with the subscribe button
  },
  upperSectionGradient: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#334A5C',
  },
  highlight: {
    color: '#007A6F',
  },
  assistance: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  phone: {
    color: '#007A6F',
  },
  upperSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 16,
  },
  cardSelected: {
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 14,
  },
  card: {
    borderRadius: 14,
    padding: 16,
    justifyContent: 'space-between',
    height: 120,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
    
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roundButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButtonSelected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#007A6F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    color: '#fff',
    fontSize: 14,
  },
  selectedText: {
    color: '#fff',
  },
  unselectedText: {
    color: '#334A5C',
  },
  lowerSection: {
    padding: 16,
    marginBottom:80,
  },
  benefitsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#334A5C',
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 12,
  },
  benefitRoundButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007A6F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  disabledRoundButton: {
    backgroundColor: '#ccc',
  },
  benefitCheckMark: {
    color: '#fff',
    fontSize: 10,
  },
  disabledCheckMark: {
    color: '#888',
  },
  benefitText: {
    fontSize: 16,
    color: '#334A5C',
  },
  disabledBenefitText: {
    color: '#888',
  },
  subscribeButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -3 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 6, 
    elevation: 8,
  },
  subscribeButtonGradient: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SellerPlans;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FaqService = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const faqData = [
    {
      question: 'What is included in the painting service?',
      answer: 'Our painting service includes wall preparation, priming, and two coats of paint for a smooth finish.'
    },
    {
      question: 'How can I book a cleaning service?',
      answer: 'You can book a cleaning service through our app or website by selecting the date, time, and type of cleaning service you need.'
    },
    {
      question: 'Are your moving services insured?',
      answer: 'Yes, all our moving services are fully insured to protect your belongings during transit.'
    },
    {
      question: 'What areas do you serve for home renovation?',
      answer: 'We serve all major metropolitan areas and can provide services in other locations upon request.'
    },
    {
      question: 'How soon can I schedule an appointment?',
      answer: 'Appointments can be scheduled as early as the next business day, depending on availability.'
    },
    {
      question: 'What is the cost of electrician services?',
      answer: 'The cost of our electrician services depends on the job complexity, but we offer a free estimate before starting any work.'
    },
    {
      question: 'Do you offer same-day delivery for rental agreements?',
      answer: 'Yes, we offer same-day delivery for rental agreements if booked before noon.'
    },
  ];

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.heading}>Frequently Asked Questions</Text>
        <View style={styles.underlineheading} />
      {faqData.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.questionRow}>
            <Text style={styles.questionText}>{item.question}</Text>
            <Icon
              name={expanded === index ? 'remove-circle-outline' : 'add-circle-outline'}
              size={24}
              color="#666CB2"
            />
          </TouchableOpacity>
          {expanded === index && <Text style={styles.answerText}>{item.answer}</Text>}
          <View style={styles.underline} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 26,
    backgroundColor: '#fff',
    marginTop:2,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#444343',
  },
  faqItem: {
    marginBottom: 12,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    color: '#444343',
    fontWeight:'bold',
  },
  answerText: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
    padding:4,
  },
  underline: {
    marginTop: 12,
    height: 1,
    backgroundColor: '#ccc',
  },
  underlineheading: {
    marginTop: 1,
    marginBottom:16,
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default FaqService;

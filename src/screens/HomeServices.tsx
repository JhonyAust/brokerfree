// src/screens/Home.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ServiceComponent from '../components/HomeServices/ServiceComponent';
import ServiceOffer from '../components/HomeServices/ServiceOffer';
import FaqService from '../components/HomeServices/FaqService';
import PaintComponent from '../components/HomeServices/PaintComponent';
import InteriorService from '../components/HomeServices/InteriorService';

const HomeServices = () => {
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ServiceComponent/>
      <ServiceOffer/>
      <InteriorService/>
      <PaintComponent/>
      <FaqService/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
});

export default HomeServices;

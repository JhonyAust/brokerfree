// src/screens/Home.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import PaintServiceComponent from '../components/PaintingServices/PaintServiceComponent';
import PaintCardComponent from '../components/PaintingServices/PaintCardComponent';


const PaintServices = () => {
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PaintServiceComponent/>
      <PaintCardComponent/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
});

export default PaintServices;

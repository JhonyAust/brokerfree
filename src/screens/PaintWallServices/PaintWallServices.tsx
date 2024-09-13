// src/screens/Home.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import PaintWallServiceComponent from '../../components/PaintWallService/PaintWallServiceComponent';
import PaintWallCardComponent from '../../components/PaintWallService/PaintWallCardComponent';


const PaintWallServices = () => {
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PaintWallServiceComponent/>
      <PaintWallCardComponent/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
});

export default PaintWallServices;

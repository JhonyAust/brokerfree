// src/screens/Home.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Filters from '../components/home/Filters';
import Services from '../components/home/Services/Services';
import LoanServices from '../components/home/LoanServices';
import PostProperty from '../components/home/PostProperty';
import EnhancedPlans from '../components/home/EnhancedPlans';
import Interior from '../components/home/Iterior';
import BuilderProjects from '../components/home/BuilderProjects';
import LegalServices from '../components/home/LegalServices';
import NRB from '../components/home/NRB';
import CheckLoan from '../components/home/CheckLoan';
const Home = () => {
  const [activeFilter, setActiveFilter] = useState('Buy'); // Manage the active filter state

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Filters setActiveFilter={setActiveFilter} activeFilter={activeFilter} />
      <PostProperty/>
      {activeFilter === 'Buy' && <Services />}
      {activeFilter === 'Rent' && <LoanServices />}
      <LoanServices/>
      <BuilderProjects/>
      <EnhancedPlans/>
      <LegalServices/>
      <Interior/>
      <NRB/>
      <CheckLoan/>
      {/* You can add more conditions for other filters */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
});

export default Home;

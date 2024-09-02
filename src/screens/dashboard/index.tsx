import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { colors } from '@theme';
import { LoanCard } from '@components/loanCard';

const Dashboard = () => {
  return (
    <FlatList
      data={[1, 1, 1, 1]}
      renderItem={({ item }) => <LoanCard />}
      style={styles.container}
    />
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.static,
    padding: 24,
    flex: 1,
  },
});

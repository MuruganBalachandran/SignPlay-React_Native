import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';

export default function DashBoard({ data }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Lesson Dashboard</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.dashboardContainer}
        renderItem={({ item }) => (
          <View style={styles.dashboardCard}>
            <Text style={styles.dashboardCardTitle}>{item.title}</Text>
            <Text style={styles.dashboardCardValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    ...Fonts.subtitle,
    color: Colors.primary,
    marginBottom: 10,
  },
  dashboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dashboardCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '48%',
  },
  dashboardCardTitle: {
    ...Fonts.medium,
    color: '#333',
    marginBottom: 5,
  },
  dashboardCardValue: {
    ...Fonts.subtitle,
    color: Colors.primary,
  },
});

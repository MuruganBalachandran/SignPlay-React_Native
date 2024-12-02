import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';

export default function UpcomingChallenges({ data }) {
  const [showAll, setShowAll] = useState(false);

  const displayedChallenges = showAll ? data : data.slice(0, 2);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Upcoming Challenges</Text>
      <FlatList
        data={displayedChallenges}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.challengeCard}>
            <Text style={styles.challengeTitle}>{item.title}</Text>
            <Text style={styles.challengeDescription}>{item.description}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowAll(!showAll)}
      >
        <Text style={styles.toggleButtonText}>
          {showAll ? 'Close' : 'Show All'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 20 },
  sectionTitle: { ...Fonts.subtitle, color: Colors.primary, marginBottom: 10 },
  challengeCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  challengeTitle: { ...Fonts.medium, color: Colors.primary },
  challengeDescription: { ...Fonts.paragraph, color: '#777', marginTop: 5 },
  toggleButton: { marginTop: 10, alignSelf: 'center' },
  toggleButtonText: { ...Fonts.medium, color: Colors.primary, textAlign: 'center' },
});

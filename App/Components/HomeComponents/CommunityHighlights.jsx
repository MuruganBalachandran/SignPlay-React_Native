import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { communityHighlights } from '../../Data/CommunityHighlightsData';
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';

export default function CommunityHighlights() {
  const [showAll, setShowAll] = useState(false); // State to toggle between showing 2 or all items

  // Determine the data to display based on the state
  const displayedHighlights = showAll ? communityHighlights : communityHighlights.slice(0, 2);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Community Highlights</Text>
      <FlatList
        data={displayedHighlights}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.communityCard}>
            <Text style={styles.communityText}>{item.text}</Text>
            <Text style={styles.communitySubText}>{item.subText}</Text>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    ...Fonts.subtitle,
    color: Colors.primary,
    marginBottom: 10,
  },
  communityCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10, // Space between cards
    alignItems: 'center',
  },
  communityText: {
    ...Fonts.medium,
    color: Colors.primary,
    textAlign: 'center',
  },
  communitySubText: {
    ...Fonts.paragraph,
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
  },
  toggleButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  toggleButtonText: {
    ...Fonts.medium,
    color: Colors.primary,
    textAlign: 'center',
  },
});

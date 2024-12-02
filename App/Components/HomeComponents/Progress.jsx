import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';

export default function Progress({ data }) {
  const [showAll, setShowAll] = useState(false);
  const navigation = useNavigation(); // Create a navigation instance
  const displayedLessons = showAll ? data : data.slice(0, 2);

  const handleLessonPress = (lessonData) => {
    navigation.navigate('Lessons', {
      screen: 'LessonView', // Open LessonView in the Lessons tab
      params: { data: lessonData }, // Pass lesson data
    });
  };
  

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Ongoing Lessons</Text>
      <FlatList
        data={displayedLessons}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            // onPress={() => handleLessonPress(item)} // Handle card press
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
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
  card: {
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
  cardTitle: {
    ...Fonts.medium,
    color: '#333',
  },
  cardDescription: {
    ...Fonts.paragraph,
    color: '#777',
  },
  toggleButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  toggleButtonText: {
    ...Fonts.medium,
    color: Colors.primary,
  },
});

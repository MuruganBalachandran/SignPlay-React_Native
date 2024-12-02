import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';

const { width, height } = Dimensions.get("window");
const fallback = require("../../../assets/images/fallback.png"); // Fallback image

export default function LessonCard({ data, navigation }) {
  // Fallback for missing data
  if (!data) {
    return null;
  }

  const { title = "Untitled Lesson", image, progress = "0%" } = data;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('lessonView', { data })}>
        <View style={styles.card}>
          <Image 
            source={image || fallback} 
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Lesson in Progress</Text>
          <Text style={styles.cardDescription}>You are currently at {progress} progress.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    ...Fonts.subtitle,
    marginBottom: 10,
    color: Colors.primary,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  cardImage: {
    width: width * 0.8,
    height: height * 0.2,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    ...Fonts.medium,
    color: '#333',
    textAlign: 'center',
  },
  cardDescription: {
    ...Fonts.paragraph,
    color: '#777',
    textAlign: 'center',
  },
});

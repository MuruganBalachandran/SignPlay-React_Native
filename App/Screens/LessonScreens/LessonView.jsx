import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import Header from '../../Components/Common/CustomHeader';
import { useNavigation } from '@react-navigation/native';

export default function LessonView({ route }) {
  const navigation = useNavigation();
  const data = route?.params?.data;

  if (!data) {
    return (
      <View style={styles.container}>
        <Header title="Lesson Not Found" isBackBtnVisible={true} />
        <Text style={styles.errorText}>No lesson data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={data.title || "Untitled"} isBackBtnVisible={true} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectives</Text>
          {data.objectives?.map((objective, index) => (
            <Text key={index} style={styles.sectionText}>
              • {objective}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Outcomes</Text>
          {data.outcomes?.map((outcome, index) => (
            <Text key={index} style={styles.sectionText}>
              • {outcome}
            </Text>
          ))}
        </View>

        {data.modules?.map((module, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tutorialCard}
            onPress={() =>
              navigation.navigate('LessonContent', { lessons: module.lessons }) // Navigate to LessonContent
            }
          >
            <Text style={styles.level}>{module.module}</Text>
            <Text style={styles.description}>
              Duration: {module.lessons.reduce((total, lesson) => {
                const duration = parseInt(lesson.duration);
                return total + (isNaN(duration) ? 0 : duration);
              }, 0)} minutes
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    padding: 15,
  },
  section: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  sectionTitle: {
    ...Fonts.subtitle,
    color: Colors.primary,
    marginBottom: 10,
  },
  sectionText: {
    ...Fonts.paragraph,
    color: '#444',
    marginBottom: 5,
  },
  tutorialCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  level: {
    ...Fonts.subtitle,
    color: Colors.primary,
    marginBottom: 5,
  },
  description: {
    ...Fonts.paragraph,
    color: '#777',
  },
  errorText: {
    ...Fonts.paragraph,
    color: Colors.error,
    textAlign: 'center',
    marginTop: 20,
  },
});

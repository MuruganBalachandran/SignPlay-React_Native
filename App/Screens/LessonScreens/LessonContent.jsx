import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import Header from '../../Components/Common/CustomHeader';

export default function LessonContent({ route }) {

  const { lessons } = route.params;

  if (!lessons || lessons.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="Lesson Content" isBackBtnVisible={true} />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No lessons available for this module.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Lesson Content" isBackBtnVisible={true} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {lessons.map((lesson, index) => {
          const {
            title = "Untitled Lesson",
            content: {
              overview = "No overview provided.",
              steps = [],
              exercises = [],
              keyPoints = [],
            } = {},
          } = lesson;

          return (
            <View key={index} style={styles.lessonCard}>
              <Text style={styles.lessonTitle}>{title}</Text>
              <Text style={styles.lessonOverview}>{overview}</Text>

              {steps.length > 0 && (
                <View style={styles.subSection}>
                  <Text style={styles.subTitle}>Steps:</Text>
                  {steps.map((step, idx) => (
                    <Text key={idx} style={styles.subText}>
                      {idx + 1}. {step}
                    </Text>
                  ))}
                </View>
              )}

              {exercises.length > 0 && (
                <View style={styles.subSection}>
                  <Text style={styles.subTitle}>Practice Exercises:</Text>
                  {exercises.map((exercise, idx) => (
                    <Text key={idx} style={styles.subText}>
                      • {exercise}
                    </Text>
                  ))}
                </View>
              )}

              {keyPoints.length > 0 && (
                <View style={styles.subSection}>
                  <Text style={styles.subTitle}>Key Points:</Text>
                  {keyPoints.map((point, idx) => (
                    <Text key={idx} style={styles.subText}>
                      • {point}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    padding: 15,
  },
  lessonCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  lessonTitle: {
    ...Fonts.subtitle,
    color: Colors.primary,
    marginBottom: 10,

  },
  lessonOverview: {
    ...Fonts.paragraph,
    color: '#555',
    marginBottom: 15,
  },
  subSection: {
    marginBottom: 15,
  },
  subTitle: {
    ...Fonts.medium,
    marginBottom: 5,
    color: '#777',
  },
  subText: {
    ...Fonts.paragraph,
    color: '#777',
    marginBottom: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    ...Fonts.paragraph,
    color: Colors.secondary,
    textAlign: 'center',
  },
});

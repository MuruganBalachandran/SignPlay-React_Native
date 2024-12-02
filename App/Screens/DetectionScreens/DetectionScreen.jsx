import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../Utils/Colors';
import Header from '../../Components/Common/CustomHeader';
import Fonts from '../../Utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get("window");

export default function DetectionScreen() {
  const [feedback, setFeedback] = useState({
    mistake: null, // No mistake
    suggestions: [
      'Keep your fingers slightly closer for better form.',
      'Ensure your hand is steady and aligned with the camera.',
    ],
  });

  const imagePath = require("../../../assets/images/input_image.png");

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <Header title="Sign Language Detector" isBackBtnVisible={false} />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={imagePath}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Horizontal Buttons Section */}
        <View style={styles.buttonsContainer}>
          {/* History Button with Icon */}
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="time" size={30} color={Colors.primary} />
          </TouchableOpacity>



          {/* Upload Button */}
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          </TouchableOpacity>



          {/* Camera Button with Icon */}
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Feedback Section */}
        <View style={styles.feedbackContainer}>
          {feedback.mistake ? (
            <>
              <Text style={styles.feedbackTitle}>Mistake:</Text>
              <Text style={styles.feedbackText}>{feedback.mistake}</Text>
            </>
          ) : (
            <Text style={styles.noMistakeText}>There is no mistake detected in your gesture.</Text>
          )}

          {/* Suggestions */}
          <Text style={styles.feedbackTitle}>Suggestions for Improvement:</Text>
          {feedback.suggestions.map((suggestion, index) => (
            <Text key={index} style={styles.suggestion}>
              • {suggestion}
            </Text>
          ))}
        </View>
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
    paddingHorizontal: 20, 
    paddingBottom: 20, 
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: width * 1,
    height: width * 1,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  // Ensure buttons are spaced evenly
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',  // Align buttons vertically centered
  },
  iconButton: {
    padding: 10, // Add some padding to make the icons touchable
  },

  uploadButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  uploadButtonText: {
    color: '#fff',
    ...Fonts.medium,
  },
  feedbackContainer: {
    marginTop: 20,
    backgroundColor: Colors.lightGray,
    padding: 15,
    borderRadius: 10,
  },
  feedbackTitle: {
    ...Fonts.subtitle,
    color: Colors.primary,
    marginBottom: 10,
  },
  feedbackText: {
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 15,
    lineHeight: 20,
  },
  noMistakeText: {
    ...Fonts.medium,
    color: Colors.success,
    marginBottom: 15,
    fontStyle: 'italic',
  },
  suggestion: {
    ...Fonts.paragraph,
    color: Colors.darkGray,
    lineHeight: 22,
  },
});

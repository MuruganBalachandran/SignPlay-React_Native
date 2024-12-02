import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Streak({ streakDays }) {
  const [showStreak, setShowStreak] = useState(true);

  useEffect(() => {
    checkVisibility();
  }, []);

  const checkVisibility = async () => {
    try {
      const hideUntil = await AsyncStorage.getItem('hideUntil');
      const now = new Date();
      const hideDate = hideUntil ? new Date(hideUntil) : null;

      if (!hideDate || now > hideDate) {
        setShowStreak(true);
      } else {
        setShowStreak(false);
      }
    } catch (error) {
      console.error('Error checking streak visibility:', error);
    }
  };

  const handleCancel = async () => {
    try {
      const now = new Date();
      const nextShowTime = new Date();
      nextShowTime.setHours(12, 0, 0, 0);
      if (now.getTime() > nextShowTime.getTime()) {

        nextShowTime.setDate(nextShowTime.getDate() + 1);
      }
      await AsyncStorage.setItem('hideUntil', nextShowTime.toISOString());
      setShowStreak(false);
    } catch (error) {
      console.error('Error setting hideUntil:', error);
    }
  };

  if (!showStreak) {
    return null;
  }

  return (
    <View>
      <View style={styles.streakContainer}>
        <Text style={styles.streakText}>🔥 Streak: {streakDays} Days</Text>
        <Text style={styles.streakSubText}>Keep going! You're doing great!</Text>
      </View>
      <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
        <Ionicons name="close" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  streakContainer: {
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
  streakText: {
    ...Fonts.medium,
    color: Colors.primary,
  },
  streakSubText: {
    ...Fonts.paragraph,
    color: '#777',
  },
  cancelButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

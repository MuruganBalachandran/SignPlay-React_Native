import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProfileHeader from '../../Components/ProfileComponents/ProfileHeader'; // Importing the new ProfileHeader
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';

export default function ProfileScreen() {
  const user = {
    name: 'Murugan B',
    avatar: require('../../../assets/images/user1.jpg'),
    progress: '65%',
    proficiency: 'Intermediate',
    language: 'American Sign Language',
    totalLessons: 25,
    totalHours: 15,
  };

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.profileContainer}>
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userLanguage}>Language: {user.language}</Text>
        <Text style={styles.userProficiency}>Proficiency: {user.proficiency}</Text>
        <Text style={styles.userProgress}>Progress: {user.progress}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progress Overview</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Lessons Completed</Text>
          <Text style={styles.cardValue}>{user.totalLessons}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Hours Spent</Text>
          <Text style={styles.cardValue}>{user.totalHours} Hours</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  userName: {
    ...Fonts.title,
    color: Colors.primary,
    marginBottom: 5,
  },
  userLanguage: {
    ...Fonts.medium,
    color: '#777',
    marginTop: 5,
  },
  userProficiency: {
    ...Fonts.medium,
    color: '#777',
    marginTop: 5,
  },
  userProgress: {
    ...Fonts.medium,

    color: Colors.success,
    marginTop: 5,
  },
  section: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  sectionTitle: {
    ...Fonts.subtitle,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: Colors.primary,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    ...Fonts.medium,
    color: '#333',
    marginBottom: 10,
  },
  cardValue: {
    ...Fonts.medium,

    color: Colors.primary,
  },
});

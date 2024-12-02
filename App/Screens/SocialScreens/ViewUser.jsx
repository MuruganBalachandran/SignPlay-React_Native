import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Header from '../../Components/Common/CustomHeader';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
const { width, height } = Dimensions.get("window");

export default function ViewUser({ route }) {
  const { user } = route.params;

  const handleConnect = () => {
    Alert.alert('Connection Request', `You sent a connection request to ${user.name}.`);
  };

  const handleMessage = () => {
    Alert.alert('Message', `Send a message to ${user.name}.`);
  };

  return (
    <View style={styles.container}>
      <Header title="User Details" isBackBtnVisible={true} />
      <View style={styles.content}>
        {/* Avatar and Name */}
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.streak}>🔥 Streak: 14 days</Text>

        {/* About Section */}
        <Text style={styles.aboutText}>
          {user.name} is currently learning {user.language} with a proficiency level of {user.languageProficiency}. They are working hard to improve and have completed {user.progress} of their learning journey.
        </Text>

        {/* Actions */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.connectButton} onPress={handleConnect}>
            <Text style={styles.buttonText}>Connect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Language and Proficiency */}
      <View style={styles.detailsContainer}>
        <View style={styles.languageContainer}>
          <Text style={styles.languageLabel}>Language:</Text>
          <Text style={styles.language}>{user.language}</Text>
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.languageLabel}>Proficiency:</Text>
          <Text style={styles.language}>{user.languageProficiency}</Text>
        </View>

        {/* Progress */}
        <View style={styles.languageContainer}>
        <Text style={styles.languageLabel}>Progress</Text>
        <Text style={styles.language}>{user.progress}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width / 2,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  name: {
    ...Fonts.title,
    color: Colors.primary,
    marginBottom: 5,
  },
  streak: {
    ...Fonts.medium,
    color: Colors.success,
    marginBottom: 15,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  languageLabel: {
    ...Fonts.medium,
    color: '#555',
    marginRight: 8,
  },
  language: {
    ...Fonts.medium,
    color: Colors.primary, // Value remains primary color
  },
  progressText: {
    ...Fonts.medium,
    color: Colors.gray,
    marginVertical: 10,
  },
  aboutText: {
    ...Fonts.paragraph,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
    width:width*0.9
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  connectButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  messageButton: {
    backgroundColor: Colors.success,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    ...Fonts.medium,
    color: '#fff',
  },
  detailsContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
});

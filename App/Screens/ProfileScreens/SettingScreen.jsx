import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import Header from '../../Components/Common/CustomHeader';

export default function SettingScreen() {
  const settingsOptions = [
    { title: 'Profile Settings', icon: 'person-outline', onPress: () => alert('Go to Profile Settings') },
    { title: 'Language Preferences', icon: 'language-outline', onPress: () => alert('Go to Language Preferences') },
    { title: 'Notification Settings', icon: 'notifications-outline', onPress: () => alert('Go to Notification Settings') },
    { title: 'Privacy & Security', icon: 'lock-closed-outline', onPress: () => alert('Go to Privacy & Security') },
    { title: 'Help & Support', icon: 'help-circle-outline', onPress: () => alert('Go to Help & Support') },
    { title: 'About App', icon: 'information-circle-outline', onPress: () => alert('Learn About the App') },
    { title: 'Log Out', icon: 'log-out-outline', onPress: () => alert('Log Out from the App') },
  ];

  return (
    <View style={styles.container}>
      <Header
      title={"Settings"}
      isBackBtnVisible={true}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View
        style={{margin:10,}}
        >     
        {settingsOptions.map((option, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.settingOption} 
            onPress={option.onPress}
          >
            <Icon name={option.icon} size={24} color={Colors.primary} style={styles.icon} />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
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
  header: {
    ...Fonts.title,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    paddingVertical:20,
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    ...Fonts.subtitle,
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import { useNavigation } from '@react-navigation/native';

const fallBack = require("../../../assets/images/fallback.png");

const UserCard = ({ user, onPressCall }) => {
  const navigation = useNavigation();

  // Function to slice the name if it exceeds 12 characters
  const getShortName = (name) => {
    return name.length > 12 ? `${name.slice(0, 12)}...` : name;
  };

  return (
    <View style={styles.userCard}>
      {/* First Row: Avatar, Username, Status, and Call Button */}
      <View style={styles.firstRow}>
        <TouchableOpacity onPress={() => navigation.navigate("ViewUser", { user: user })}>
          <Image source={user.avatar || fallBack} style={styles.userAvatar} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{getShortName(user.name)}</Text>
          <Text
            style={[
              styles.userStatus,
              user.status === 'Online' ? styles.onlineStatus : styles.offlineStatus,
            ]}
          >
            {user.status}
          </Text>
        </View>
        <TouchableOpacity style={styles.callButton} onPress={() => onPressCall(user)}>
          <Text style={styles.callButtonText}>Live Call</Text>
        </TouchableOpacity>
      </View>

      {/* Second Row: Language and Proficiency Combined */}
      <View style={styles.secondRow}>
        <Text style={styles.userProficiency}>
          {user.languageProficiency} | <Text style={{ color:Colors.primary }} >{user.language}</Text> 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, // Add spacing between rows
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1, // Occupies the remaining space
  },
  userName: {
    ...Fonts.medium,
    fontWeight: '600',
    color: '#333',
  },
  userStatus: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginTop: 5, // Add spacing between name and status
  },
  onlineStatus: {
    color: Colors.success, // Green for online users
  },
  offlineStatus: {
    color: Colors.error, // Red for offline users
  },
  callButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  callButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
   fontSize:16
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userProficiency: {
    ...Fonts.paragraph,
    color: '#777',
  },
});

export default UserCard;

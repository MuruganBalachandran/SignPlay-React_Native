// CommunityItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';

const CommunityItem = ({ community }) => {
  return (
    <View style={styles.communityItem}>
      <Text style={styles.communityTitle}>{community.title}</Text>
      <Text style={styles.communityDescription}>{community.description}</Text>
      <Text style={styles.communityMembers}>Members: {community.members}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  communityItem: {
    marginBottom: 15,               // Space between each community item
    padding: 15,                    // Add padding inside the box for better spacing
    borderRadius: 8,                // Rounded corners for the box
    borderWidth: 1,                 // Border around the item
    borderColor: '#ddd',            // Light gray border
    backgroundColor: '#fff',        // White background for each community item
    shadowColor: '#000',            // Shadow for the box
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,             // Subtle shadow effect
    shadowRadius: 4,                // Rounded corners for the shadow
    elevation: 3,                   // For Android shadow (equivalent to shadowOpacity)
  },
  communityTitle: {
...Fonts.medium,
color:Colors.black,
    marginBottom: 5,                // Space below the title
  },
  communityDescription: {
    ...Fonts.paragraph,
    color: '#777',
    marginBottom: 10,               // Space between description and members text
  },
  communityMembers: {
    ...Fonts.paragraph,
    color: '#333',
  },
});

export default CommunityItem;

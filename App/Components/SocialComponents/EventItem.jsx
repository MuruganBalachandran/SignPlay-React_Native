// EventItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';

const EventItem = ({ event }) => {
  return (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventDate}>{event.date}</Text>
      <Text style={styles.eventLocation}>{event.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventItem: {
    marginBottom: 15,               
    padding: 15,                 
    borderRadius: 8,               
    borderWidth: 1,               
    borderColor: '#ddd',           
    backgroundColor: '#fff',      
    shadowColor: '#000',            
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,       
    shadowRadius: 4,              
    elevation: 3,                  
  },
  eventTitle: {
   ...Fonts.medium,
   color:Colors.black,
    marginBottom: 5,                
  },
  eventDate: {
    ...Fonts.paragraph,
    color: '#777',
    marginBottom: 5,               
  },
  eventLocation: {
    ...Fonts.paragraph,            
    color: '#333',
  },
});

export default EventItem;

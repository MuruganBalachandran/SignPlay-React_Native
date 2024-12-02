import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Fonts from '../../Utils/Fonts';  
import Colors from '../../Utils/Colors';  
import  Ionicons  from 'react-native-vector-icons/Ionicons';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(true); 

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <View>
      {isVisible && (
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.welcomeSubText}>Ready to learn and connect?</Text>

          {/* Cancel button to hide the welcome section */}
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Ionicons name="close" size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeSection: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:Colors.white,
    padding:10,
    elevation: 3,
  },
  welcomeText: {
    ...Fonts.title,
    fontWeight: '700',
    color: Colors.primary,
    fontSize: 24,
  },
  welcomeSubText: {
    ...Fonts.paragraph,
    color: '#777',
    marginTop: 5,
  },
  cancelButton: {
    position: 'absolute',
    top: 15,
    right: 20,
    backgroundColor:Colors.error,
    borderRadius:99,
    padding:5,
    justifyContent:"center"
  },
});

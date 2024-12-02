import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../Utils/Fonts';
const{width,height}= Dimensions.get("window")
export default function CallScreen({ route }) {
  const { userName } = route.params; // Get userName from navigation params
  const navigation = useNavigation();

  const handleEndCall = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      {/* Call Heading */}
      <Text style={styles.heading}>Video Call with {userName}</Text>

      {/* Video Placeholder */}
      <View style={styles.videoContainer}>
        <Text style={styles.videoPlaceholder}>[Video Stream Placeholder]</Text>
      </View>

      {/* End Call Button */}
      <TouchableOpacity style={styles.endCallButton} onPress={handleEndCall}>
        <Text style={styles.endCallButtonText}>End</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  heading: {
    ...Fonts.title,
    color: '#fff',

    marginBottom: 20,
    textAlign: 'center',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  videoPlaceholder: {
    ...Fonts.subtitle,
    color: '#bbb',

  },
  endCallButton: {
    ...Fonts.medium,
    backgroundColor: '#d9534f',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'center', 
    marginBottom: 20,
    width:width*0.2,
    height:width*0.2,
    alignItems:"center",
    justifyContent: 'center',
    borderRadius:width/2
  },
  endCallButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

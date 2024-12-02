import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';

const Header = ({ title, isBackBtnVisible}) => {
  const navigation = useNavigation();  

  return (
    <View style={styles.container}>
      {isBackBtnVisible && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,  
    alignContent:"base-line",
padding:15,
    borderBottomWidth: 1,  
    borderBottomColor: '#e0e0e0',  
    flexDirection: 'row',  
  },
  backBtn: {
    marginRight: 15,  
    padding:5
  },
  title: {
...Fonts.Headertitle,
    color: '#ffffff',  
  },
});

export default Header;

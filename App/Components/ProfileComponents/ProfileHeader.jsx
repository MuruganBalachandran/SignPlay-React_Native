import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import { useNavigation } from '@react-navigation/native';

export default function ProfileHeader() {
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Profile</Text>
      <TouchableOpacity style={styles.settingsIcon} onPress={()=>navigation.navigate("SettingScreen")}>
        <Icon name="settings" size={28} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Colors.primary,
    padding:10,
  },
  headerTitle: {
    ...Fonts.Headertitle,
    color: Colors.white,
    paddingHorizontal:10,
  },
  settingsIcon: {
    padding: 10,
  },
});

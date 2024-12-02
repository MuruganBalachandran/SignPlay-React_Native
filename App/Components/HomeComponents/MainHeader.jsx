import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function MainHeader() {
const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Text style={styles.headerTitle}>SignPlay</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("NotificationScreen")}
        style={styles.iconButton}>
          <Ionicons name="notifications" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor:Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    ...Fonts.Headertitle,
    color: Colors.white,
    marginLeft: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
});

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../../Utils/Colors';
import Header from '../../Components/Common/CustomHeader';
import Fonts from '../../Utils/Fonts';
import { NotificationsData } from '../../Data/Notifications';



export default function NotificationScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(NotificationsData);
  }, []);

  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toLocaleString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
     <Header title={"Notifications"} isBackBtnVisible={true}/>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

  },
  listContainer: {
    paddingBottom: 20,
    padding:10,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
   ...Fonts.subtitle,
    color: '#444',
  },
  message: {
...Fonts.paragraph,
    color: '#666',
    marginTop: 5,
    marginBottom: 10,
  },
  timestamp: {
    ...Fonts.paragraph,

    color: '#999',
  },
});

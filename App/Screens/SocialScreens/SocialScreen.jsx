import React, { useState } from 'react';
import { View, FlatList, Alert, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../Components/Common/CustomHeader';
import UserCard from '../../Components/SocialComponents/UserCard';
import { useNavigation } from '@react-navigation/native';
import { users } from '../../Data/SocialUserData'; 
import { communityData } from '../../Data/CommunityData';
import { eventsData } from '../../Data/EventsData';
import CommunityItem from '../../Components/SocialComponents/CommunityItem';
import EventItem from '../../Components/SocialComponents/EventItem'; 
import Colors from '../../Utils/Colors'; 
import Fonts from '../../Utils/Fonts';

export default function SocialScreen() {
  const isBackBtnVisible = false;
  const headerTitle = "Connect with Others";
  const navigation = useNavigation();

  const handleCall = (user) => {
    Alert.alert(
      "Start Call",
      `Do you want to start a live call with ${user.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => navigation.navigate('CallScreen', { userName: user.name }), 
        },
      ]
    );
  };

  const renderUserItem = ({ item }) => (
    <UserCard user={item} onPressCall={handleCall} />
  );

  const renderCommunityItem = ({ item }) => (
    <CommunityItem community={item} />
  );

  const renderEventItem = ({ item }) => (
    <EventItem event={item} />
  );

  const [showMoreUsers, setShowMoreUsers] = useState(false);
  const [showMoreCommunities, setShowMoreCommunities] = useState(false);
  const [showMoreEvents, setShowMoreEvents] = useState(false);

  const toggleShowMore = (type) => {
    if (type === 'users') {
      setShowMoreUsers(!showMoreUsers);
    } else if (type === 'communities') {
      setShowMoreCommunities(!showMoreCommunities);
    } else if (type === 'events') {
      setShowMoreEvents(!showMoreEvents);
    }
  };

  return (
    <View
    style={{
      flex:1,
      backgroundColor:Colors.white
    }}
    >

<Header title={headerTitle} isBackBtnVisible={isBackBtnVisible} />
    <ScrollView
      showsVerticalScrollIndicator={false}  
      contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white }}
    >
     

      <FlatList 
        data={showMoreUsers ? users : users.slice(0, 4)} 
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 20 }}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Users</Text>}
        ListFooterComponent={
          users.length > 4 && (
            <TouchableOpacity onPress={() => toggleShowMore('users')}>
              <Text style={styles.showMoreText}>
                {showMoreUsers ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          )
        }
      />

      {/* Community Section */}
      <FlatList
        data={showMoreCommunities ? communityData : communityData.slice(0, 4)} 
        renderItem={renderCommunityItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 20 }}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Community</Text>}
        ListFooterComponent={
          communityData.length > 4 && (
            <TouchableOpacity onPress={() => toggleShowMore('communities')}>
              <Text style={styles.showMoreText}>
                {showMoreCommunities ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          )
        }
      />

      {/* Events Section */}
      <FlatList
        data={showMoreEvents ? eventsData : eventsData.slice(0, 4)} 
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Events</Text>}
        ListFooterComponent={
          eventsData.length > 4 && (
            <TouchableOpacity onPress={() => toggleShowMore('events')}>
              <Text style={styles.showMoreText}>
                {showMoreEvents ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
...Fonts.subtitle,
color:Colors.primary,
    marginLeft: 15,
    marginBottom: 10,
  },
  showMoreText: {
    ...Fonts.medium,
    color: Colors.primary, 
    textAlign: 'center',
  },
});

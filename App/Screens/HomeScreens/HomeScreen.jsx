import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Welcome from '../../Components/HomeComponents/Welcome';
import Progress from '../../Components/HomeComponents/Progress';
import Streak from '../../Components/HomeComponents/Streak';
import DashBoard from '../../Components/HomeComponents/DashBoard';
import UpcomingChallenges from '../../Components/HomeComponents/UpcomingChallenges';
import CommunityHighlights from '../../Components/HomeComponents/CommunityHighlights';
import MainHeader from '../../Components/HomeComponents/MainHeader';
import Colors from '../../Utils/Colors';
import { onGoingLessons } from '../../Data/ProgressData';
import { upcomingChallenges } from '../../Data/UpcomingChallengesData';
import { communityHighlights } from '../../Data/CommunityHighlightsData';
import { dashboardData } from '../../Data/DashBoardData';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader />
      <Streak streakDays={5} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {onGoingLessons.length > 0 && <Progress data={onGoingLessons} />}
      
        {dashboardData.length > 0 && <DashBoard data={dashboardData} />}
        {upcomingChallenges.length > 0 && <UpcomingChallenges data={upcomingChallenges} />}
        {communityHighlights.length > 0 && <CommunityHighlights data={communityHighlights} />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexGrow: 1, 
  },
});

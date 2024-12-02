import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../Components/Common/CustomHeader';
import Colors from '../../Utils/Colors';
import LessonCard from '../../Components/LessonComponents/LessonCard';
import { useNavigation } from '@react-navigation/native';
import { ASLDATA, BSLDATA, JSLDATA} from "../../Data/LessonData"

export default function LessonScreen() {
  const isBackBtnVisible = false;
  const headerTitle = "Lessons";
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title={headerTitle} isBackBtnVisible={isBackBtnVisible} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <LessonCard data={ASLDATA} navigation={navigation} />
        <LessonCard data={BSLDATA} navigation={navigation} />
        <LessonCard data={JSLDATA} navigation={navigation} />
      </ScrollView>
    </View>
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
  },
});

import {
  Animated,
  Button,
  Image,
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {createRef, useRef, useState} from 'react';
import colors from './src/constants/colors';
import commonSty, {WIDTH} from './src/utils/commSty';
import Typography from './src/components/Typography';
import TopBar from './src/components/TopBar';
const App = () => {
  LogBox.ignoreAllLogs();

  let data = [{title: 'Tab 1'}, {title: 'Tab 2'}];

  let data2 = [{title: 'Tab 1'}, {title: 'Tab 2'}, {title: 'Tab 3'}];

  let data3 = [
    {title: 'Tab 1'},
    {title: 'Tab 2'},
    {title: 'Tab 3'},
    {title: 'Tab 3'},
  ];

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <TopBar
        data={data}
        mainScrollContainerStyle={{backgroundColor: '#f1f1f1', marginTop: 50}}
        itemWidth={180}
        tabBarActiveItemColor="#f1f1f1"
        tabBarInactiveItemColor="white"
        tabBarBackground="#ffff"
        tabBatActiveTxtColor="black"
        tabBatInactiveTxtColor="black"
      />
      <TopBar
        data={data2}
        containerStyle={{backgroundColor: '#f1f1f1'}}
        itemWidth={120}
        tabBarActiveItemColor="#f1f1f1"
        tabBarInactiveItemColor="white"
        tabBarBackground="#ffff"
        tabBatActiveTxtColor="black"
        tabBatInactiveTxtColor="black"
      />
      <TopBar
        data={data3}
        containerStyle={{backgroundColor: '#f1f1f1'}}
        itemWidth={90}
        tabBarActiveItemColor="#f1f1f1"
        tabBarInactiveItemColor="white"
        tabBarBackground="#ffff"
        selectedTxtStyle={{fontSize: 19}}
        txtStyle={{fontSize: 18}}
        tabBatActiveTxtColor="black"
        tabBatInactiveTxtColor="black"
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1f1',
  },
});

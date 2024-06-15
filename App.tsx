import {
  Animated,
  Button,
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

  let data = [{title: 'Nikul'}, {title: 'hello'}];

  return (
    <SafeAreaView>
      <TopBar
        data={data}
        containerStyle={{backgroundColor: '#f1f1f1'}}
        itemWidth={170}
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

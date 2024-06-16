import {
  Animated,
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useRef, useState} from 'react';

import Typography from '../Typography';

import colors from '../../constants/colors';

import commonSty, {HEIGHT, WIDTH} from '../../utils/commSty';

interface TopBarProps {
  data: any;
  containerStyle?: ViewStyle;
  selectedItemContainerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
  selectedTxtStyle?: TextStyle;
  txtStyle?: TextStyle;
  onItemPress?: (item: any, index: number) => void;
  itemWidth: number;
  tabBarBackground?: string;
  tabBarActiveItemColor?: string;
  tabBarInactiveItemColor?: string;
  tabBatActiveTxtColor?: string;
  tabBatInactiveTxtColor?: string;
  mainScrollContainerStyle?: ViewStyle;
}

const TopBar = (props: TopBarProps) => {
  const {
    data,
    containerStyle,
    selectedItemContainerStyle,
    itemContainerStyle,
    selectedTxtStyle,
    txtStyle,
    onItemPress,
    itemWidth,
    tabBarBackground,
    tabBarActiveItemColor,
    tabBarInactiveItemColor,
    tabBatActiveTxtColor,
    tabBatInactiveTxtColor,
    mainScrollContainerStyle,
  } = props;

  let ITEM_WIDTH = itemWidth;

  const [check, setCheck] = useState(false);
  const translateX = useRef(new Animated.Value(0));
  const [currentInd, setCurrentInd] = useState(0);

  const handleOnPress = (item: any, index: number) => {
    Animated.timing(translateX.current, {
      toValue: ITEM_WIDTH * index,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setCurrentInd(index);
    if (!!onItemPress) {
      onItemPress(item, index);
    }
  };
  return (
    <ScrollView
      horizontal
      contentContainerStyle={[
        {
          height: HEIGHT / 9,
          justifyContent: 'center',
          alignItems: 'center',
        },
        mainScrollContainerStyle,
      ]}
      showsHorizontalScrollIndicator={false}>
      <View
        style={[
          styles.mainContainer,
          containerStyle,
          {
            backgroundColor: tabBarBackground ? tabBarBackground : '#f1f1f1f1',
          },
        ]}>
        <Animated.View
          style={[
            styles.selectedItemContainer,
            selectedItemContainerStyle,
            {
              backgroundColor: tabBarActiveItemColor
                ? tabBarActiveItemColor
                : 'white',
              width: ITEM_WIDTH,
              transform: [
                {
                  translateX: translateX.current,
                },
              ],
              zIndex: 0,
            },
          ]}
        />
        {data.map((item: any, ind: number) => {
          let isCurrent = currentInd === ind;
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => handleOnPress(item, ind)}
              key={ind}
              style={[
                styles.itemContainer,
                itemContainerStyle,
                {
                  width: ITEM_WIDTH,
                  backgroundColor: isCurrent
                    ? 'transparent'
                    : tabBarInactiveItemColor
                    ? tabBarInactiveItemColor
                    : 'white',
                  marginLeft: isCurrent ? 2 : 0,
                },
              ]}>
              <Typography
                title={item?.title}
                txtStyle={[
                  isCurrent
                    ? {
                        ...styles.selectedTxtStyle,
                        color: tabBatActiveTxtColor
                          ? tabBatActiveTxtColor
                          : colors.black,
                        ...selectedTxtStyle,
                      }
                    : {
                        ...styles.txtStyle,
                        color: tabBatInactiveTxtColor
                          ? tabBatInactiveTxtColor
                          : colors.black,
                        ...txtStyle,
                      },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  mainContainer: {
    ...commonSty.rowCenter,
    height: HEIGHT * 0.07,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  selectedItemContainer: {
    height: HEIGHT * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    left: 5,
    zIndex: 0,
  },
  itemContainer: {
    height: HEIGHT * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: 1,
  },
  txtStyle: {
    zIndex: 1,
    color: colors.black,
    fontSize: HEIGHT / 38,
  },
  selectedTxtStyle: {
    zIndex: 1,
    color: colors.black,
    fontSize: HEIGHT / 38,
  },
});

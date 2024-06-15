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
      contentContainerStyle={{height: HEIGHT / 9}}
      showsHorizontalScrollIndicator={false}>
      <View style={[styles.mainContainer, containerStyle]}>
        <Animated.View
          style={[
            styles.selectedItemContainer,
            selectedItemContainerStyle,
            {
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
                  backgroundColor: isCurrent ? 'transparent' : '#f1f1f1',
                  marginLeft: isCurrent ? 2 : 0,
                },
              ]}>
              <Typography
                title={item?.title}
                txtStyle={[
                  isCurrent
                    ? {...styles.selectedTxtStyle, ...selectedTxtStyle}
                    : {...styles.txtStyle, ...txtStyle},
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
    backgroundColor: '#f1f1f1',
    height: HEIGHT * 0.082,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  selectedItemContainer: {
    height: HEIGHT * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  },
  selectedTxtStyle: {
    zIndex: 1,
    color: colors.black,
  },
});

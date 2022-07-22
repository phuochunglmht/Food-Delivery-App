import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import scale from '../../responsive';
import CUSTOM_COLOR from '../constants/color';
import CUSTOM_UnderlineButton from './CUSTOM_UnderlineButton';

const CUSTOM_CategoryScrollView = () => {
  const categoryList = useMemo(
    () => ['Foods', 'Drinks', 'Snacks', 'Sauce'],
    [],
  );
  const [tab, setTab] = useState(categoryList[0]);
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.categoryView}>
        {categoryList.map(item => (
          <View style={styles.categoryItem} key={item}>
            <CUSTOM_UnderlineButton
              isChoosing={tab === item}
              onPress={() => setTab(item)}
              textStyle={styles.categoryText(tab === item)}>
              {item}
            </CUSTOM_UnderlineButton>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CUSTOM_CategoryScrollView;

const styles = StyleSheet.create({
  scrollViewContainer: {
    position: 'absolute',
    top: scale(310),
    left: scale(10),
    horizontal: true,
    width: scale(414),
  },
  categoryView: {
    flexDirection: 'row',
  },
  categoryItem: {
    padding: scale(10),
    fontSize: scale(17),
  },
  categoryText: isChoosing => ({
    color: isChoosing ? CUSTOM_COLOR.SunsetOrange : CUSTOM_COLOR.Manatee,
    fontSize: scale(17),
  }),
});

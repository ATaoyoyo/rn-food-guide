import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation, route }) => {
  const selectCategory = CATEGORIES.find((item) => item.id === route.params.categoryId);

  navigation.setOptions({
    title: selectCategory.title,
  });

  return (
    <View style={styles.screen}>
      <Text>{selectCategory.title}</Text>
      <Button
        title="Go Meals"
        onPress={() => {
          navigation.navigate('MealDetail');
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;

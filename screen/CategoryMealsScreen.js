import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation, route }) => {
  const selectCategory = CATEGORIES.find((item) => item.id === route.params.categoryId);
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectCategory.title,
    });
  }, [navigation]);

  return <MealList listData={displayedMeals} />;
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;

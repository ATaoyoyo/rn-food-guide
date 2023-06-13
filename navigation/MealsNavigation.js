import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={screenOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = ({ onLayout }) => {
  return (
    <NavigationContainer onReady={onLayout}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Meals" component={MealsNavigation}></Tab.Screen>
        <Tab.Screen name="Favorites" component={FavoritesScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

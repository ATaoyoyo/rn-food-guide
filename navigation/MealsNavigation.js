import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import FiltersScreen from '../screen/FiltersScreen';

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

const Tab =
  Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const DrawNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerInactiveTintColor: Colors.primaryColor,
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: Colors.primaryColor,
      }}
    >
      <Drawer.Screen name="MealFavs" component={FavoritesScreen} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
};

const TabNavigation = ({ onLayout }) => {
  const tabScreenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: Colors.primaryColor,
    tabBarColor: '#f60',
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Meals') {
        iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
      } else if (route.name === 'Favorites') {
        iconName = focused ? 'ios-star' : 'ios-star-outline';
      }
      return <Ionicons name={iconName} size={24} color={color} />;
    },
  });

  return (
    <NavigationContainer onReady={onLayout}>
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen name="Meals" component={MealsNavigation}></Tab.Screen>
        <Tab.Screen name="Favorites" component={DrawNavigation}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

const CategoryGridTile = ({ data, onSelect }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.container, backgroundColor: data.color }}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right',
    color: '#333',
  },
});

export default CategoryGridTile;

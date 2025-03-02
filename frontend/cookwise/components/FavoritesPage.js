
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };


  const removeFromFavorites = (index) => {
    const updatedFavorites = favorites.filter((_, idx) => idx !== index);
    setFavorites(updatedFavorites);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorite Recipes</Text>

      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.favoriteItemContainer}>
              <Text style={styles.favoriteItemText}>{item.name}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromFavorites(index)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E81B0E',
  },
  noFavoritesText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
  },
  favoriteItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  favoriteItemText: {
    fontSize: 18,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#E81B0E',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default FavoritesPage;

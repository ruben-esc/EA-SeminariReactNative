import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useStore } from '@nanostores/react';
import { Ionicons } from '@expo/vector-icons';
import type { Book } from '../models';
import { favoritesStore, toggleFavorite } from '../stores/favorites';

interface FavouriteButtonProps {
  book: Book;
  compact?: boolean;
}

export function FavouriteButton({ book, compact = false }: FavouriteButtonProps) {
  const favorites = useStore(favoritesStore);
  const isFavorite = favorites.some((b) => b._id === book._id);

  if (compact) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          isFavorite ? styles.iconButtonActive : styles.iconButtonInactive,
          pressed && styles.pressed,
        ]}
        onPress={() => toggleFavorite(book)}
      >
        <Ionicons
          name={isFavorite ? 'star' : 'star-outline'}
          size={18}
          color={isFavorite ? '#D97706' : '#64748B'}
        />
      </Pressable>
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isFavorite ? styles.buttonActive : styles.buttonInactive,
        pressed && styles.pressed,
      ]}
      onPress={() => toggleFavorite(book)}
    >
      <Ionicons
        name={isFavorite ? 'star' : 'star-outline'}
        size={16}
        color={isFavorite ? '#B45309' : '#475569'}
      />
      <Text style={[styles.text, isFavorite ? styles.textActive : styles.textInactive]}>
        {isFavorite ? 'Quitar favorito' : 'Favorito'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
  iconButtonActive: {
    backgroundColor: '#FEF3C7',
  },
  iconButtonInactive: {
    backgroundColor: '#F1F5F9',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 4,
  },
  buttonActive: {
    backgroundColor: '#FEF3C7',
  },
  buttonInactive: {
    backgroundColor: '#F1F5F9',
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
  },
  textActive: {
    color: '#B45309',
  },
  textInactive: {
    color: '#475569',
  },
  pressed: {
    opacity: 0.7,
  },
});
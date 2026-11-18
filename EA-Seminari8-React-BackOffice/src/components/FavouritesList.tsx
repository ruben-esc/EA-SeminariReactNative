import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useStore } from '@nanostores/react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { favoritesStore } from '../stores/favorites';
import type { Book } from '../models';
import { BookCard } from './BookCard';

export function FavouritesList() {
  const favorites = useStore(favoritesStore);
  const router = useRouter();

  const handleEdit = (book: Book) => {
    router.push({
      pathname: '/(tabs)/books/[id]/edit',
      params: { id: book._id },
    });
  };

  const handleDetail = (book: Book) => {
    router.push({
      pathname: '/(tabs)/books/[id]',
      params: { id: book._id },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Libros Favoritos</Text>
        <Text style={styles.subtitle}>
          {favorites.length} {favorites.length === 1 ? 'libro guardado' : 'libros guardados'}
        </Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <BookCard
            book={item}
            viewMode="cards"
            onEdit={handleEdit}
            onDelete={() => {}}
            onPress={() => handleDetail(item)}
          />
        )}
        contentContainerStyle={favorites.length === 0 ? styles.emptyList : styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="star-outline" size={48} color="#94A3B8" />
            <Text style={styles.emptyTitle}>No tienes libros favoritos</Text>
            <Text style={styles.emptySubtitle}>
              Marca libros con la estrella en el catálogo para verlos aquí
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  header: {
    marginVertical: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  list: {
    paddingBottom: 24,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
  },
});
import { atom } from 'nanostores';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Book } from '../models';

const STORAGE_KEY = 'favorites-books';

export const favoritesStore = atom<Book[]>([]);

// 1. Cargar los favoritos guardados al iniciar la app
AsyncStorage.getItem(STORAGE_KEY)
  .then((raw) => {
    if (raw) {
      favoritesStore.set(JSON.parse(raw));
    }
  })
  .catch(() => {
    // Si falla la lectura inicial, mantenemos el array vacío
  });

// 2. Guardar automáticamente cada vez que cambie el store
favoritesStore.listen((books) => {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(books)).catch(() => {});
});

export function toggleFavorite(book: Book) {
  const current = favoritesStore.get();
  const exists = current.some((b) => b._id === book._id);

  if (exists) {
    favoritesStore.set(current.filter((b) => b._id !== book._id));
  } else {
    favoritesStore.set([...current, book]);
  }
}
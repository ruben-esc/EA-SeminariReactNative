Se ha hecho uso de Gemini AI Plus en modo Hydrogen.

PROMPTS:

1. Traducción de componentes y vistas al paradigma nativo (FavouriteButton, BookCard y FavouritesList)

"Necesito implementar el store y los componentes de favoritos adaptados a React Native sin etiquetas HTML ni eventos de ratón. ¿Cómo creo src/stores/favorites.ts, cómo implemento FavouriteButton.tsx usando <Pressable>, onPress e iconos de Ionicons (con modo compacto y completo), cómo lo integro en BookCard.tsx y cómo construyo FavouritesList.tsx usando <FlatList> junto a una nueva pestaña en src/app/(tabs)/_layout.tsx?"

Incoherencias: 0

2. Resolución de conflicto de versiones del SDK en Metro Bundler

"Al arrancar el servidor de Expo tras instalar nanostores y @nanostores/react, Metro lanza el error Metro error: (0 , _expolinking(...).unwrapDevLaunchURL) is not a function en expo-router. ¿A qué se debe este fallo en package.json y cómo alinio las dependencias del SDK?"

Incoherencias: 1 (Existía un desajuste de versiones entre expo-router ~57.0.25 y expo-linking ~57.0.12, además de 22 paquetes desactualizados en package.json; se resolvió ejecutando npx expo install --fix y limpiando caché con npx expo start -c). 

3. Corrección de tipado estricto en TypeScript y enrutado basado en archivos

"Tras actualizar los paquetes de Expo, VS Code marca el error de TypeScript Type '__ColorValue_Internal' is not assignable to type 'string | NativeColorValue | undefined' en los componentes Ionicons de src/app/(tabs)/_layout.tsx. Además, la nueva pantalla se ha creado como favourites.tsx. ¿Cómo soluciono el tipado del color y ajusto la configuración de pestañas en Expo Router?"

Incoherencias: 2 (Por un lado, tras la actualización, tabBarIcon tipa color incluyendo null, lo cual es incompatible con Ionicons y se resolvió aplicando String(color); por otro, existía discrepancia ortográfica entre favorites y el archivo real favourites.tsx en (tabs), teniendo que unificar name="favourites" en <Tabs.Screen>).  

4. Implementación de persistencia nativa con AsyncStorage
"La gestión de favoritos funciona correctamente, pero al refrescar o reiniciar la aplicación los datos se pierden porque el atom de Nanostores reside únicamente en memoria RAM. ¿Cómo puedo arreglarlo?"

Incoherencias: 0
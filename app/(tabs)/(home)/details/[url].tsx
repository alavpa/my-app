import { PokemonDetails } from '@/src/models/Pokemons';
import { getPokemon } from '@/src/services/GetPokemon';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function DetailsScreen() {
  const { url } = useLocalSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<PokemonDetails>();

  useEffect(
    () => {
      getPokemon(
        url as string,
        (details) => { setData(details) },
        (error) => { console.error(error) },
        () => { setLoading(false) }
      )
    }
  )

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Stack.Screen options={{ title: data?.name }} />
          <View>
            <Image source={{ uri: data?.sprites.front_default }} style={styles.image} />
            <Text style={styles.title}>{data?.name}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

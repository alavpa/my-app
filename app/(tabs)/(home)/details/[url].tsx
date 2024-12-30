import { PokemonDetails } from '@/src/models/Pokedex';
import getPokemon from '@/src/services/GetPokemon';
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
            <Text>{data?.name}</Text>
            <Image source={{ uri: data?.sprites.front_default }} style={styles.image} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  }
});

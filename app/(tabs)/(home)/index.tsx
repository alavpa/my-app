import React from 'react';
import { PokemonItem } from '@/src/models/Pokemons';
import { getPokemons } from '@/src/services/GetPokemons';
import { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import Item from '@/app/components/Item';

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<PokemonItem[]>([]);


  useEffect(() => {
    getPokemons(
      (response) => { setData(response.results) }, (error) => { console.error(error) }, () => { setLoading(false) }
    );
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.url}
          style={{ width: '100%' }}
          renderItem={({ item }) => (
            <Item item={item}/>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

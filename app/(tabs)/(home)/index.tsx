import { PokemonItem } from '@/app/models/Pokedex';
import getPokemons from '@/app/services/GetPokemons';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

// https://pokeapi.co/api/v2/pokedex

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<PokemonItem[]>([]);


  useEffect(() => {
    getPokemons(
      (response)=>{setData(response.results)},(error)=>{console.error(error)},()=>{setLoading(false)}
    );
  }, []);
  
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({url}) => url}
          renderItem={({item}) => (
            <Link href={{
              pathname: "/details/[id]",
              params: { id: item.url }
            }}>{item.name}</Link>
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

export type PokemonItem = {
    name: string;
    url: string;
};

export type Pokedex = {
    count: number;
    next: string;
    previous: string;
    results: [PokemonItem];
  };
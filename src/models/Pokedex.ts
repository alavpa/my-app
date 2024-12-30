export type PokemonItem = {
    name: string;
    url: string;
};

export type PokemonDetails = {
    name: string;
    sprites: Sprites
};

type Sprites = {
    front_default: string;
}

export type Pokedex = {
    count: number;
    next: string;
    previous: string;
    results: [PokemonItem];
  };

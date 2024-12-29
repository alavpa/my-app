import { Pokedex } from "../models/Pokedex";

const getPokemons = async (onSuccess:(response: Pokedex)=>void, onError: (message?: any)=>void, onLoaded: ()=>void) => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokedex');
        const json = await response.json() as Pokedex;
        onSuccess(json);
      } catch (error) {
        onError(error);
      } finally {
        onLoaded();
      }
    };

    export default getPokemons;
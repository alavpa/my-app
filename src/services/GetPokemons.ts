import { Pokedex } from "../models/Pokedex";

const getPokemons = async (
  onSuccess: (response: Pokedex) => void,
  onError: (error: Error) => void,
  onLoaded: () => void
) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    if (!response.ok) {
      throw Error("Response is not ok")
    }
    const json = await response.json() as Pokedex;
    onSuccess(json);
  } catch (error) {
    onError(error instanceof Error ? error : Error("unknown error"));
  } finally {
    onLoaded();
  }
};

export default getPokemons;
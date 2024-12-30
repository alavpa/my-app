import { PokemonList } from "../models/Pokemons";
import { getLimit } from "./StorageUtils";

export const getPokemons = async (
  onSuccess: (response: PokemonList) => void,
  onError: (error: Error) => void,
  onLoaded: () => void
) => {
  try {
    const limit = await getLimit();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    if (!response.ok) {
      throw Error("Response is not ok")
    }
    const json = await response.json() as PokemonList;
    onSuccess(json);
  } catch (error) {
    onError(error instanceof Error ? error : Error("unknown error"));
  } finally {
    onLoaded();
  }
};

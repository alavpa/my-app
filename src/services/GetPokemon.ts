import { PokemonDetails } from "../models/Pokedex";

const getPokemon = async (
    url: string,
    onSuccess: (response: PokemonDetails) => void,
    onError: (error: Error) => void,
    onLoaded: () => void
) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error("Response is not ok")
        }
        const data = await response.json() as PokemonDetails;
        onSuccess(data);
    } catch (error) {
        onError(error instanceof Error ? error : Error("unknown error"));
    } finally {
        onLoaded();
    }
};

export default getPokemon;
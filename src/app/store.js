import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemon_Api";
import currentPokemonReducer from "../features/currentPokemon/currentPokemonSlice";

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        /*  currentPokemon: currentPokemonReducer, */
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

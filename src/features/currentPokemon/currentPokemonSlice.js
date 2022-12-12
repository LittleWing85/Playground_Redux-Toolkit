import { createSlice } from "@reduxjs/toolkit";
import { CurrentPokemon } from "./CurrentPokemon";

const initialState = [{ name: "pikachu" }];

const currentPokemonSlice = createSlice({
    name: "currentPokemonSlice",
    initialState,
    reducer: {
        currentPokemonChanged(state, action) {
            state.shift();
            state.push(action.payload);
        },
    },
});

export const { currentPokemonChanged } = currentPokemonSlice.actions;

export default CurrentPokemon.reducer;

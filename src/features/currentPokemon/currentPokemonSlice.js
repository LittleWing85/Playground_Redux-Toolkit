import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "pikachu" };

const currentPokemonSlice = createSlice({
    name: "currentPokemonSlice",
    initialState,
    reducers: {
        currentPokemonChanged(state, action) {
            state.name = action.payload.name;
        },
    },
});

export const { currentPokemonChanged } = currentPokemonSlice.actions;

export default currentPokemonSlice.reducer;

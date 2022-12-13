import React from "react";
import "./App.css";
import { Pokemon } from "./features/pokemon/Pokemon";
import { CurrentPokemon } from "./features/currentPokemon/CurrentPokemon";
import { ChangeCurrentPokemonField } from "./features/currentPokemon/ChangeCurrentPokemonField";

function App() {
    return (
        <div>
            <header>
                <CurrentPokemon />
                <ChangeCurrentPokemonField />
            </header>
            <div className="main">
                <Pokemon />
            </div>
        </div>
    );
}

export default App;

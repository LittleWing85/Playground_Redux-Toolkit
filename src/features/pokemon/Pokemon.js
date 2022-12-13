import "./Pokemon.css";
import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "../../app/pokemon_Api";

export function Pokemon() {
    const currentPokemon = useSelector((state) => state.currentPokemon);
    const { data, error, isLoading } = useGetPokemonByNameQuery(
        currentPokemon.name
    );
    return (
        <div className="pokemonInfo">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <img
                        src={data.sprites.front_shiny}
                        alt={data.species.name}
                    />

                    <p>Hand-held item: {data.held_items[0].item.name}</p>
                </>
            ) : null}
        </div>
    );
}

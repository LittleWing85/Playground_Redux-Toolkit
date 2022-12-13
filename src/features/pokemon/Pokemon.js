import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "../../app/pokemon_Api";

export function Pokemon() {
    const currentPokemon = useSelector((state) => state.currentPokemon);
    const { data, error, isLoading } = useGetPokemonByNameQuery(
        currentPokemon.name
    );
    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.species.name}</h3>
                    <img
                        src={data.sprites.front_shiny}
                        alt={data.species.name}
                    />
                </>
            ) : null}
        </div>
    );
}

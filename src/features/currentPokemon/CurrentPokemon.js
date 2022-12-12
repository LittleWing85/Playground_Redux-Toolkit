import { useSelector } from "react-redux";

export function CurrentPokemon() {
    const currentPokemon = useSelector((state) => state.currentPokemon);
    return (
        <div>
            <p>{currentPokemon.name}</p>
            <p>Here you will see the name of the current Pokemon soon</p>
        </div>
    );
}

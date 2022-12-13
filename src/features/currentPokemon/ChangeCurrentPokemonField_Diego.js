import { useDispatch, useSelector } from "react-redux";
import { currentPokemonChanged } from "./currentPokemonSlice";

export function ChangeCurrentPokemonField() {
    const currentPokemon = useSelector((state) => state.currentPokemon);
    const dispatch = useDispatch();

    function onSubmit(event) {
        event.preventDefault();
        const name = event.target.currentPokemon.value;
        dispatch(currentPokemonChanged({ name }));
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="currentPokemon">
                    Please insert the Pokemon you're interested in:
                </label>
                <input
                    type="text"
                    name="currentPokemon"
                    id="currentPokemon"
                    defaultValue={currentPokemon.name}
                ></input>
                <button>Submit Name</button>
            </form>
        </div>
    );
}

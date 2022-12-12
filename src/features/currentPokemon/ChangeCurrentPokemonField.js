import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentPokemonChanged } from "./currentPokemonSlice";

export function ChangeCurrentPokemonField() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    function onNameChanged(event) {
        setName(event.target.value);
    }

    function onSubmit() {
        dispatch(currentPokemonChanged({ name }));
        console.log(name);
        setName("");
    }

    return (
        <div>
            <form>
                <label htmlFor="currentPokemon">
                    Please insert the Pokemon you're interested in:
                </label>
                <input
                    type="text"
                    name="currentPokemon"
                    id="currentPokemon"
                    value={name}
                    onChange={onNameChanged}
                ></input>
                <button type="button" onClick={onSubmit}>
                    Submit Name
                </button>
            </form>
        </div>
    );
}

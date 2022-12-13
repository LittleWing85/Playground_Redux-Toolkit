/* import { useState } from "react"; */
import { useDispatch, useSelector } from "react-redux";
import { currentPokemonChanged } from "./currentPokemonSlice";

export function ChangeCurrentPokemonField() {
    /* const [name, setName] = useState(""); */
    const currentPokemon = useSelector((state) => state.currentPokemon);
    const dispatch = useDispatch();

    /* function onNameChanged(event) {
        setName(event.target.value);
    } */

    /*     function onSubmit() {
        dispatch(currentPokemonChanged({ name }));
        console.log(name);
        setName("");
    } */

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
                <br></br>
                <input
                    type="text"
                    name="currentPokemon"
                    id="currentPokemon"
                    defaultValue={currentPokemon.name}
                    /* value={name} */
                    /* onChange={onNameChanged} */
                ></input>
                <button /* type="button" onClick={onSubmit} */>
                    Submit Name
                </button>
            </form>
        </div>
    );
}

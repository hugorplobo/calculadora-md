import "./sentence.css";
import { useContext, useEffect } from "preact/hooks";
import { State } from "../../app";

export function Sentence({ group, label, value }) {
    const state = useContext(State);

    useEffect(() => {
        console.log(state[`${group}Score`][1]);
    });

    function onClick() {
        state[`${group}Score`] = value;
        console.log(state);
    }

    return (
        <label label htmlFor={group + value} className="sentence">
            <input type="radio" name={group} value={[value.alternative, value.value]} id={group + value} onClick={onClick} checked={state[`${group}Score`][1] == value[1]}/>
            {label}
        </label>
    )
}
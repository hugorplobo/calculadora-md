import { Button } from "../button/button";
import { State } from "../../app";
import { useContext, useState } from "preact/hooks";
import "./score.css";

export function Score() {
    const state = useContext(State);
    const [score, setScore] = useState(state.questionScore);

    function updateScore(event) {
        setScore(event.target.value);
        state.questionScore = Number(event.target.value);
    }

    return (
        <div className="score">
            <h1>Qual a pontuação dessa questão?</h1>
            <input type="number" placeholder="Pontuação máxima" onInput={updateScore} value={score}/>
            <Button text="Próximo" url="/instructions" style={{pointerEvents: score > 0 ? "all" : "none"}}></Button>
        </div>
    )
}
import { State } from "../../app";
import { useContext, useEffect, useState } from "preact/hooks";
import "./calculate.css";

export function Calculate() {
    const state = useContext(State);
    const [score, setScore] = useState(-1);

    useEffect(() => {
        setScore(calculate());
    });

    function calculate() {
        const values = Object.values(state);
        const scores = values.filter(elem => Array.isArray(elem));
        const totalScore = scores.reduce((acc, val) => acc + val[1], scores[0][1]) - scores[0][1];

        if (totalScore >= -2) {
            return totalScore * state.questionScore;
        }

        return -1;
    }

    const calculateForm = (
        <>
            <div className="title">
                <h1>Pontuação final: {score}</h1>
                <h3>Multiplique esse valor pelo critério de diretriz</h3>
            </div>

            <pre className="result">
                {
                    `1. ${state.instructionsScore[0]}\n2. ${state.techniqueScore[0]}\n3. ${state.variablesSpecificationScore[0]}\n4. ${state.variablesUseScore[0]}\n5. ${state.hypothesesScore[0]}\n6. ${state.definitionsScore[0]}\n7. ${state.justifiedAfirmationsScore[0]}\n8. ${state.validArgumentsScore[0]}\n9. ${state.conclusionsScore[0]}\n\nNota final: ${score}`
                }
            </pre>
        </>
    );

    const cantCalculate = <h1 className="title-cant">Não tenho informações o suficiente para calcular a pontuação, verifique se todos os critérios foram respondidos</h1>;

    return (
        <div className="calculate">
            {score > -1 && state.questionScore !== null ? calculateForm : cantCalculate}
        </div>
    )
}
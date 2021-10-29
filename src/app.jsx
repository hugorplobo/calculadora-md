import { SideMenu } from "./components/sideMenu/sideMenu";
import { MainContent } from "./components/mainContent/mainContent";
import { createContext } from "preact";
import "./app.css";

export const State = createContext({});

const stateValue = {
    questionScore: null,
    instructionsScore: ["a", -1],
    techniqueScore: ["a", -1],
    variablesSpecificationScore: ["a", -1],
    variablesUseScore: ["a", -1],
    hypothesesScore: ["a", -1],
    definitionsScore: ["a", -1],
    justifiedAfirmationsScore: ["a", -1],
    validArgumentsScore: ["a", -1],
    conclusionsScore: ["a", -1]
};

export function App() {
    const labels = [
        "Início", "Pontuação", "Instruções", "Técnica", "Variáveis 1", "Variáveis 2", "Hipóteses", "Definições",
        "Afirmações", "Argumentos", "Conclusões", "Calcular"
    ]

    return (
        <State.Provider value={stateValue}>
            <div className="app">
                <SideMenu labels={labels}></SideMenu>
                <MainContent></MainContent>
            </div>
        </State.Provider>
    )
}

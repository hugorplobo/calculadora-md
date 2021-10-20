import { SideMenu } from "./components/sideMenu/sideMenu";
import { MainContent } from "./components/mainContent/mainContent";
import "./app.css";

export function App() {
    const labels = [
        "Início", "Instruções", "Técnica", "Variáveis 1", "Variáveis 2", "Hipóteses", "Definições",
        "Afirmações", "Argumentos", "Conclusões", "Calcular"
    ]

    return (
        <div className="app">
            <SideMenu labels={labels}></SideMenu>
            <MainContent></MainContent>
        </div>
    )
}

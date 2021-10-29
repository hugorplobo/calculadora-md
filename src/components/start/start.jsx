import { Button } from "../button/button";
import "./start.css";

export function Start() {
    return (
        <div className="start">
            <div className="title">
                <h1>Calculadora Matemática Discreta</h1>
                <p>Uma pequena ajuda para as correções de matemática discreta</p>
            </div>
                <Button text="Começar" url="/score"></Button>
        </div>
    )
}
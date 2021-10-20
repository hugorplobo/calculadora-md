import { Sentence } from "../sentence/sentence";
import { Button } from "../button/button";
import "../mainContent/mainContent.css";

export function ContentPage({ name, title, description, sentences, hasPrevious, hasNext }) {
    return (
        <div className={"mainContent " + name}>
            <div className="title">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="sentences">
                {sentences.map(sentence => <Sentence group={name} label={sentence.label} value={sentence.value}></Sentence>)}
            </div>
            <div className="buttons">
                {hasPrevious ? <Button text="Anterior" url="teste"></Button> : null}
                {hasNext ? <Button text="Próximo" url="teste2"></Button> : null}
            </div>
        </div>
    )
}
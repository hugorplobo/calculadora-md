import { Sentence } from "../sentence/sentence";
import { Button } from "../button/button";
import "../mainContent/mainContent.css";

export function ContentPage({ name, title, description, sentences, hasPrevious, hasNext, urlNext, urlPrevious }) {
    return (
        <div className={"mainContent " + name}>
            <div className="title">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="sentences">
                {sentences.map(sentence => <Sentence group={name} label={sentence.label} value={[sentence.alternative, sentence.value]}></Sentence>)}
            </div>
            <div className="buttons">
                {hasPrevious ? <Button text="Anterior" url={urlPrevious}></Button> : null}
                {hasNext ? <Button text="Próximo" url={urlNext}></Button> : null}
            </div>
        </div>
    )
}
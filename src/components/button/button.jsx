import "./button.css";

export function Button({ text, url }) {
    return (
        <a className="button" href={url}>{text}</a>
    )
}
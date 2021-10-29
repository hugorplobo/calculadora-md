import "./button.css";

export function Button({ text, url, style }) {
    return (
        <a className="button" href={url} style={style}>{text}</a>
    )
}
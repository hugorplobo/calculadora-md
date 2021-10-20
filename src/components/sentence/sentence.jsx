import "./sentence.css";

export function Sentence({ group, label, value }) {
    return (
        <label label htmlFor={group + value} className="sentence">
            <input type="radio" name={group} value={value} id={group + value} />
            {label}
        </label>
    )
}
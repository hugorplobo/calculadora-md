import "./sideMenuField.css";

export function SideMenuField({ label, url }) {
    return (
        <a className="sideMenuField" href={url}>{label}</a>
    )
}
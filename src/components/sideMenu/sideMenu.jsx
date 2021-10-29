import { SideMenuField } from "../sideMenuField/sideMenuField";
import "./sideMenu.css";

export function SideMenu({ labels }) {
    const urls = ["/", "/score", "/instructions", "/technique", "/variablesSpecification", "/variablesUse", "/hypotheses", "/definitions", "/justifiedAfirmations", "/validArguments", "/conclusion", "/calculate"];

    return (
        <div className="sideMenu">
            {labels.map((label, index) => <SideMenuField label={label} url={urls[index]}></SideMenuField>)}
        </div>
    )
}
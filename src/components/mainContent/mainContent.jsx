import Router from "preact-router";
import { Instructions } from "../instructions/instructions";
import { Technique } from "../technique/technique";
import { VariablesSpecification } from "../variablesSpecification/variablesSpecification";
import { VariablesUse } from "../variablesUse/variablesUse";
import { Hypotheses } from "../hypotheses/hypotheses";
import { Definitions } from "../definitions/definitions";
import { JustifiedAfirmations } from "../justifiedAfirmations/justifiedAfirmations";
import { ValidArguments } from "../validArguments/validArguments";
import { Conclusions } from "../conclusions/conclusions";
import "./mainContent.css";

export function MainContent() {
    return (
        <Router>
            <div className="mainContent" path="/">Teste</div>
            <Instructions path="/instructions"></Instructions>
            <Technique path="/technique"></Technique>
            <VariablesSpecification path="/variablesSpecification"></VariablesSpecification>
            <VariablesUse path="/variablesUse"></VariablesUse>
            <Hypotheses path="/hypotheses"></Hypotheses>
            <Definitions path="/definitions"></Definitions>
            <JustifiedAfirmations path="/justifiedAfirmations"></JustifiedAfirmations>
            <ValidArguments path="/validArguments"></ValidArguments>
            <Conclusions path="/teste"></Conclusions>
        </Router>
    )
}
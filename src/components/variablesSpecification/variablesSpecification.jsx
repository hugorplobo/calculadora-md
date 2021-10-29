import { ContentPage } from "../contentPage/contentPage";

export function VariablesSpecification() {
    const labels = [
        {label: "Todas as variáveis usadas foram especificadas satisfatoriamente", value: 0.05, alternative: "a"},
        {label: "Houve ocorrências de variáveis não especificadas, porém a compreensão da argumentação foi satisfatória pelo contexto", value: 0.03, alternative: "b"},
        {label: "Muitas variáveis presentes não foram especificadas e a compreensão da argumentação ficou prejudicada", value: 0.1, alternative: "c"}
      ];

    return (
        <ContentPage urlNext="/variablesUse" urlPrevious="/technique" hasNext={true} hasPrevious={true} name="variablesSpecification" title="Variáveis matemáticas – especificação" description="Devemos sempre informar ao leitor qual a natureza e qual o domínio de cada variável matemática presente nas argumentações." sentences={labels}></ContentPage>
    )
}
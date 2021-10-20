import { ContentPage } from "../contentPage/contentPage";

export function VariablesUse() {
    const labels = [
        {label: "Não houve ocorrência de repetição indevida de nomes", value: 0.1},
        {label: "Houve ocorrência de repetição indevida de nomes", value: 0.05}
      ];

    return (
        <ContentPage name="variablesUse" title="Variáveis matemáticas – uso" description="Devemos sempre lembrar que um mesmo nome de variável deve o tempo todo, dentro do mesmo contexto, dizer respeito ao mesmo objeto. Quando não sabemos se o que vamos mencionar é ou não algum dos objetos já citados, devemos sempre usar outro nome" sentences={labels}></ContentPage>
    )
}
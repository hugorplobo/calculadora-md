import { ContentPage } from "../contentPage/contentPage";

export function ValidArguments() {
    const labels = [
        {label: "Todos os argumentos fornecidos eram válidos", value: 0.4},
        {label: "Ocorreram argumentos incorretos, mas foram erros banais por confusão, tendo o colega demonstrado que saberia fazer corretamente", value: 0.38},
        {label: "Ocorreram argumentos incorretos, mas a demonstração não foi tão impactada por eles", value: 0.3},
        {label: "Ocorreram argumentos incorretos que invalidaram a demonstração", value: 0.1}
      ];

    return (
        <ContentPage name="validArguments" title="Argumentos válidos" description="Certos raciocínios de causa e consequência não são válidos em todos os contextos, ou às vezes a justificativa para uma conclusão não se sustenta em todos os casos. Isso também inclui contas erradas. Este critério visa observar a ocorrência desses desvios de argumentação." sentences={labels}></ContentPage>
    )
}
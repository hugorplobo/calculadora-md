import { ContentPage } from "../contentPage/contentPage";

export function Technique() {
    const labels = [
        {label: "As técnicas escolhidas foram corretamente empregadas", value: 0.1},
        {label: "As técnicas escolhidas foram parcialmente bem empregadas, ainda havendo confusão quanto ao seu emprego", value: 0.07},
        {label: "As técnicas escolhidas não foram bem empregadas ou não viabilizam a resolução da questão", value: 0}
      ];

    return (
        <ContentPage name="technique" title="Emprego da técnica correta" description="Quando empregadas as técnicas de demonstração, certos protocolos devem ser seguidos, como quais afirmações podem ser usadas como hipóteses, quais são os novos objetivos de conclusão, se todos os casos foram considerados, etc. Este critério leva em consideração se houve confusão quanto esses aspectos." sentences={labels}></ContentPage>
    )
}
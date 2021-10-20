import { ContentPage } from "../contentPage/contentPage";

export function Hypotheses() {
    const labels = [
        {label: "Todas as hipóteses foram identificadas", value: 0.05},
        {label: "Algumas hipóteses foram feitas sem que fossem identificadas. Isso gerou afirmações sem justificativa aparente", value: 0.01}
      ];

    return (
        <ContentPage name="hypotheses" title="Hipóteses claras" description="Sempre que alguma afirmação é tomada como hipótese, devemos deixar isso claro no texto da argumentação." sentences={labels}></ContentPage>
    )
}
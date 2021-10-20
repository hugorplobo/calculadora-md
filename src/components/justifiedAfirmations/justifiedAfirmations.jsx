import { ContentPage } from "../contentPage/contentPage";

export function JustifiedAfirmations() {
    const labels = [
        {label: "A justificativa para todas as afirmações feitas era de fácil identificação", value: 0.1},
        {label: "Havia afirmações que poderiam ser concluídas pelo raciocínio seguido, porém suas justificativas não estavam fáceis de identificar", value: 0.07},
        {label: "Houve afirmações que não poderiam ser concluídas pelo raciocínio seguido", value: 0.02}
      ];

    return (
        <ContentPage name="justifiedAfirmations" title="Afirmações justificadas" description="Todas as afirmações que fazemos devem ter uma explicação para serem verdadeiras. Essa explicação deve estar clara para o leitor dentro do seu texto a partir de como você as apresenta." sentences={labels}></ContentPage>
    )
}
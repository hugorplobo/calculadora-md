import { ContentPage } from "../contentPage/contentPage";

export function Definitions() {
    const labels = [
        {label: "As instruções foram plenamente obedecidas e de forma satisfatória", value: 0.05, alternative: "a"},
        {label: "As instruções foram obedecidas, mas poderiam ser melhor executadas", value: 0.04, alternative: "b"},
        {label: "As instruções foram obedecidas parcialmente ou não foram executadas corretamente", value: 0.02, alternative: "c"},
        {label: "As instruções não foram obedecidas", value: 0, alternative: "d"}
    ];

    return (
        <ContentPage urlNext="/justifiedAfirmations" urlPrevious="/hypotheses" hasNext={true} hasPrevious={true} name="definitions" title="Uso de definições" description="Todas as informações solicitadas por uma definição devem ser satisfeitas para podermos usá-la. Além disso, quando fazemos uso das propriedades apresentadas por um objeto por definição, elas devem ser corretamente enunciadas." sentences={labels}></ContentPage>
    )
}
import { ContentPage } from "../contentPage/contentPage";

export function Instructions() {
    const labels = [
        {label: "As instruções foram plenamente obedecidas e de forma satisfatória", value: 0.05},
        {label: "As instruções foram obedecidas, mas poderiam ser melhor executadas", value: 0.04},
        {label: "As instruções foram obedecidas parcialmente ou não foram executadas corretamente", value: 0.02},
        {label: "As instruções não foram obedecidas", value: 0}
    ];

    return (
        <ContentPage name="instructions" title="Instruções fornecidas pelos exercícios" description="Certas questões podem incluir instruções quanto à técnica, formato, sequência, etc., de como realizar as resoluções. Este critério leva em consideração o quanto essas instruções foram obedecidas." sentences={labels}></ContentPage>
    )
}
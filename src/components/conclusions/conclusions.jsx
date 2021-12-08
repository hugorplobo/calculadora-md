import { ContentPage } from "../contentPage/contentPage";

export function Conclusions() {
    const labels = [
        {label: "As conclusões necessárias foram alcançadas corretamente", value: 0.1, alternative: "a"},
        {label: "As conclusões necessárias foram alcançadas, porém elas não foram demonstradas para todos os casos do enunciado.", value: 0.05, alternative: "b"},
        {label: "As conclusões necessárias não foram alcançadas ou foram mencionadas sem conexão com a argumentação", value: 0, alternative: "c"}
    ];

    return (
        <ContentPage urlNext="/calculate" urlPrevious="/validArguments" hasNext={true} hasPrevious={true} name="conclusions" title="Conclusões alcançadas" description="Este critério visa, levando em conta as técnicas usadas na argumentação, se as conclusões a que se desejava chegar foram corretamente alcançadas." sentences={labels}></ContentPage>
    )
}
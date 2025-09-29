import { useParams } from "react-router"
import Title from "../components/Title";
import LivroLayout from "../layout/Livro";
import Sobre from "../components/Sobre";
import styled from "styled-components";
import { useLivroQl } from "../graphql/livros/hooks";
import Loader from "../components/Loader";
import { AbTag } from "ds-alurabooks";

const SobreSection = styled.section`
    
    display: flex;
    flex-direction: column; 
    width: 100%;
    align-items: center;
    justify-content: center;

`

const TagsSection = styled.section`

    display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 32px;

`


export default function Livro() {
    const params = useParams();


    // const { data: livro, isLoading, error } = useQuery<ILivro | null>({
    //     queryKey: ['livroPorSlug', params.slug],
    //     queryFn: () => obterLivroPorSlug(params.slug || "")
    // })

    const {data, loading, error} = useLivroQl(params.slug || '');

    if (error) {
        console.log("Alguma coisa deu errada");
        return <h1>Ops! Algum erro inesperado aconteceu: {error.message}</h1>
    }

    if (data?.livro === null) {
        return <h1>Ops! Livro não encontrado</h1>
    }

    return (
            <>
            {loading ? <Loader /> :
                <>
                        <Title texto={data?.livro.titulo || "Livro"} />
                        <LivroLayout autor={data?.livro.autor.nome} livro={data?.livro} />
                        <SobreSection>
                            <Sobre livro={data?.livro} />
                            <Sobre autor={data?.livro.autor} />
                        </SobreSection>
                        <TagsSection>
                        {data?.livro.tags.map(tag => <AbTag texto={tag.nome} />)}
                        </TagsSection>
                    </> }
            </>
    )
}
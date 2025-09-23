
import Title from "../components/Title";
import Main from "../layout/main";
import { obterCategoriaPorSlug, obterPordutosDaCategoria } from "../http";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { useQuery } from "@tanstack/react-query";
// import { useLivros } from "../hooks/useLivros";
import MiniCard from "../components/MiniCard";
import styled from "styled-components";

const Section =  styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 32px;
    margin-bottom: 32px;
    flex-wrap: wrap;
`

const Categoria = () => {

    const params = useParams();

    // const livros = useLivros()

    const { data: categoria, isLoading } = useQuery({
        queryKey: ['categoriaPorSlug', params.slug],
        queryFn: () => obterCategoriaPorSlug(params.slug || ""),
    })
    // const livrosCategoria = livros.filter((livro) => livro.categoria === categoria?.id)

    const { data: livros } = useQuery({
        queryKey: ['buscaLivrosPorCategoria'],
        queryFn: () => obterPordutosDaCategoria(categoria),
        enabled: !!categoria,
      })
      
  
    
    return (
        <Main>
            <Title texto={categoria?.nome ?? ""} />
            {isLoading ? <Loader /> : <Section>
                {livros?.map(livro => (
                    <MiniCard livro={livro} />
                ))}
            </Section>}
        </Main>
    )
}

export default Categoria;
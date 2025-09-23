import { useParams } from "react-router"
import Layout from "../layout/main";
import Title from "../components/Title";
import { useQuery } from "@tanstack/react-query";
import { obterLivroPorSlug } from "../http";
import Loader from "../components/Loader";
import LivroLayout from "../layout/Livro";
import Sobre from "../components/Sobre";
import { useAutores } from "../hooks/useAutores";
import styled from "styled-components";
import type { ILivro } from "../interfaces/ILivros";

const SobreSection = styled.section`
    
    display: flex;
    flex-direction: column; 
    width: 100%;
    align-items: center;
    justify-content: center;

`


export default function Livro() {
    const params = useParams();

    const autores = useAutores()

    const { data: livro, isLoading, error } = useQuery<ILivro | null>({
        queryKey: ['livroPorSlug', params.slug],
        queryFn: () => obterLivroPorSlug(params.slug || "")
    })

    if (error) {
        console.log("Alguma coisa deu errada");
        return <h1>Ops! Algum erro inesperado aconteceu: {error.message}</h1>
    }

    if (livro === null) {
        return <h1>Ops! Livro não encontrado</h1>
    }

    const autor = autores.filter(autor => autor.id === livro?.autor)

    return (
        <Layout>
            {isLoading ? <Loader /> :
                <>
                    <Title texto={livro?.titulo || "Livro"} />
                    <LivroLayout autor={autor[0]?.nome} livro={livro} />
                    <SobreSection>
                        <Sobre livro={livro} />
                        <Sobre autor={autor[0]} />
                    </SobreSection>
                </>
            }
        </Layout>
    )
}
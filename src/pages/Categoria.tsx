
import Title from "../components/Title";
import Main from "../layout/main";
import { obterCategoriaPorSlug } from "../http";
import { useParams } from "react-router";
import MiniCard from "../components/MiniCard";
import styled from "styled-components";
import { useQuery as query } from "@tanstack/react-query";
import { AbCampoTexto } from "ds-alurabooks";
import { useEffect, useState } from "react";
import {useLivrosQl} from "../graphql/livros/hooks";
import { filtroLivrosVar } from "../graphql/livros/state";
// import { useLivros } from "../hooks/useLivros";

const Section =  styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 32px;
    margin-bottom: 32px;
    flex-wrap: wrap;

`

   // const livros = useLivros()

    // const livrosCategoria = livros.filter((livro) => livro.categoria === categoria?.id)

    // const { data: categoria } = query({
    //     queryKey: ['categoriaPorSlug', params.slug],
    //     queryFn: () => obterCategoriaPorSlug(params.slug || ""),
// })
    


const Categoria = () => {
    const params = useParams();

    const [textoDaBusca, setTextoDaBusca] = useState('')

    const { data: categoria } = query({
        queryKey: ['categoriaPorSlug', params.slug],
        queryFn: () => obterCategoriaPorSlug(params.slug || ""),
    })


    // Utiliza a reatividade para mudar os livros postos na página para livros procurados
    // pelo componente de busca
    filtroLivrosVar({
        ...filtroLivrosVar(),
        categoria,
    })

    const { data, refetch } = useLivrosQl()

    const buscarLivros = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (textoDaBusca) {
            // A função faz uma nova requisição para
            // O apolloClient com novas variaveis
            refetch({
                categoriaId: categoria?.id,
                titulo: textoDaBusca
            })
        }
    }


    useEffect(() => {
        // Faz a mudança de estado dos livros comparando o texto 
        // do componente buscar
        filtroLivrosVar({
            ...filtroLivrosVar(),
            titulo: textoDaBusca.length >= 3 ? textoDaBusca: ''
        })
    },[textoDaBusca])

    return (
            <Main>
            <Title texto={categoria?.nome ?? ""} />
            <form onSubmit={buscarLivros} style={{maxWidth: "60%", margin: "0 auto", textAlign: "center",marginTop: "16px"}} action="">
                <AbCampoTexto onChange={setTextoDaBusca} value={textoDaBusca} placeholder="Buscar um livro"/>
            </form>
                <Section>
                    {data?.livros.map(livro => (
                        <MiniCard livro={livro} />
                    ))}
                </Section>
            </Main>
    )
}

export default Categoria;
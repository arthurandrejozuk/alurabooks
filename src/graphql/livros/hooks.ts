import { useQuery, useReactiveVar } from "@apollo/client/react"
import type { ILivro } from "../../interfaces/ILivros"
import { OBTER_DESTAQUES, OBTER_INFORMACOES_LIVRO, OBTER_LIVROS } from "./queries"
import { filtroLivrosVar } from "./state"

// Um hook para busca de livros no GraphQL

export const useLivrosQl = () => {
    // utiliza a variavel reativa, esperando mudança na query
    const filtro = useReactiveVar(filtroLivrosVar);
    // é possivel inserir variaveis para buscar livros com caracteristicas 
    // específicas
    return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: filtro.categoria?.id,
            titulo: filtro.titulo,
        }
    })
}

export const useLivroQl = (slug?: string) => {
    return useQuery<{ livro: ILivro }>(OBTER_INFORMACOES_LIVRO, {
        variables: {
            slug
        }
    })
}

export const useLivrosDestaques = () => {
    return useQuery<{ destaques: { lancamentos: ILivro[], maisVendidos: ILivro[] } }>(OBTER_DESTAQUES)
}


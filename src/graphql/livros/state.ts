import type { ICategoria } from './../../interfaces/ICategoria';
import { makeVar } from "@apollo/client";
import type { ILivro } from "../../interfaces/ILivros";

interface FiltroDeLivros {
    categoria?: ICategoria,
    titulo?: string
}

// Estados reativos permitem mudar o estado do conteudo independente do estado 
// padrão do cache
export const filtroLivrosVar = makeVar<FiltroDeLivros>({})

export const livrosVar = makeVar<ILivro[]>([])
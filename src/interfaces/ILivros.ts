
import type { IAutor } from "./IAutor"
import type { IOpcaoCompra } from "./IOpcao"
import type { ITags } from "./ITags"


export interface ILivro {
    id: number
    categoria: number
    titulo: string
    slug: string
    descricao: string
    isbn: string
    numeroPaginas: number
    publicacao: string
    imagemCapa: string
    autor: IAutor,
    tags: ITags[]
    opcoesCompra: IOpcaoCompra[]
    sobre: string
}
import type { ILivro } from "./ILivros";
import type { IOpcaoCompra } from "./IOpcao";

export interface IItemCarrinho {
    livro: ILivro
    opcaoCompra: IOpcaoCompra
    quantidade: number
}
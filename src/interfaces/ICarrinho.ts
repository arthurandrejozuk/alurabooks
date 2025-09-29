import type { IItemCarrinho } from "./IItemCarrinho";



export interface ICarrinho {
    total: number;
    itens: IItemCarrinho[]
}
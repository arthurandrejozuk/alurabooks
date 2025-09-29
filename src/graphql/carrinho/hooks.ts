
import { useQuery } from "@apollo/client/react"
import { OBTER_CARRINHO } from "./queries"
import type { ICarrinho } from "../../interfaces/ICarrinho"


export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}

import { useQuery } from "@apollo/client/react"
import type { ICategoria } from "../../interfaces/ICategoria"
import { OBTER_CATEGORIAS } from "./queries"

const useCategoriasQl = () => {
    return useQuery<{ categorias: ICategoria[] }>(OBTER_CATEGORIAS)
}

export default useCategoriasQl;
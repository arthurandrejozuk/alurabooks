import { useEffect, useState } from "react"
import type { ICategoria } from "../interfaces/ICategoria";
import http from "../http";

export const useCategorias = () => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);

    useEffect(() => {
        http.get<ICategoria[]>('categorias') 
            .then(res => setCategorias(res.data))
    }, [])
    
    return [categorias]
}
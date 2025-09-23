import { useEffect, useState } from "react"
import http from "../http";
import type { IAutor } from "../interfaces/IAutor";

export const useAutores = () => {
    const [autores, setAutores] = useState<IAutor[]>([]);

    useEffect(() => {
        http.get<IAutor[]>('autores') 
            .then(res => setAutores(res.data))
    }, [])
    
    return autores;
}
import { useEffect, useState } from "react"
import type { ILivro } from "../interfaces/ILivros"
import http from "../http";

export const useLivros = () => {
    const [livros, setLivros] = useState<ILivro[]>([]);

    useEffect(() => {
        http.get<ILivro[]>("livros")
            .then(res => setLivros(res.data));
    },[])
    
    return livros;

}

 
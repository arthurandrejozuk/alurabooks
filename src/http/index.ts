import axios from "axios";
import type { ICategoria } from "../interfaces/ICategoria";
import type { ILivro } from "../interfaces/ILivros";

const http = axios.create({
    baseURL: "http://localhost:8000", 
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
});

http.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
        
    }
    
    return config;

}, function (error) {
  
    return Promise.reject(error);

});

export default http;

export const obterCategoriaPorSlug = async (slug: string) => {
    const res = await http.get<ICategoria[]>("categorias", {
        params: {
            slug
        }
    })
    return res.data[0];
}

export const obterLivroPorSlug = async (slug: string) => {
    const res = await http.get<ILivro[]>('livros', {
        params: {
            slug
        }
    })
    if (res.data.length == 0) {
        return null
    }
    return res.data[0]
}

export const obterLivros = async () => {
    const res = await http.get<ILivro[]>('livros')
    return res.data;
}
 
export const obterPordutosDaCategoria = async (categoria?: ICategoria) => {
    const res = await http.get<ILivro[]>('livros', {
        params: {
            categoria: categoria?.id
        }
    })

    return res.data;
}
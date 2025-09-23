import styled from "styled-components";
import type { ILivro } from "../interfaces/ILivros";
import type { IAutor } from "../interfaces/IAutor";


const Styled = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 64px;
    width: 70%;
    h1{
        font-size: 24px;
        font-weight: 600;
        color: #002f52;
        margin-bottom: 8px;
        text-decoration: underline;
        text-decoration-color: #EB9B00;
        text-underline-offset: 8px;
        padding-bottom: 12px;
    }
    p{
        font-size: 16px; 
    }
   
    
`

export default function Sobre({ livro, autor }: { livro?: ILivro, autor?:IAutor}) {
    return (
        <Styled key={livro?.id || autor?.id}>
            <h1>{livro?.titulo || autor?.nome}</h1>
            <p>{livro?.sobre || autor?.sobre}</p>
        </Styled>
    )
}
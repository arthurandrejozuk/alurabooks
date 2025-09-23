import { AbBotao } from "ds-alurabooks"
import styled from "styled-components"
import type { ILivro } from "../interfaces/ILivros"
import { useNavigate } from "react-router"

const Card = styled.div`

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    strong{
        font-weight: 600;
    }
    img{
        width: 280px;
    }
    button{
        width: 200px;
    }
`

export default function MiniCard({livro}:{livro: ILivro}) {

    const navigate = useNavigate();

    return (
        <Card>
            <img src={livro.imagemCapa} alt={livro.titulo} />
            <p><strong>{livro.titulo}</strong></p>
            <p>A partir de: R${livro.opcoesCompra[0].preco?.toFixed(2)}</p>
            <AbBotao onClick={() => navigate(`/livros/${livro.slug}`)} texto="Comprar"/>
        </Card>
    )
}
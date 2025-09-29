import { AbInputQuantidade } from "ds-alurabooks"
import styled from "styled-components"

import type { IItemCarrinho } from "../interfaces/IItemCarrinho"



const Container = styled.div`

    display: flex;
    align-items: start;
    width: 100%;
    gap: 8px;
    margin: 32px 0px; 
    max-width: 800px;
    .imagem_capa{
        width: 180px;
    }
    .container_informacao{
        display: flex;
        gap: 16px;
        .informacao_livro{
            display: flex;
            flex-direction: column;
            justify-content: start;
            gap: 20px;
            align-items: start;
            margin-right: 32px;
            h1{
                font-size: 32px;
                font-weight: 600;
                color: #002f52;
            }
        }
    }
    .container_opcoes_livro{
        display: flex;
        align-items: start;
        justify-content: space-around;
        gap: 80px;
        .opcoes_livro{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
            span{
                font-weight: 700;
                 color: #002f52;
            }
        }
        .delete{
            cursor: pointer;
        }
    }

`

export default function ItemCarrinho({item}: {item:IItemCarrinho}) {
    
    return (
        <Container>
            <div className="container_informacao">
                <img className="imagem_capa" src={item.livro.imagemCapa} alt="" />
                <div className="informacao_livro">
                    <h1>
                        {item.livro.titulo}
                    </h1>
                    <p>
                        {item.livro.descricao}
                    </p>
                    <p>
                    Por: {item.livro.autor.nome}
                    </p>
                </div>
            </div>
            <div className="container_opcoes_livro">
                <div className="opcoes_livro">
                    <span>
                        Preço:
                    </span>
                    <p>
                        R${item.opcaoCompra.preco?.toFixed(2)}
                    </p>
                </div>
                <AbInputQuantidade />
                <img className="delete" src="https://github.com/alura-cursos/alurabooks-graphql-pt2/blob/aula-1/src/paginas/Carrinho/ItemCarrinho/assets/lixeira.png?raw=true" alt="" />
            </div>
        </Container>
    )
}
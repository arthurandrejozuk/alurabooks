import styled from "styled-components";
import type { ILivro } from "../interfaces/ILivros";
import { useState } from "react";

const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 32px;
    h1{
        padding-bottom: 32px;
        align-self: center;
        font-size: 32px;
        color: orange;
        font-weight: 600;
    }
    @media(max-width: 764px){
        h1{
            font-size: 24px;
        }
    }
`

const Section = styled.section`

        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        padding-top: 32px;
        padding-bottom: 32px;
        background-color: #EBECEE;
        flex-wrap: wrap;
        .livros{
            img{
                width: 240px;
            }
        }
            .livro{
                transition: 500ms;
                cursor: pointer;
              
            }
            .livro:hover{
                transform: scale(1.1);
                transition: 500ms;
            }
        
        .info__livro{
            display: grid;
            width: 400px;
            height: 250px;
            margin-top: 32px;
            margin-bottom: 32px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            align-items: center;
            justify-content: space-between;
            background-color: white;
            border-radius: 12px;
            box-shadow: 4px 8px 16px 0px #00000071;
            padding: 24px 32px;
            .info__livro_sobre{
                grid-area: sobre;
                padding: 0px;
                font-size: 30px;
                font-weight: 600;
                color: #ffa600;
            }
            .info__livro_title_desc{
                grid-area: title;
                display: flex;
                flex-direction: column;
                gap: 16px;
                width: 80%;
                h3{
                    font-size: 20px;
                    color: #002F52;
                    font-weight: 600;
                }
                p{
                    font-size: 16px;
                }
            }
            .info__livro_price{
                grid-area: price;
                display: flex;
                flex-direction: column;
                gap: 4px;
                p{
                    font-size: 14px;
                }
                h2{
                    font-size: 24px;
                    font-weight: 600;
                    color: #002F52;
                }
            }
            .info__livro_icons{
                grid-area: icons;
                justify-self: end;
                display: flex;
                gap: 4px;
                img{
                    cursor: pointer;
                }
            }
            .button{
                grid-area: button;
                border: none;
                padding: 12px;
                font-size: 20px;
                font-weight: 600;
                color: white;
                background-color: #ffa600;
                cursor: pointer;
            }
            .button:hover{
                color: white;
                background-color: #d18903d8;
            }
            grid-template-areas:
            "sobre icons"
            "title title"
            "price button"; 
        }
        @media(max-width: 764px){
            padding: 16px;
          
            .livros{
                display: flex;
                overflow: scroll;
                img{
                    width: 200px;
                }
            }
        }
       

`


export default function Destaque({ title, livros }: { title: string, livros: ILivro[] }) {
    
    const [livroFocado, setLivroFocado] = useState<ILivro>(livros[0])

    return (
        <Container>
        <h1 className="titulo">{title}</h1>
            <Section>
                    <div className="livros">
                        {livros.map(item => (
                            <img className="livro" onClick={() => setLivroFocado(item)} src={item.img} alt={item.title} />
                        ))}
                    </div>
                    <div className="info__livro">
                        <h1 className="info__livro_sobre">
                            Sobre o livro:
                        </h1>
                        <div className="info__livro_title_desc">
                            <h3>
                                {livroFocado?.title}
                            </h3>
                            <p>
                                {livroFocado?.desc}
                            </p>
                        </div>
                        <div className="info__livro_price">
                            <p>A partir de:</p>
                            <h2>R${livroFocado?.preco}</h2>
                        </div>
                        <div className="info__livro_icons">
                            <img src="/src/assets/Sacola.png" alt="" />
                            <img src="/src/assets/Favoritos.png" alt="" />
                        </div>
                        <button className="button">Comprar</button>
                    </div>
            </Section>
        </Container>
    )
}
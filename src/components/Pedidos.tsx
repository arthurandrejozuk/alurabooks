import styled from "styled-components"

import { useEffect, useState } from "react";
import type { IPedidos } from "../interfaces/IPedidos";
import http from "../http";

// const pedidos: IPedidos[] = [
//     {
//         pedidoNumber: "3131413515",
//         dataPedido: "06/12/2024",
//         valor: "200",
//         dataEntrega: "07/12/2024"
//     },
//     {
//         pedidoNumber: "31315890515",
//         dataPedido: "12/10/2024",
//         valor: "100",
//         dataEntrega: "20/10/2024"
//     }
// ]

const Section = styled.section`
    
    display: flex;
    justify-content: center;
    padding: 80px 40px;
    margin-left: 25%;
    margin-right: 5%;
    gap: 80px;
    
    .container__pedidos_options{
        .pedidos__list_options{
            display: flex;
            flex-direction: column;
            
            gap: 12px;
            .pedidos__list_option{
                color: #002F52;
                border-bottom: 2px solid #00498030;
                padding: 20px;
                text-align: center;
                cursor: pointer;
                transition: 200ms;
            }
            .pedidos__list_option:hover{
                font-weight: 700;
                border-bottom: 2px solid;

            }
        }
    }
    .container__pedidos{
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;
        .pedidos__title{
            font-size: 24px;
            font-weight: 600;
        }
        .pedido{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 60%;
            padding: 40px 10px;
            border-bottom: 1px solid #326589;
            .container__pedido__info{
                gap: 4px;
                display: flex;
                flex-direction: column;
                span{
                    font-weight: 600;
                }
            }
            button{
                align-self: flex-end;
                border: none;
                padding: 12px;
                background-color: orange;
                color: white;
                font-weight: 600;
                font-size: 16px;
                margin-left: 32px;
                cursor: pointer;
            }
            button:hover{
                background-color: #d68c03;
            }
        }
    }

    @media(max-width: 768px){
        margin: 0%;
        flex-wrap: wrap;
        .container__pedidos_options{
            .pedidos__list_options{
                width: auto;
            }
        }
        .container__pedidos{
            .pedido{
                width: 100%;
            }
        }
        .container__pedidos_options{
            .pedidos__list_options{
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                 .pedidos__list_option{
                    padding: 12px;
                 }
            }
        }
    }

`


export default function Pedidos() {

    const [pedidos, setPedidos] = useState<IPedidos[]>([])

    useEffect(() => {

        http.get<IPedidos[]>("pedidos").then(res => setPedidos(res.data)).catch(err => {console.log(err, "Erro no interceptor")})
    }, [])

    return (
        <Section>
            <div className="container__pedidos_options">
                <ul className="pedidos__list_options">
                    <li className="pedidos__list_option">
                        Pedidos
                    </li>
                    <li className="pedidos__list_option">
                        Trocas
                    </li>
                    <li className="pedidos__list_option">
                        Cupons
                    </li>
                    <li className="pedidos__list_option">
                        Seus dados
                    </li>
                </ul>
            </div>
            <div className="container__pedidos">
                <h1 className="pedidos__title">Pedidos</h1>
                {pedidos.map(pedido => (
                    <div className="pedido">
                        <div className="container__pedido__info">
                            <p className="pedido__info">Pedido: <span>{pedido.id}</span></p>
                            <p className="pedido__info">Data do pedido: <span>{new Date(pedido.data).toLocaleDateString()}</span></p>
                            <p className="pedido__info">Valor total: <span>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(pedido.total)}</span></p>
                            <p className="pedido__info">Entrega realizada em: <span>{new Date(pedido.entrega).toLocaleDateString()}</span></p>
                        </div>
                        <button>Detalhes</button>
                    </div>
                ))}
            </div>
        </Section>
    )
}
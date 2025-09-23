import styled from "styled-components";
import type { ILivro } from "../interfaces/ILivros";
import { AbBotao, AbGrupoOpcoes, AbInputQuantidade } from "ds-alurabooks";
import type { IOpcaoCompra } from "../interfaces/IOpcao";
import { useState } from "react";

const Section = styled.section`
    
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 32px;
margin-top: 32px;
margin-bottom: 32px;
.informacoes{
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    h1{
        font-weight: 600;
        font-size: 24px;
        color: #002f52;
    }
    .sobre{
        display: flex;
        flex-direction: column;
        gap: 12px;
        .sobre__desc{
            font-size: 14px;
        }
    }
    .opcoes{
        display: flex;
        flex-direction: column;
        gap: 12px;
        .opcoes__valor{
            display: flex;
        }
    }
    .quantidade{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 12px;
    }
}
`

export default function LivroLayout({ livro, autor }: { livro?: ILivro, autor?: string }) {

  const opcoesCompraConvertidas = livro?.opcoesCompra?.map((opcao: IOpcaoCompra) => ({
    id: opcao.id,
    titulo: opcao.titulo,
    corpo: `Preço: R$ ${opcao.preco?.toFixed(2) ?? ''}`,
    rodape: `${Array.isArray(opcao.formatos) ? opcao.formatos.join(', ') : ''}`
  }));

    return (
        <Section>
            <img src={livro?.imagemCapa} alt={livro?.titulo} />
            <div className="informacoes">
                <div className="sobre">
                    <h1>
                        {livro?.titulo}
                    </h1>
                    <p className="sobre__desc">
                        {livro?.descricao}
                    </p>
                    <p>
                        Por: {autor}
                    </p>
                </div>
                <div className="opcoes">
                    <p className="opcoes__text">
                        Selecione o formato de seu livro:
                    </p>
                    <div className="opcoes__valor">
                        <AbGrupoOpcoes opcoes={opcoesCompraConvertidas ?? []} />
                    </div>
                    <span>*Você terá acesso às futuras atualizações do livro.</span>
                </div>
                <div className="quantidade">
                    <AbInputQuantidade />
                    <AbBotao texto="Comprar"/>
                </div>
            </div>
        </Section>
    )

}
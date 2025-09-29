
import styled from "styled-components";
import { useCarrinho } from "../graphql/carrinho/hooks"
import ItemCarrinho from "../components/ItemCarrinho";
import { AbBotao } from "ds-alurabooks";
import Title from "../components/Title";

const Section = styled.section`
    
display: flex;
flex-direction: column;
align-items: center;
.itens{
    display: flex;
    flex-direction: column;

    margin-top: 32px;
}
.itens_text{
    font-weight: 600;
    font-size: 20px;
    

}
.itens_home{
    padding-bottom: 24px;
}
.itens_total{
    margin-bottom: 32px;
    border-top: 1px solid;
    padding-top: 32px;
    display: flex;
    align-items: end;
    align-items: center;
    gap: 32px;
    justify-content: end;
    padding-bottom: 32px;
    span{
        font-weight: 700;
    }
}
`

export default function Carrinho() {

    const {data} = useCarrinho();

    return (
        <Section>
            <Title texto="Minha sacola"/>
            <div className="itens">
                <p className="itens_text">Itens selecionados</p>
                {data?.carrinho.itens.map(item => (
                    <ItemCarrinho item={item} />   
                ))}
                <a className="itens_home" href="/">Continuar comprando</a>
                <div className="itens_total">
                    <p>Total da compra: </p>
                    <span>R$ {data?.carrinho.total.toFixed(2)}</span>
                    <AbBotao texto="Finalizar compra"/>
                </div>
            </div>
        </Section>
    )
}
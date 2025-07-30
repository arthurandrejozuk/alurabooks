import styled from "styled-components"

const Section = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 40px;
    background-color: #002F52;
    margin-bottom: 32px;
    h1{
        font-size: 32px;
        font-weight: 300;
        color: white;
        margin-bottom: 20px;
    }

    .categorias {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        width: 50%;
        button{
            font-size: 24px;
            font-weight: 600;
            border: none;
            background-color: orange;
            color: white;
            padding: 24px 12px;
            cursor: pointer;
            transition: 500ms;
        }
        button:hover{
            transform: scale(1.1);
        }
    }
    @media(max-width: 1024px){
       .categorias{
        width: auto;
       }
    }
`;


const categorias = ["Android","OO","Marketing Digital", "Agile", "Startups", "HTML & CSS", "Java", "Python"]

export default function BuscaCategoria() {
    return (
        <Section>
            <h1>CATEGORIAS MAIS BUSCADAS</h1>
            <div className="categorias">
                {categorias.map(categoria => (
                    <button>{categoria}</button>
                ))}
            </div>
        </Section>
    )
}
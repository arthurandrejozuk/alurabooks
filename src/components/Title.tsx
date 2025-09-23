import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(25deg,rgba(0, 47, 82, 1), rgba(50, 101, 137, 1));
    width: 100%;
    padding: 32px;
    h1{
        font-size: 28px;
        font-weight: 700;
        color: #fff;
    }
`

export default function Title({texto}:{texto:string}) {
    return (
        <Container>
            <h1>{texto}</h1>
        </Container>
    )
}
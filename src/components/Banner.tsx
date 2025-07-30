import { useState } from "react"
import styled from "styled-components"

const Container = styled.section`
    
    
    background: linear-gradient(25deg, #002F52, #326589);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    gap: 12px;
    h1{
        font-weight: 700;
        font-size: 30px;
    }
    input{
        text-align: center;
        padding: 14px;
        text-align: center;
        width: 320px;
        border-radius: 16px;
        border: 1px solid #fff;
        font-size: 16px;
        background-color: transparent;
        color: #fff;
    }
    input::placeholder{
        color: #fff;
    }
    .pesquisa{
        display: flex;
        align-items: center;
        margin-top: 16px;
        img{
            position: relative;
            left: 44px;
        }
    }
    @media(max-width: 1024px){
        input::placeholder{
            font-size: 16px;
        }
        input{
            font-size: 16px;
        }
       
    }
`

export default function Banner({title, main}:{title: string, main: boolean}) {

    const [value, setValue] = useState("");
    
    // 

    return (
        <Container>
            <h1>{title}</h1>
            {
                main ?
                    <>
                        <p>Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
                        <div className="pesquisa">
                            {value == "" ? <img src="/src/assets/Lupa.png" alt="" /> : <></>}
                            <input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Qual será sua próxima leitura?" type="text" />
                        </div> 
                    </>
                    : null
            }
        </Container>
    )
}
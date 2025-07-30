import { useState } from "react"
import styled from "styled-components"

const Section = styled.section`
    
    display: flex;
    flex-direction: row;
    padding: 32px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-bottom: 1px solid gray;
    padding-bottom: 60px;
    img{
        
    }
    .newsletter__desc{
        display: flex;
        flex-direction: column;
        gap: 16px;
        
        h2{
            font-size: 24px;
      
            font-weight: 500;
            color: #002F52;
        }
        p{
            
             font-size:16px;
             color: #002F52;
        }
    }
    .newletter__input{
        display: flex;
        align-items: center;
        position: static;
        right: 32px;
        input{
            padding: 12px 24px;
            border-radius: 24px;
            border: 1px solid #002F52;
           
            font-size: 20px;
            padding-left: 50px;
        }
        input::placeholder{
            color: #002F52;
          
        }
        img{
            position: relative;
            left: 48px;
        }
    }
    @media(max-width: 1024px){
        flex-wrap: wrap;
        justify-content: start;
    }
`

export default function Newsletter() {
    const [value, setValue] = useState('')
    return (
       <Section>
            <div className="newsletter__desc">
                <h2>Fique por dentros das novidades!</h2>
                <p>Atualizações de e-books, novos livros, promoções e outros.</p>
            </div>
            <div className="newletter__input">
                <img src="/src/assets/mail_black_24dp 1.png" alt="" />
                <input onChange={(event) => setValue(event.target.value)} value={value} type="text" placeholder="Cadastre seu e-mail" />
            </div>
       </Section> 
    )
}
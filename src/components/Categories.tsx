import styled from "styled-components"

const Ul = styled.div`
    
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    background-color: #f8f8f8;
    list-style: none;
    li{
        padding: 20px 16px;
        
        a{
            text-decoration: none;
            color: #000;
        }
    }
    li:hover{
        cursor: pointer;
        background: linear-gradient(25deg,#002F52, #326589);
        a{
            color: #fff
        }
    }
    @media(max-width: 764px){
        left: 12px ;
    }

`

export default function Categories({ativa}: {ativa: boolean}) {

    if (ativa) {
        return (
             <Ul>
                <li>
                    <a href="">PROGRAMAÇÃO</a>
                </li>
                <li>
                    <a href="">FRONT-END</a>
                </li>
                <li>
                    <a href="">INFRAESTRUTURA</a>   
                </li>
                <li>
                    <a href="">DESIGN & UX</a>
                </li>
                <li>
                    <a href="">BUSINESS</a>
                </li>
            </Ul>
        )
    }
           
       
    }
   

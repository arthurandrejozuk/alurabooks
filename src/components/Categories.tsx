
import styled from "styled-components"
import { useCategorias } from "../hooks/useCategorias"
import { useNavigate } from "react-router";

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

    const [categorias] = useCategorias();
    const navigate = useNavigate();
    
    if (ativa) {
        return (
            <Ul>
                {categorias.map(categoria => (
                     <li onClick={() => navigate(`/categorias/${categoria.slug}`)} key={categoria.id}>
                        <a href={`/categorias/${categoria.slug}`}>{categoria.nome}</a>
                    </li>
                )
                )}
            </Ul>
        )
    }     
}
   

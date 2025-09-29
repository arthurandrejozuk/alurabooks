
import styled from "styled-components"
import { useNavigate } from "react-router";
import useCategoriasQl from "../graphql/categorias/hooks";

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

    const { data } = useCategoriasQl();
    const navigate = useNavigate();
    
    if (ativa) {
        return (
            <Ul>
                {data?.categorias.map(categoria => (
                     <li onClick={() => navigate(`/categorias/${categoria.slug}`)} key={categoria.id}>
                        <a href={`/categorias/${categoria.slug}`}>{categoria.nome}</a>
                    </li>
                )
                )}
            </Ul>
        )
    }     
}
   

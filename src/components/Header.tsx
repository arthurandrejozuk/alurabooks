
import styled from "styled-components"
import Categories from "./Categories";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ModalContext } from "../context/ModalContext";


const HeaderStyled = styled.div`
    
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    padding-top: 20px ;
    padding-bottom: 20px;
    .menu_ham{
        display: none;
    }
    .container__options_books{
        display: flex;
        align-items: center;
        justify-content: center;
        .list__options_books{
            display: flex;
            align-items: center;
            gap: 12px;
            
            /* .list__option_category:hover{
            
                .categorias{
                    display: block;
                    
                }
            }
             .list__option_category{
                .categorias{
                    display: none;
                
                }
            } */
            .option{
                text-decoration: none;
                gap: 12px;
                color: #000;
                padding: 12px;
                background-color: white;
            }
            .option:hover{
                background: linear-gradient(25deg,#002F52, #326589);
                color: #fff;
            }
        }
    }
    .container__options_icon{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        .icon__option{
            display: flex;
            align-items: center;
            text-decoration: none;
            justify-content: center;
            padding: 12px;
            gap: 4px;
            color: #000;
            .icon__option_logout{
                cursor: pointer;
            }
        }
    }

    @media(max-width: 1024px){
        .container__options_icon{
            .icon__option{
                p{
                    display: none;
                }
            }
        }
    }
    @media(max-width: 762px){
        justify-content: space-between;
        padding: 12px;
        .menu_ham{
            display: flex;
        }
        .ativo{
            background-image: linear-gradient(25deg, #002F52, #326589);
            
        }
        .container__options_books{
            align-items: center;
            
            gap: 12px;
            .list__options_books{
                display: none;
            }
            .logo{
                display: none;
            }
            .menu_ham{
                padding: 4px;
            }
        }
        .container__options_icon{
            gap: 8px;
            .icon__option{
                padding: 4px;
                
            }
        }
    }

`

export default function Header() {
    const { modal, setModal } = useContext(ModalContext);
    const [ativa, setAtiva] = useState(false);
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token');
   

    const efetuarLogout = () => {
        sessionStorage.removeItem('token')
        navigate('/')
    }

    const lc = () => {
        setModal(!modal);
    }

    return (
        <HeaderStyled>
            <div className="container__options_books">
                <img onClick={() => setAtiva(!ativa)} className={`menu_ham ${ativa ? "ativo" : ""} `} src={ativa ? "/src/assets/menu_white.png" : "/src/assets/menu_black.png"} alt="" />
                <a href="/">
                    <img className="logo" src="/src/assets/Logo.png" alt="" />
                </a>
                <div className="categorias">
                    <Categories ativa={ativa} />
                </div>
                <ul className="list__options_books">
                    <li onClick={() => setAtiva(!ativa)} className="list__option_category" >
                        <a className="option" href="#">CATEGORIAS</a>
                    </li>
                    <li className="list__option_favorite">
                        <a className="option" href="#">FAVORITOS</a>
                    </li>
                    <li className="list__option_mybooks">
                        <a className="option" href="#">MINHA ESTANTE</a>
                    </li>
                </ul>
            </div>
            <div className="container__options_icon">
                {token ?
                    <>         
                        <a  className="icon__option" href="/pedidos">
                            <img src="/src/assets/Group.png" alt="" />
                            <p>Minha sacola</p>
                        </a> 
                    </>
                    : 
                    <a onClick={lc} className="icon__option" href="#">
                        <img src="/src/assets/Group.png" alt="" />
                        <p>Minha sacola</p>
                    </a> 
                }
                {token ?
                    <>
                        <a className="icon__option" href="#">
                            <img src="/src/assets/Vector.png" alt="" />
                            <p>Meu perfil</p>
                        </a>
                        <a onClick={efetuarLogout} className="icon__option">
                            <p className="icon__option_logout">Sair</p>
                        </a>
                    </>
                :
                <a onClick={lc} className="icon__option" href="#">
                    <img src="/src/assets/Vector.png" alt="" />
                    <p>Login</p>
                </a>
                }
            </div>
        </HeaderStyled>
    )
}
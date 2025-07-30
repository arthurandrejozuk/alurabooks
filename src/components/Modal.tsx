import { useContext, useState } from "react";
import styled from "styled-components"
import type { IModal } from "../interfaces/IModal";
import { ModalContext } from "../context/ModalContext";

const Background = styled.div`

  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`

    background-color: #fff;
    padding: 40px;
    display: flex;
    align-items: center;
    gap: 32px;
    border-radius: 24px;
    flex-wrap: wrap;
    .image{
        img{
            width: 300px;
        }
    }
    .container__login{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        .title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            h1{
                font-size: 28px;
                font-weight: 600;
                color: #EB9B00;
            }
            img{
                cursor: pointer;
                padding-bottom: 8px;
            }
        }
        .container__login_input{
            display: flex;
            flex-direction: column;
            align-self: start;
            gap: 4px;
            input{
                font-size: 20px;
                border-radius: 24px;
                border: 1px solid #002F52;
                padding: 8px 12px;
                width: 400px;
            }
            input::placeholder{
                font-size: 16px;
            }
            .password_show{
                position: relative;
                width: 35px;
                border: none;
                background-color: transparent;
                cursor: pointer;
                left: 380px;
                bottom: 31px;
            }
        }
        .container__button{
            display: flex;
            gap: 40px;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            padding-left: 12px;
            padding-right: 12px;
            padding-bottom: 32px;
            border-bottom: 1px solid #002F52;
            a{
                font-size: 16px;
                color: #002F52;
            }
            button{
                padding: 12px 16px;
                border: none;
                color: #fff;
                background-color: #EB9B00;
                font-weight: 600;
                font-size: 18px;
                cursor:pointer;
            }
            button:hover{
                background-color: #d38d03c6;
            }
        }
        .container__cadastro{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            button{
                padding: 12px 16px;
                border: none;
                color: #fff;
                background-color: #EB9B00;
                font-weight: 600;
                font-size: 18px;
                cursor:pointer;
            }
            button:hover{
                background-color: #d38d03c6;
            }
            p{
                font-size: 22px;
                font-weight: 600;
                color: #002F52;
            }
        }
    }

    @media(max-width: 768px){
        justify-content:center;
        .image{
            img{
                width: 200px;
            }    
        }
        .container__login{
            .container__login_input{
                input{
                    width: 300px;
                }
            }
            .container__button{
                button{
                    padding: 12px;
                }
            }
            .container__cadastro{
                font-size: 20px;
                button{
                    width: 50%;
                    padding: 12px;
                }
            }
        }
    }
`

export default function Modal({open, close, title, labelEmail, labelSenha, button, isSignin, children, values, onChange, onSubmit}: IModal) {

    const [showPassword, setShowPassword] = useState("password")
    
    function show() {
        if (showPassword == "password") {
            setShowPassword("text")
        } else {
            setShowPassword("password")
        }
    }

    const { login, setLogin } = useContext(ModalContext);


    if (open) {
        return(
            <Background>
                <ModalContent>
                    <div className="image">
                         <img src="/src/assets/Login-amico 1.png" alt="" />
                    </div>
                    <div className="container__login">
                        <div className="title">
                            <h1>{title}</h1>
                            <img onClick={close} src="/src/assets/close_black_24dp 1.png" alt="" />
                        </div>
                        <div className="container__login_input">
                            <label htmlFor="">{labelEmail}</label>
                            <input name="email" onChange={onChange} value={values.email} type=""  placeholder="seuemail@maneiro.com.br"/>
                            <label htmlFor="">{labelSenha}</label>
                            <input name="senha" onChange={onChange} value={values.senha} type={showPassword} placeholder="**************" />
                            <button className="password_show" onClick={show}>
                                <img src="/src/assets/eye.png" alt="" />
                            </button>
                            {children}
                        </div>
                        <div className="container__button">
                            {!isSignin ? <a href="">Esqueci minha senha</a> : null}
                            <button onClick={onSubmit}>{button}</button>
                        </div>
                    {!isSignin ?
                        <div className="container__cadastro">
                            <p>Ainda não tem conta?</p>
                            <button onClick={() => setLogin(false)} >Criar conta</button>
                            </div> : null}
                    {!login ?
                        <div className="container__cadastro">
                            <p>Já tenho conta!</p>
                            <button onClick={() => setLogin(true)} >Ir para login</button>
                        </div> : null}                        
                    </div>
                </ModalContent>
            </Background>
        )
    }

}
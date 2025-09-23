
import { useContext } from "react";
import UsuarioProvider from "../context/UsuarioContext";
import { ModalContext } from "../context/ModalContext";
import Header from "../components/Header";
import Login from "../components/Login";
import Cadastro from "../components/Cadastro";
import Rodape from "../components/Rodape";


export default function Layout({ children }: { children: React.ReactNode }) {


     const { modal, setModal, login } = useContext(ModalContext);
  
  return (
      
      <UsuarioProvider>
          <Header openModal={() => setModal(!modal)} />
          {login ? <Login open={modal} close={() => setModal(false)} /> : <Cadastro open={modal} close={() => setModal(false)}/>} 
          {children}
          <Rodape/>
        </UsuarioProvider>
    )
}
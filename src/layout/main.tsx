
import { useContext } from "react";
import UsuarioProvider from "../context/UsuarioContext";
import { ModalContext } from "../context/ModalContext";
import Header from "../components/Header";
import Login from "../components/Login";
import Cadastro from "../components/Cadastro";
import Rodape from "../components/Rodape";
import Newsletter from "../components/Newsletter";
import BuscaCategoria from "../components/BuscaCategorias";


export default function Layout({ children }: { children: React.ReactNode }) {


     const { modal, setModal, login } = useContext(ModalContext);
  
  return (
      
      <UsuarioProvider>
          <Header openModal={() => setModal(!modal)} />
          {login ? <Login open={modal} close={() => setModal(false)} /> : <Cadastro open={modal} close={() => setModal(false)}/>} 
          {children}
          <BuscaCategoria/>
          <Newsletter/>
          <Rodape/>
        </UsuarioProvider>
    )
}
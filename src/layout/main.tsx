
import { useContext } from "react";
import UsuarioProvider from "../context/UsuarioContext";
import { ModalContext } from "../context/ModalContext";
import Header from "../components/Header";
import Login from "../components/Login";
import Cadastro from "../components/Cadastro";
import Rodape from "../components/Rodape";


export default function MainLayout({ children }: { children: React.ReactNode }) {

  const { login, modal, setModal } = useContext(ModalContext);
     
  return (
      <UsuarioProvider>
          <Header />
          {login ? <Login open={modal} close={() => setModal(false)} /> : <Cadastro open={modal} close={() => setModal(false)}/>} 
          {children}
          <Rodape/>
      </UsuarioProvider>
    )
}
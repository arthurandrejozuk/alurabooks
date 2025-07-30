import { useContext, useState } from "react";
import Modal from "./Modal";
import { ModalContext } from "../context/ModalContext";
import http from "../http";

export default function Cadastro({ open, close }: { open: boolean, close: () => void }) {
    
    
    const [valueCadastro, setValueCadastro] = useState({      
        nome: "",
        email: "",
        senha: "",
        endereco: "",
        telefone: "",
        complemento: "",
        cep: ""  
    })
    
    const { setModal } = useContext(ModalContext);

    function handleCadastro() {

        http.post('public/registrar', valueCadastro)
            .then(() => {
                alert("Usuário registrado")
                setValueCadastro({
                    nome: "",
                    email: "",
                    senha: "",
                    endereco: "",
                    telefone: "",
                    complemento: "",
                    cep: ""
                }) 
                setModal(false);
            }).catch((err)=> {alert("Alguma coisa deu errado: " + err)})
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValueCadastro((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <Modal
            onSubmit={handleCadastro}
            onChange={(e) => setValueCadastro((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            }))}
            labelEmail="E-mail"
            labelSenha="Senha"
            title="CADASTRO"
            isSignin={true}
            button="Fazer Cadastro"
            close={close} open={open} values={{
                email: valueCadastro.email,
                senha: valueCadastro.senha,
                nome: valueCadastro.nome,
                telefone: valueCadastro.telefone,
                cep: valueCadastro.cep,
                complemento: valueCadastro.complemento,
                endereco: valueCadastro.endereco
            }}        >
          <label>Nome</label>
          <input
            name="nome"
            value={valueCadastro.nome}
            onChange={onChange}
            placeholder="Seu nome completo"
          />
          <label>Telefone</label>
          <input
            name="telefone"
            value={valueCadastro.telefone}
            onChange={onChange}
            type="tel"
            placeholder="Telefone"
            />
                <label>CEP</label>
          <input
            name="cep"
            value={valueCadastro.cep}
            onChange={onChange}
            placeholder="CEP"
            required pattern="\d{5}-\d{3}"
            />
            <label>Endereço</label>
          <input
            name="endereco"
            value={valueCadastro.endereco}
            onChange={onChange}
            placeholder="Endereço"
            />
        <label>Complemento</label>
            <input
                name="complemento"
                value={valueCadastro.complemento}
                onChange={onChange}
                placeholder="Complemento"
            />
        </Modal>
    )
}
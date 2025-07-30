import { useContext, useState } from "react";
import Modal from "./Modal";
import { ModalContext } from "../context/ModalContext";
import { UsuarioContext } from "../context/UsuarioContext";
import http from "../http";

export default function Login({ open, close }: { open: boolean, close: () => void }) {

    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    const { setModal } = useContext(ModalContext);
    const { verificarLogin } = useContext(UsuarioContext)

    async function onSubmit() {
        try {
            const response = await http.post('public/login', usuario)
            const { access_token } = response.data;
            sessionStorage.setItem("token", access_token);
            setUsuario({
                email: "",
                senha: ""
            })

            setModal(false);
            verificarLogin()
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsuario((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <Modal
            labelEmail="E-mail"
            labelSenha="Senha"
            title="LOGIN"
            isSignin={false}
            button="Fazer login"
            close={close} open={open}
            values={usuario}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}
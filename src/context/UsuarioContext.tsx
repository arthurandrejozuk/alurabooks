import React, { createContext,  useState } from "react"



type UsuarioContextType = {
  logged: boolean;
    setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  verificarLogin: () => Promise<void>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UsuarioContext = createContext<UsuarioContextType>({
  logged: false,
  setLogged: () => { },
  verificarLogin: async () => {},
});
export default function UsuarioProvider({children} : {children:React.ReactNode}) {

    const [logged, setLogged] = useState(false)

    
        const verificarLogin = async () => {
            try {
                const response = await fetch("http://localhost:8000/public/login", {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                });
                console.log(response)
                if (response.ok) {
                    setLogged(true);
                } else {
                    setLogged(false);
                }        
            } catch (err) {
                console.error("Erro ao verificar login:", err);
                setLogged(false);
            }
        }
        
   

    return (
        <UsuarioContext.Provider value={{logged, setLogged, verificarLogin}}>
            {children}
        </UsuarioContext.Provider>
    )
}
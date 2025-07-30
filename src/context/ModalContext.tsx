import React, { createContext, useState } from "react";

type ModalContextType = {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    login: boolean,
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};


// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<ModalContextType>({
    modal: false,
    setModal: () => { },
    login: true,
    setLogin: () => { },
});


export default function ModalProvider({children}:{children:React.ReactNode}) {

    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState(true);

    return (
        <ModalContext.Provider value={{modal, setModal, login, setLogin}}>
            {children}
        </ModalContext.Provider>
    )
}

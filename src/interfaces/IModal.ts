export interface IModal {
    open: boolean;
    close: () => void;
    title: string;
    labelEmail: string;
    labelSenha: string;
    button: string;
    isSignin: boolean;
    children?: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        email: string,
        senha: string,
        [key: string]: string; 
    }
    onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import Pedidos from "../components/Pedidos";
import Categoria from "../pages/Categoria";
import Livro from "../pages/Livro";
import Carrinho from "../pages/Carrinho";
import MainLayout from "../layout/main";

const Rotas = () => {
    return (
         <BrowserRouter>
            <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/categorias/:slug" element={<Categoria />} />
                <Route path="/livros/:slug" element={<Livro />} />
                <Route path="/minha-sacola" element={<Carrinho/>} />
            </Route>
            </Routes>
          </BrowserRouter>
    )
}


export default Rotas;
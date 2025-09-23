
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
import Categoria from "./pages/Categoria";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Livro from "./pages/Livro";
// import Cadastro from "./components/Cadastro";



const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/categorias/:slug" element={<Categoria />} />
           <Route path="/livros/:slug" element={<Livro />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;

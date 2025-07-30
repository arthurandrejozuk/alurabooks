
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
// import Cadastro from "./components/Cadastro";



function App() {


  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

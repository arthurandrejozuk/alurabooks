


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalProvider from "./context/ModalContext";
import ABApolloClient from "./components/ABApolloClient";
import Rotas from "./routes";
// import Cadastro from "./components/Cadastro";



const queryClient = new QueryClient()

function App() {



  return (
    <QueryClientProvider client={queryClient} >
      <ABApolloClient>
        <ModalProvider>
         <Rotas/>
        </ModalProvider>
      </ABApolloClient>
    </QueryClientProvider>
  )
}

export default App;

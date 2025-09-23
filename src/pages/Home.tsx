
import Banner from "../components/Banner";
import Destaque from "../components/Destaque";
import Main from "../layout/main";
import ModalProvider from "../context/ModalContext";
import BuscaCategoria from "../components/BuscaCategorias";
import Newsletter from "../components/Newsletter";
import { useQuery } from "@tanstack/react-query";
import { obterLivros } from "../http";
import ErrorMessage from "../components/ErrorMessage";



export default function HomePage() {

  // const livros = useLivros();
  const { data: livros, error, isLoading } = useQuery({
    queryKey: ["livros"],
    queryFn: () => obterLivros()
  })

  if (error) {
    console.log("Alguma coisa deu errado")
  }

  return (
    <ModalProvider>
      <Main>
        <Banner title="Já sabe por onde começar?" main={true} />
        {
          error ? <ErrorMessage text={`Alguma coisa deu errado: ${error.message}`} className="error_message"/> : 
          <>
            <Destaque isLoading={isLoading} title="ÚLTIMOS LANÇAMENTOS" livros={livros} />
            <Destaque isLoading={isLoading} title="MAIS VENDIDOS" livros={livros} />
          </>
        }
        <BuscaCategoria />
        <Newsletter />
      </Main>
    </ModalProvider>
  )
}
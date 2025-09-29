
import Banner from "../components/Banner";
import Destaque from "../components/Destaque";
import BuscaCategoria from "../components/BuscaCategorias";
import Newsletter from "../components/Newsletter";
import ErrorMessage from "../components/ErrorMessage";
import { useLivrosDestaques} from "../graphql/livros/hooks";



export default function HomePage() {

  const { data, error, loading } = useLivrosDestaques();

  if (error) {
    console.log("Alguma coisa deu errado")
  }

  return (
      <>
        <Banner title="Já sabe por onde começar?" main={true} />
        {
          error ? <ErrorMessage text={`Alguma coisa deu errado: ${error.message}`} className="error_message"/> : 
          <>
            <Destaque isLoading={loading} title="ÚLTIMOS LANÇAMENTOS" livros={data?.destaques.lancamentos} />
            <Destaque isLoading={loading} title="MAIS VENDIDOS" livros={data?.destaques.maisVendidos} />
          </>
        }
        <BuscaCategoria />
        <Newsletter />
      </>
  )
}
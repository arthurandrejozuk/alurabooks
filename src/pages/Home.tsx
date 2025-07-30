
import Banner from "../components/Banner";
import BuscaCategoria from "../components/BuscaCategorias";
import Destaque from "../components/Destaque";
import Newsletter from "../components/Newsletter";
import Main from "../layout/main";
import type { ILivro } from "../interfaces/ILivros";
import ModalProvider from "../context/ModalContext";

const livros:ILivro[] = [
  {
    img: "src/assets/livros/image_25.png",
    title: "Apache Kafka e Spring Boot",
    desc: "Comunicação assíncrona entre microsserviços",
    preco: "29,00",
  },
  {
    img: "src/assets/livros/image_27.png",
    title: "Liderança em Design",
    desc: "Habilidades de gestão para alavancar sua carreira",
    preco: "29,00"
  },
  {
    img: "src/assets/livros/image_26.png",
    title: "JavaScript Assertivo",
    desc: "Teste a qualidade do código em todas as camadas da aplicação",
    preco: "29,00"
  }
]


export default function HomePage() {


    return (
        <ModalProvider>
            <Main>
                <Banner title="Já sabe por onde começar?" main={true} />
                <Destaque title="ÚLTIMOS LANÇAMENTOS" livros={livros} />
                <Destaque title="MAIS VENDIDOS" livros={livros} />
                <BuscaCategoria  />
                <Newsletter />
            </Main>
        </ModalProvider>
    )
}
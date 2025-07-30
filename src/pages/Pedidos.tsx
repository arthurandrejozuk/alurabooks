import Banner from "../components/Banner";
import Pedidos from "../components/Pedidos";
import ModalProvider from "../context/ModalContext";
import Layout from "../layout/main";

export default function PedidosPage() {
    return (
        <ModalProvider>
            <Layout>
                <Banner main={false} title="Minha conta" />
                <Pedidos/>
            </Layout>
        </ModalProvider>
    )
}
import Banner from "../components/Banner";
import Pedidos from "../components/Pedidos";
import Layout from "../layout/main";

export default function PedidosPage() {
    return (
            <Layout>
                <Banner main={false} title="Minha conta" />
                <Pedidos/>
            </Layout>
    )
}
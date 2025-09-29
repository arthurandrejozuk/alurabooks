import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import type { ReactElement } from "react";

// Para utilizar o apolloClient usa-se um provider com uma memoria
// e uma uri do graphql do backend. Tudo é inserido na configuração do client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:9000/graphql"
    })
});

type Props = {
    children: ReactElement;
}

const ABApolloClient = ({ children }:Props) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ABApolloClient;
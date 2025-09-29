import { gql } from "@apollo/client";

export const OBTER_CATEGORIAS = gql`
    
query obterCategoria {
  categorias  {
    id
    nome
    slug
  }
}

`


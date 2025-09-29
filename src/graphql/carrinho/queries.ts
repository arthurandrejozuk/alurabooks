import { gql } from "@apollo/client";

export const OBTER_CARRINHO = gql`
query ObterCarrinho {
	carrinho{
		total
        itens{
			quantidade
      opcaoCompra{
        preco
      }
      livro{
        titulo
        imagemCapa
        descricao
        autor{
          nome
        }
      }
    }
  }
}

`

import { gql } from "@apollo/client";

export const OBTER_LIVROS = gql`
    
  query ObterLivros($categoriaId:Int, $titulo: String) {
    livros(categoriaId: $categoriaId, titulo: $titulo) {
        imagemCapa
        slug
        id
        titulo
        opcoesCompra{
            id
            preco
        }
    }
}
 
`

export const OBTER_DESTAQUES = gql`
  query ObterLancamentos {
    destaques {
      lancamentos {
        id
        slug
        titulo
        imagemCapa
        descricao
        opcoesCompra {
          id
          preco
        }
        autor {
            nome
        }
      }
      maisVendidos {
        id
        slug
        titulo
        imagemCapa
        descricao
        opcoesCompra {
          id
          preco
        }
        autor {
            nome
        }
      }
    }
  }

`
export const OBTER_INFORMACOES_LIVRO = gql`

query ObterInformacaoLivro($slug: String!) {
  livro(slug: $slug) {
   titulo
    id
    categoriaId
    slug
    isbn
    descricao
    numeroPaginas
    imagemCapa
    sobre
    tags{
      id
      nome
    }
    autor{
      nome
      sobre
		}
		opcoesCompra{
			id
      titulo
      formatos
      preco
    }
    autorId
  }
}

`

// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`
import { useState } from "react";
export default function Home(){
    const [listaProdutos, setProdutos] = useState([
        { id: 1, produto: 'Rural Willys', preco: 'R$ 100000' },
        { id: 2, produto: 'Kombi', preco: 'R$ 20000' },
        { id: 3, produto: 'Fusca', preco: 'R$ 30000' },
        {id: 4, produto: " Chevrolet", preco: "19000 R$" }
      ]);

    const [listaPedidos, setListaPedidos] = useState([])
    const adicionarItemPedidos = (objeto) =>{
        setListaPedidos([...listaPedidos, objeto])
    }


    const removerItemPedidos = (id) => {
        let removerProduto = false 
        let listaAux = listaPedidos.filter((produto) =>
        {   
            if(removerProduto == false){
                if(produto.id !== id){
                    return produto
                }
                else{
                    removerProduto = true 
                    return null
                }
            }
                    else{
                        return produto
                    }
        })
        setListaPedidos(listaAux)
        }

    return (
        <div>
             <h1>loja de carro:</h1>
             {listaProdutos.map((produto) => 
              <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.produto}</p> 
              <button onClick={ () => adicionarItemPedidos(produto)}>Selecionar</button>
              </div>)}

             {
                listaPedidos.map((produto) => <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.produto}</p>
              <button onClick={ () => removerItemPedidos(produto.id)}>Remover</button>
                </div>)}
        </div>
    )
}

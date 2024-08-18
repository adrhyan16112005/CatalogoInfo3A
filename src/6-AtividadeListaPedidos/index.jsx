// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.
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

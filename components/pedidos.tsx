
import Pedido from "../models/pedido"
import Produto from "../models/produto"

const data = await fetch('http://localhost:3000/api/pedidos')
    .then(res => res.json());

const Pedidos = () => {
    const pedidos: Pedido[] = [];
    data.map((pedido: Pedido) => {
        for (const raw_data of data) {
            pedidos.push(new Pedido(
                new Date(raw_data.data),
                raw_data.produtos.map(
                    (produto: { nome: string; preco: number; quantidade: number; }) =>
                        new Produto(produto.nome, produto.preco, produto.quantidade)
                ),
                raw_data.enderecoEntrega,
                raw_data.valorFrete,
                raw_data.valorTotal,
                raw_data.status
            ))
        }
    });

    // Returns the JSX for the table rows
    const getPedidosJSX = () => {
        return pedidos.map(pedido => pedido.getJSX())
    }

    return (
        <div>
            <h1>Pedidos</h1>
            <section id="Pedidos">
                {getPedidosJSX()}
            </section>
        </div>
    )
}

export default Pedidos
"use client"

import { useEffect, useState } from "react";
import Pedido from "../models/pedido"
import Produto from "../models/produto"


const Pedidos = () => {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [pedidoUpdated, setPedidoUpdated] = useState<boolean>(false);
    const [pedidosJSX, setPedidosJSX] = useState<JSX.Element[]>([]);

    // Fetches the data from the API
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/pedidos/");
            const data = await response.json();

            const newPedidos = data.map((raw_data: any) => {
                const pedido = new Pedido(
                    raw_data.id,
                    new Date(raw_data.criado_em),
                    raw_data.produtos.map(
                        (produto: { nome: string; estoque: number }) =>
                            new Produto(produto.nome, produto.estoque)
                    ),
                    raw_data.endereco_entrega,
                    raw_data.valor_frete,
                    raw_data.valor_total,
                    raw_data.status
                );
                pedido.setPedidoUpdated = setPedidoUpdated;
                return pedido;
            });

            setPedidos(newPedidos);
            setPedidoUpdated(true);
        };

        fetchData();
    }, []);

    // Handles change in pedidoUpdated
    useEffect(() => {
        if (pedidoUpdated) {
            setPedidosJSX(pedidos.map(pedido => pedido.getJSX()));
            setPedidoUpdated(false);
        }
    }, [pedidoUpdated, pedidos])

    return (
        <div>
            <h1>Pedidos</h1>
            <section id="Pedidos">
                {pedidosJSX}
            </section>
        </div>
    )
}

export default Pedidos
import Pedido from "../../../models/pedido"
import Produto from "../../../models/produto"


export async function GET(request: Request) {
    return new Response(JSON.stringify(
        [
            new Pedido(
                new Date(2021, 5, 1),
                [
                    new Produto('Produto 1', 1, 1),
                    new Produto('Produto 2', 2, 2),
                    new Produto('Produto 3', 3, 3)
                ],
                'Rua 1, 1',
                1,
                6,
                'Pendente'
            ),
            new Pedido(
                new Date(2021, 5, 2),
                [
                    new Produto('Produto 4', 4, 4),
                    new Produto('Produto 5', 5, 5),
                    new Produto('Produto 6', 6, 6)
                ],
                'Rua 2, 2',
                2,
                15,
                'Pendente'
            ),
            new Pedido(
                new Date(2021, 5, 3),
                [
                    new Produto('Produto 7', 7, 7),
                    new Produto('Produto 8', 8, 8),
                    new Produto('Produto 9', 9, 9)
                ],
                'Rua 3, 3',
                3,
                24,
                'Pendente'
            )
        ]
    ))
}
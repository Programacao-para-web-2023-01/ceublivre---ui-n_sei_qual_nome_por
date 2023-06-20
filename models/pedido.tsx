import Produto from './produto'

class Pedido {
    data: Date
    produtos: Produto[]
    enderecoEntrega: string
    valorFrete: number
    valorTotal: number
    status: string

    constructor(data: Date, produtos: Produto[], enderecoEntrega: string, valorFrete: number, valorTotal: number, status: string) {
        this.data = data
        this.produtos = produtos
        this.enderecoEntrega = enderecoEntrega
        this.valorFrete = valorFrete
        this.valorTotal = valorTotal
        this.status = status
    }

    // Returns the JSX for the table row
    getJSX() {
        return (
            <ul className='ListaPedidos'>
                <li><b>Data:</b> {this.data.toLocaleDateString()}</li>
                <li><b>Endereço de Entrega:</b> {this.enderecoEntrega}</li>
                <li><b>Valor do Frete:</b> {this.valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
                <li><b>Valor Total:</b> {this.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
                <li><b>Status:</b> {this.status}</li>
                <li><b>Produtos:</b></li>
                <li>
                    <table className='TabelaProdutos'>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                        </tr>
                        {this.produtos.map(produto => produto.getJSX())}
                    </table>
                </li>
                <br />
            </ul>
        )
    }

}

export default Pedido
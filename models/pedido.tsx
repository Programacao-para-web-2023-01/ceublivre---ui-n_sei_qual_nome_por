import { type } from 'os'
import Produto from './produto'

type PedidoUpdatedFun = { (newPedidoUpdated: boolean): void }

class Pedido {
    id: number
    data: Date
    produtos: Produto[]
    enderecoEntrega: string
    valorFrete: number
    valorTotal: number
    status: string

    private _setPedidoUpdated: PedidoUpdatedFun
    public get setPedidoUpdated(): PedidoUpdatedFun {
        return this._setPedidoUpdated
    }
    public set setPedidoUpdated(value: PedidoUpdatedFun) {
        this._setPedidoUpdated = value
    }

    constructor(id: number, data: Date, produtos: Produto[], enderecoEntrega: string, valorFrete: number, valorTotal: number, status: string) {
        this.id = id
        this.data = data
        this.produtos = produtos
        this.enderecoEntrega = enderecoEntrega
        this.valorFrete = valorFrete
        this.valorTotal = valorTotal
        this.status = status
        this._setPedidoUpdated = (newPedidoUpdated: boolean) => { }
    }

    handleRastrear = async (event: any) => {
        event.preventDefault()
        alert(`Rastreando pedido ${this.id}`)

        // const response = await fetch(`http://localhost:3000/api/pedidos/${this.id}`);
        // const data = await response.json();

        // this.status = data.status;
        this.status = 'Entregue'
        this.setPedidoUpdated(true)
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
                <button id={`btnRastrear${this.id}`} onClick={this.handleRastrear}>Rastrear</button>
            </ul>
        )
    }

}

export default Pedido
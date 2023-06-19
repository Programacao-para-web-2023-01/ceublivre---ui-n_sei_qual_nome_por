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
            <tr>
                <td>{this.data.toLocaleDateString()}</td>
                <td>{this.produtos.map(produto => produto.getJSX())}</td>
                <td>{this.enderecoEntrega}</td>
                <td>{this.valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{this.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{this.status}</td>
            </tr>
        )
    }

}
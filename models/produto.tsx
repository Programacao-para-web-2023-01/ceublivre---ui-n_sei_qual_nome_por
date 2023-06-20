

class Produto {
    nome: string
    preco: number
    quantidade: number

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    // Returns the JSX for the table row
    getJSX() {
        return (
            <tr className="ItemProduto">
                <td>{this.nome}</td>
                <td>{this.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{this.quantidade}</td>
            </tr>
        )
    }
}

export default Produto
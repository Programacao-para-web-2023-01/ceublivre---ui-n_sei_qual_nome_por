

class Produto {
    nome: string
    estoque: number

    constructor(nome: string, estoque: number) {
        this.nome = nome
        this.estoque = estoque
    }

    // Returns the JSX for the table row
    getJSX() {
        return (
            <tr className="ItemProduto">
                <td>{this.nome}</td>
                <td>{this.estoque}</td>
            </tr>
        )
    }
}

export default Produto
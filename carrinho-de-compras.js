function adicionarProduto(nome, preco, quantidade) {

    const produto = {
        nome:nome,
        preco:preco,
        quantidade:quantidade
    }
    return produto
}
const produto1 = adicionarProduto('Camiseta', 50.00, 2)
const produto2 = adicionarProduto('Bermuda', 35.00, 2)
const produto3 = adicionarProduto('Meia', 10.00, 4)
const carrinho = [produto1, produto2, produto3]

function calcularTotal() {

    let valor_total = 0

    for (let prod in carrinho) {
        
    const produto_separado = carrinho[prod]
    valor_total += produto_separado.preco * produto_separado.quantidade // Utilize o += para adicionar a soma a variavel
        
    }
    

    // Retorne a variavel valor_total no console.log
    return console.log(valor_total)

}

calcularTotal()
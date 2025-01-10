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
console.log(carrinho)

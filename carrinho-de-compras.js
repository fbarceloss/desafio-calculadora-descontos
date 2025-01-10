function adicionarProduto(nome, preco, quantidade) {
//função adiciona atributos do produto (definidos argumentos)
    const produto = {
        nome:nome,
        preco:preco,
        quantidade:quantidade
    }
    return produto //retorna produto com as variaveis definidas pelas atribuições da função
}
const produto1 = adicionarProduto('Camiseta', 50.00, 2)
const produto2 = adicionarProduto('Bermuda', 35.00, 2)
const produto3 = adicionarProduto('Meia', 10.00, 4)
const carrinho = [produto1, produto2, produto3]
//criação das variaveis produtos (prod1/2/3) e do carrinho em array (composto pelos produtos)

function calcularTotal() {

    let valor_total = 0

    for (let prod in carrinho) {

    const produto_separado = carrinho[prod]
    
    valor_total += produto_separado.preco * produto_separado.quantidade
    }
        //função inicia o valor total em 0 (let para que possa ser definido mais tarde como soma (+=))
        //for percorre o carrinho e identifica todos as variaveis produtos definidas
        //variavel produto_separado trás o conteúdo das variaveis produto no carrinho após o for trazer os produtos separadamente, resultando em separação da array por item.
        //valor total definido agora como soma de PREÇO * QTD (total = SUM(x * y) )
    return console.log(valor_total)
} //retorna o valor total calculado

calcularTotal()
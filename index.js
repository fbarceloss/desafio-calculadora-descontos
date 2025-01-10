function calcularPrecoFinal(preco, porcentagem) {

    const desconto = (preco * porcentagem) / 100
    const precoFinal = preco - desconto

    return precoFinal

}

const preco = 100
const porcentagem = 25
const precoFinal = calcularPrecoFinal(preco,porcentagem)
console.log(precoFinal)
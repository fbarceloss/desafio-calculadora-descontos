function calcularPrecoFinal(preco, porcentagem) {
//defini a função com os argumentos que serão calculados
    const desconto = (preco * porcentagem) / 100
    const precoFinal = preco - desconto
//variaveis com fórmula de calculo (valores a serem definidos)
    return precoFinal
//trás o preço final
}

const preco = 100
const porcentagem = 25
//definição de valores para os argumentos definidos na função
const precoFinal = calcularPrecoFinal(preco,porcentagem)
//chamei a função pra calcular pra calcular a variavel (precoFinal)
console.log(precoFinal)
//retorna precoFinal (cálculo feito - valor final)
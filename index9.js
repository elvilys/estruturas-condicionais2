const velocidade = Number(prompt("informe a velocidade do seu carro"));
const velocidadeMaxima = 80

if (velocidade > velocidadeMaxima){
    const limiteExcedido = velocidade - velocidadeMaxima
    const multa = (limiteExcedido * 5)
    alert (`Velocidade excedida, valor da multa: R$ ${multa}`)
} else {
    alert (`Velocidade dentro do límite`)
}
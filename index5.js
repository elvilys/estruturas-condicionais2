const altura = parseFloat(prompt("Digite sua altura:"));
const peso = parseFloat(prompt("Digite seu peso:"));

const imc = peso / (altura * altura);

if (imc <= 0){
    document.write("valor invalido");
} else if (imc < 18.5){
    document.write("Você está abaixo da faixa de peso ideal");
} else if (imc > 24.99){
    document.write("VoCê está acima da faixa de peso ideal");
} else{
    document.write("Você está dentro da faixa depeso ideal");
}
document.write (`seu IMC é ${imc}`);

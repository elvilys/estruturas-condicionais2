const numero = prompt("Digite um número:");


if (numero < 0){
    document.write(`seu numero e negativo ${numero}`);
} else if (numero > 0) {
    document.write(`seu numero e positivo ${numero}`);
}else {
    document.write('seu numero e 0 :${numero}' + numero);
}
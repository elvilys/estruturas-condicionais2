const idadeAtleta = parseFloat(prompt("Digite sua idade:"));
const pesoAtleta = parseFloat(prompt("Digite seu peso:"));


if( idadeAtleta < 12){
    document.write("Categoria infantil!")
} else if ( idadeAtleta >=13 && idadeAtleta <=16) {
    document.write ("ategoria Juvenil!")
} else if ( idadeAtleta >=17 && idadeAtleta<=24){
    document.write("Categoria Sênior")
} else if (idadeAtleta >=24){
    document.write("Categoria veterano")}


if (pesoAtleta <=20){
    document.write("Categoria infantil");
} else if (pesoAtleta <= 40){
    document.write("categoria juvenil")
}
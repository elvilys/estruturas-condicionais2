const idadeAtleta = parseFloat(prompt("Digite sua idade:"));
const pesoAtleta = parseFloat(prompt("Digite seu peso:"));

if (idadeAtleta <=12) 
    document.write("categoria infantil")

else if (pesoAtleta <=30){
    document.write("categoria infantil");
 
    }
if (idadeAtleta >=13 && idadeAtleta <=16){
    document.write("categoria juvenil")
} else if (pesoAtleta > 40 && pesoAtleta <=45 ){
    document.write("categoria peso juvenil");}
 
if(idadeAtleta >=17 && idadeAtleta <=24){
    document.write(" categoria  peso sênior")
} else if (pesoAtleta >=45 && pesoAtleta <=60){

} if (idadeAtleta > 24){
    document.write("categoria veterano")
} else if ( pesoAtleta >60){
    document.write("categoria peso veterano")
} else{
    document.write("idade e peso invalido")
}
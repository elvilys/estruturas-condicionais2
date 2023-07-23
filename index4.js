const valorCarro = Number(prompt("para cálculo de imposto e custo de fábrica ,Digite o valor do veículo"));

const custoFabrica = 0.28;
const imposto = 0.45;
const parcCusto = valorCarro * custoFabrica;
const parcImposto = valorCarro * imposto;

document.write(
    `O valor do custo de fábrica do veículo informado é de R$${parcCusto.toFixed(2)}
    , e o valor de impostos é de R$${parcImposto }`);




    
const numero = Number(prompt("Digite um número de 1 a 7 "));
switch (numero) {
    case 1:
        {
            document.write("<p>Segunda Feira<p/>");
        }

        break;
    case 2:

        document.write("<p>Terça Feira<p/>");


        break;
    case 3:

        document.write("<p>Quarta Feira<p/>");


        break;
    case 4:

        document.write("<p>Quinta Feira<p/>");


        break;
    case 5:

        document.write("<p>Sexta Feira<p/>");
        break;
    case 6:

        document.write("<p>sábado<p/>");
        break;
    case 7:

        document.write("<p>Domingo<p/>");


        break;

    default:
        document.write("<p> Valor ínvalido</p>");
        break;
}
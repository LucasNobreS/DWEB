function maiorNumero(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

function ordemCrescente(num1, num2, num3) {
    let numeros = [num1, num2, num3];

    numeros.sort(function(a, b) {
        return a - b;
    });

    return numeros;
}

function verificarPalindromo(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/\s/g, "");

    let invertido = texto.split("").reverse().join("");

    if (texto === invertido) {
        return "É um palíndromo!";
    } else {
        return "Não é um palíndromo!";
    }
}

function verificarSubconjunto(palavra1, palavra2) {
    if (palavra1 == undefined || palavra2 == undefined || palavra1.trim() == "" || palavra2.trim() == "") {
        return "Erro";
    }

    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();

    if (palavra1.includes(palavra2)) {
        return "É um subconjunto";
    } else {
        return "Não é um subconjunto";
    }
}

function diaDaSemana(data) {
    let partes = data.split("/");
    let dia = Number(partes[0]);
    let mes = Number(partes[1]);
    let ano = Number(partes[2]);

    let dataInformada = new Date(ano, mes - 1, dia);

    if (dataInformada.getDate() != dia || dataInformada.getMonth() != mes - 1 || dataInformada.getFullYear() != ano) {
        return "Data inválida";
    }

    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    return dias[dataInformada.getDay()];
}

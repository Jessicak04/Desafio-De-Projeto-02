//Crie uma função que recebe como parâmetro a quantidade
//de vitória e derrotas de um jogador, depois disso retorne
//o resultado para uma variável, o saldo de Rankeadas
//deve ser feito através do cálculo (vitórias - derrotas)

//Função determinando a quantidade de vitórias e derrotas
function quantidadeVitoriasDerrotas (vitorias, derrotas){
    let resultado = vitorias - derrotas;
    return resultado
}
let resultado = quantidadeVitoriasDerrotas(25,5)
//Função determinando a posição na rankeada
function posicaoRankeada (resultado){
    let rank
    if (resultado <= 10){
        rank = "Ferro"
    } else if (resultado > 11 && resultado <= 20){
        rank = "Bronze"
    } else if (resultado > 21 && resultado <= 50){
        rank = "Prata"
    } else if (resultado > 51 && resultado <= 80){
        rank = "Ouro" 
    } else if (resultado > 81 && resultado <= 90){
        rank = "Diamante" 
    } else if (resultado > 91 && resultado <= 100){
        rank = "Lendário" 
    } else {
        rank = "Imortal" 
    }
    return rank
}
let rank = posicaoRankeada (resultado)
//Função determinando quantas vitórias faltam para a próxima posição
function faltamQuantas (restante){

    if (resultado <= 10){
        restante = 11 - resultado
    } else if (resultado > 11 && resultado <= 20){
        restante = 21 - resultado
    } else if (resultado > 21 && resultado <= 50){
        restante = 51 - resultado
    } else if (resultado > 51 && resultado <= 80){
        restante = 81 - resultado
    } else if (resultado > 81 && resultado <= 90){
        restante = 91 - resultado
    } else if (resultado > 91 && resultado <= 100){
        restante = 101 - resultado 
    } else{ 
    restante = 0
    }
    return restante
}
let restante = faltamQuantas (resultado)
//Saída desejada
console.log("O Herói tem de saldo de vitórias " + 
                resultado + " e está no nível " + rank)
//Saída de quantas vitórias faltam para a próxima posição
if (resultado < 101){
    console.log("Ainda faltam " + restante + " vitória para a próxima posição!")
} else {
    console.log("Você já está no nível máximo, parabéns!")
}


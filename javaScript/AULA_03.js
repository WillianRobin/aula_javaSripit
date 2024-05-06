//estrutura iF

// >= maior ou igual
// <= menor ou igual
// == igual
// === valor e tipo de dado   (¬_¬)
// != valor diferente

//CONDIÇÃO:
//if valor verdadeiro true
//else valor falso false

let media1 = 1000000
let media2 = "1000000"

console.log(media1 === media2)

let nota = 6
let aprovado = 7

console.log(nota >= aprovado)

// if (media >= 7) {
//     console.log(`Aluno Aprovado`)
// }
// else {
//     console.log(`Aluno Reprovado`)
// }
//&& adicionar mais uma variavel na condição, mas ambas sendo verdadeiro
//|| mesma coisa do && porem pelo menos um tem que ser verdadeiro

let media = 6;
if(media >= 7){
    console.log(`Aluno Aprovado.`)
} else if (media >= 6){
    console.log(`Aluno Ap. Conselho.`)
} else {
    console.log(`Aluno Reprovado`)
}
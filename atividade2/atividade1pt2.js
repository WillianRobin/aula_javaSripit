let acertou = false;

while (acertou === false){
    let numero = Number(prompt("Escreva um numero de 0 a 10"));
    
    if (numero == 7){
        alert("PARABÉNS! VOCÊ ACERTOU")
        acertou = true;
    } else if (numero != 7){
        alert("VOCÊ ERROU! TENTE NOVAMENTE")
    }
}